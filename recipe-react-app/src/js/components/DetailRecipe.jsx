import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export const RECIPES_URL = "http://localhost:8080/recipes/";

function DetailRecipe() {
  const [isLoading, setLoading] = useState(true);
  const [recipe, setRecipe] = useState({});
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);

    (async function fetchData() {
      let fetchURL = RECIPES_URL + id;
      let data = await (await axios.get(fetchURL)).data;
      setRecipe(data);
      console.log(data);
    })();
    setLoading(false);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="container flex justify-center items-center w-screen h-screen"><h2 className="text-5xl">LOADING...</h2></div>
      ) : (
        <div className="container flex justify-center items-center w-screen h-screen">
          <div  className="container flex flex-col max-w-lg h-lg">
            <img
              src={recipe.picture}
              alt="Picture Image"
              className="w-full h-2/3 object-cover"
            />
            <ul className="w-full h-full flex flex-col gap-2">
              <li>
                <h3 className="font-bold text-center ">{recipe.title}</h3>
              </li>
              <li>
                <h4 className="text-opacity-100">
                  Category: {recipe.category}
                </h4>
              </li>
              <li>
                <h4>Country: {recipe.country}</h4>
              </li>
            </ul>
            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
              Add to Favourites
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default DetailRecipe;
