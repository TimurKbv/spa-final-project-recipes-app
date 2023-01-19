import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import DisplayRecipes from "../components/DisplayRecipes";
import { DEFAULT_BUTTON_STYLES } from "../components/DisplayRecipes";

const ITEMS_PER_PAGE_DEFAULT = 4;
export const RECIPES_URL = "http://localhost:8080/recipes/";

function Home() {
  const [isLoading, setLoading] = useState(true);
  const [recipes, setRecipes] = useState([]);

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

  return (
    <>
      {isLoading ? (
        /* Wenn isLoading dann Wird LOADING gezeigt */
        <div className="container flex justify-center items-center w-screen h-screen">
          <h2 className="text-5xl text-center">LOADING...</h2>
        </div>
      ) : (
        /* Ansonsten werden die Rezepte gerendert */
        <article className="bg-lime-600 w-full grid grid-cols-2 auto-rows-auto gap-10 p-10">
          <DisplayRecipes recipes={recipes} />
        </article>
      )}
      <div className="flex justify-center py-10">
        <Link to={"/recipes/"} className={`${DEFAULT_BUTTON_STYLES} text-center mx-auto`}>
            Show more
        </Link>
      </div>
    </>
  );
}

export default Home;
