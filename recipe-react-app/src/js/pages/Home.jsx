import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import DisplayRecipes from "../components/DisplayRecipes";
import { DEFAULT_BUTTON_STYLES } from "../components/DisplayRecipes";
import { useNavigate } from "react-router-dom";

const ITEMS_PER_PAGE_DEFAULT = 6;
export const RECIPES_URL = "http://localhost:8080/recipes/";

function Home() {
  const [isLoading, setLoading] = useState(true);
  const [recipes, setRecipes] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    setLoading(true);
    // Simulation langer fetch Zugriffe
    setTimeout(() => {
      (async function () {
        // Erstelle Fetch Link
        let fetchURL =
          RECIPES_URL + "paginate?page=1" + "&size=" + ITEMS_PER_PAGE_DEFAULT;
        try {
          let fetchedData = await (await axios.get(fetchURL)).data;
          // Hole REZEPTE
          setRecipes(fetchedData.content);
        } catch (error) {
          console.error(error);
        } finally {
          // Loading Completed
          setLoading(false);
        }
      })();
    }, 500);
  }, []);
  /* -------------------------------DELETE ------------------------ */
  function removeRecipe(recipe) {

    axios
    .delete("http://localhost:8080/recipes/" + recipe.id)
    .then((res) => {
      console.log(res);
      navigate("/recipes", {replace: true});
    })
    .catch((err) => {
    console.error(err);
    }); 
  }
  
  return (
    <>
      {isLoading ? (
        /* Wenn isLoading dann Wird LOADING gezeigt */
        <div className="container flex justify-center items-center w-screen h-screen">
          <h2 className="text-5xl text-center">LOADING...</h2>
        </div>
      ) : (
        /* Ansonsten werden die Rezepte gerendert */
        <article className=" w-full grid grid-cols-3 auto-rows-auto gap-10 p-10 ">
          <DisplayRecipes recipes={recipes} removeRecipe={removeRecipe} />
        </article>
      )}
      {/* BUTTON TO RECIPES */}
      <div className="flex justify-center py-10">
        <Link to={"/recipes/"} className={`${DEFAULT_BUTTON_STYLES} bg-gray-200 text-center transition-all rounded-xl hover:bg-white  mx-auto text-2xl px-7 py-3 hover:scale-125 hover:translate-y-1`}>
            Show more
        </Link>
      </div>
    </>
  );
}

export default Home;
