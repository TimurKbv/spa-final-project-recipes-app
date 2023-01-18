import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import Pagination from "../components/Pagination";
import FilterRecipe from "../components/FilterRecipe";
import DisplayRecipes from "../components/DisplayRecipes";

const ITEMS_PER_PAGE_DEFAULT = 3;
export const RECIPES_URL = "http://localhost:8080/recipes/";

function Home() {
  const [isLoading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(ITEMS_PER_PAGE_DEFAULT);
  const [recipes, setRecipes] = useState([]);
  const [totalPages, setTotalPages] = useState([]);
  const [country, setCountry] = useState("");
  const [category, setCategory] = useState("");

  //TODO page, options rendern, active page markieren

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

            // console.log(await (await axios.get(RECIPES_URL)).data);
            let fetch = await (await axios.get(fetchURL)).data;
      
            // Hole Pages(TOTAL)
            setTotalPages(fetch.totalPages);
            // Hole REZEPTE
            setRecipes(fetch.content);
            // Loading Completed
            setLoading(false)
          })();
    }, 500)

    // Mache useEffect abhängig von FILTER und der aktuellen PAGE
  }, [country, category, itemsPerPage, page]);




  return (
    <>
      <div className="container flex flex-col">
        {/* FILTERS */}
        <FilterRecipe setPage={setPage} setItemsPerPage={setItemsPerPage} setCategory={setCategory} setCountry={setCountry} /* handleItemsPerPage={handleItemsPerPage} handleCategory={handleCategory} handleCountry={handleCountry} *//>

        {/* REZEPTE RENDERING in GRID Container*/}
        {isLoading ? 
        /* Wenn isLoading dann Wird LOADING gezeigt */
            (<div className="container flex justify-center items-center w-screen h-screen">
                <h2 className="text-5xl text-center">LOADING...</h2>
            </div>)
           : /* Ansonsten werden die Rezepte gerendert */
            (<article className="bg-lime-600 w-full grid grid-cols-2 auto-rows-auto gap-10 p-10">
                <DisplayRecipes recipes={recipes} />
             </article>)
            }
        {/* PAGINATION */}
        <Pagination page={page} setPage={setPage} totalPages={totalPages} />
      </div>
    </>
  );
}

export default Home;
