import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import Pagination from "../components/Pagination";
import FilterRecipe from "../components/FilterRecipe";
import DisplayRecipes from "../components/DisplayRecipes";
import removeRecipe from "../helpers/RemoveRecipe";


const ITEMS_PER_PAGE_DEFAULT = 1;
export const RECIPES_URL = "http://localhost:8080/recipes/";

function Recipes() {
  const [searchParams, setSearchParams] = useSearchParams(); 
  const [isLoading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(ITEMS_PER_PAGE_DEFAULT);
  const [recipes, setRecipes] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [country, setCountry] = useState("");
  const [category, setCategory] = useState("");
  const [isDeleted, setDeleted] = useState(false);

  //TODO DELETE Funktions optiomieren | Styles 

  useEffect(() => {
    setLoading(true);
    // Simulation langer fetch Zugriffe
    setTimeout(() => {
        (async function () {
            // Erstelle Fetch Link 
            let fetchURL =
              RECIPES_URL +
              "paginate?page=" +
              page + 
              "&size=" +
              itemsPerPage +
              "&country=" +
              country +
              "&category=" +
              category; 
            try {
              let fetchedData = await (await axios.get(fetchURL)).data;              
              // Hole Pages(TOTAL)
              setTotalPages(fetchedData.totalPages);
              // Hole REZEPTE
              setRecipes(fetchedData.content);
            } catch (error) {
              // console.error(error);
            } finally {
              // Loading Completed
              setLoading(false)
            }
          })();
    }, 500)

    // Mache useEffect abhängig von FILTER und der aktuellen PAGE
  }, [country, category, itemsPerPage, page, isDeleted]);

  useEffect( () => {

    let pageParam = parseInt(searchParams.get('page'));
    if (isNaN(pageParam)) {
      setPageParams(1);
    } else {
      setPage(pageParam)
    }
  }, [searchParams])


  function setPageParams(page) {
    setSearchParams({page: page});
  }
  /* -------------------------------DELETE FUNKTION KANN MAN OPTIMIEREN------------------------ */
  function removeRecipe(recipe) {
    console.log(recipe);
    // delete
    axios
    .delete("http://localhost:8080/recipes/" + recipe.id)
    .then((res) => {
      console.log(res);
      setDeleted((prev) => prev = !prev )
    })
    .catch((err) => {
    // behandle fehler vom User
    console.error(err);
    }); 

  }
/* ------------------------------------------------------------------------ ------------------------*/
  return (
    <>
      <div className="container recipes-container flex flex-col">
        {/* FILTERS */}
        <FilterRecipe setPage={setPageParams} setItemsPerPage={setItemsPerPage} setCategory={setCategory} setCountry={setCountry} recipes={recipes} />

        {/* REZEPTE RENDERING in GRID Container*/}
        {isLoading ? 
        /* Wenn isLoading dann Wird LOADING gezeigt */
            (<div className="container flex justify-center items-center w-screen h-screen">
                <h2 className="text-5xl text-center">LOADING...</h2>
            </div>)
           : /* Ansonsten werden die Rezepte gerendert */
            (<article className=" w-full grid grid-cols-3 auto-rows-auto gap-10 p-10">
                <DisplayRecipes recipes={recipes} removeRecipe={removeRecipe} />
             </article>)
            }
        
      </div>
      {/* PAGINATION */}
      {(recipes.length > 0) && <Pagination page={page} setPageParams={setPageParams}  totalPages={totalPages} />}
    </>
  );
}

export default Recipes;
