import { DEFAULT_BUTTON_STYLES } from "./DisplayRecipes";
import { useEffect, useState } from "react";
import axios from "axios";

function EditForm({ recipe, setRecipe, setEditClicked }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [country, setCountry] = useState("");
  const [image, setImage] = useState("");
  const [cooktime, setCooktime] = useState(0);
  const [ingredients, setIngredients] = useState("");
  const [procedure, setProcedure] = useState("");
  const [description, setDescription] = useState("");
  const [inputsAreFullfilled, setInputsAreFullfilled] = useState(false);


    // Prüfe ob alle Angaben da sind um den button zu aktivieren
  useEffect(() => {
    if (title.length > 0 && category.length > 0 && country.length > 0 && description.length > 0 && image.length > 0 && procedure.length > 0 && cooktime > 0 && ingredients.length > 0) {
        setInputsAreFullfilled(true)
    } else setInputsAreFullfilled(false)

  }, [title,  category, country, image, cooktime, ingredients, procedure, description])



  function handleSubmit(evt) {
    evt.preventDefault();

    // erstelle neue receptDaten
    let ingr = ingredients.trim().split(", ");
    let data = {
      title: title,
      category: category,
      country: country,
      description: description,
      picture: image,
      procedure: procedure,
      cooktime: cooktime,
      ingredients: ingr,
    };

    // Wenn alle Daten da sind, schicke neue Daten an server
    if (inputsAreFullfilled) {
        setInputsAreFullfilled(true)
        // edit
        axios
        .put("http://localhost:8080/recipes/" + recipe.id, data)
        .then((res) => {
        setRecipe(res.data);
        })
        .catch((err) => {
        // behandle fehler vom User
        }); 
    } 
        // Schalte toogle aus, um Form zu verstecken und Liste mit RezeptDaten zu zeigen
      setEditClicked(false)
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="w-full">
        {/* title */}
        <fieldset className="mb-4 mx-5 w-full flex">
          <label
            htmlFor="recipe-title"
            className="font-bold text-xl  w-1/4 block mb-2 text-gray-900 dark:text-white"
          >
            Recipe name
          </label>
          <input
            onChange={(evt) => setTitle(evt.target.value)}
            value={title}
            placeholder={recipe.title}
            type="text"
            id="recipe-title"
            className="w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </fieldset>
        {/* category */}
        <fieldset  className="mb-4 mx-5 w-full flex">
          <label
            htmlFor="recipe-category"
            className="w-1/4 block mb-2 text-base font-medium text-gray-900 dark:text-white"
          >
            Category
          </label>
          <input
            onChange={(evt) => setCategory(evt.target.value)}
            value={category}
            placeholder={recipe.category}
            type="text"
            id="recipe-category"
            className="w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </fieldset>
        {/* country */}
        <fieldset className="mb-4 mx-5 w-full flex">
          <label
            htmlFor="recipe-country"
            className="w-1/4 block mb-2 text-base font-medium text-gray-900 dark:text-white"
          >
            Country
          </label>
          <input
            onChange={(evt) => setCountry(evt.target.value)}
            value={country}
            placeholder={recipe.country}
            type="text"
            id="recipe-country"
            className="w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </fieldset>
        {/* picture */}
        <fieldset className="mb-4 mx-5 w-full flex">
          <label
            htmlFor="recipe-picture"
            className="w-1/4 block mb-2 text-base font-medium text-gray-900 dark:text-white"
          >
            Picture
          </label>
          <input
            onChange={(evt) => setImage(evt.target.value)}
            value={image}
            type="text"
            id="recipe-picture"
            placeholder={recipe.picture}
            className="w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </fieldset>
        {/* description */}
        <fieldset className="mb-4 mx-5 w-full flex">
          <label
            htmlFor="recipe-description"
            className="w-1/3 block mb-2 text-base font-medium text-gray-900 dark:text-white"
          >
            Describtion
          </label>
          <textarea
            onChange={(evt) => setDescription(evt.target.value)}
            value={description}
            id="recipe-description"
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder={recipe.description}
          ></textarea>
        </fieldset>
        {/* cooktime */}
        <fieldset className="mb-4 mx-5 w-full flex">
          <label
            htmlFor="cooktime"
            className="w-1/4 block mb-2 text-base font-medium text-gray-900 dark:text-white"
          >
            Cooktime
          </label>
          <input
            onChange={(evt) => setCooktime(parseInt(evt.target.value))}
            value={cooktime}
            placeholder={recipe.cooktime}
            type="number"
            id="cooktime"
            className="w-1/12 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </fieldset>
        {/* ingredients */}
        <fieldset className="mb-4 mx-5 w-full flex">
          <label
            htmlFor="ingredients"
            className="w-1/3 block mb-2 text-base font-medium text-gray-900 dark:text-white"
          >
            Ingredients
          </label>
          <textarea
            onChange={(evt) => setIngredients(evt.target.value)}
            value={ingredients}
            id="ingredients"
            rows="5"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder={recipe.ingredients.join(', ')}
          ></textarea>
        </fieldset>
        {/* procedure */}
        <fieldset className="mb-4 mx-5 w-full flex">
          <label
            htmlFor="procedure"
            className="w-1/3 block mb-2 text-base font-medium text-gray-900 dark:text-white"
          >
            Procedure
          </label>
          <textarea
            onChange={(evt) => setProcedure(evt.target.value)}
            value={procedure}
            id="procedure"
            rows="5"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder={recipe.procedure}
          ></textarea>
        </fieldset>

        <fieldset className=" mx-auto w-1/2 flex justify-center pt-5 pb-10">
          <button 
          disabled={!inputsAreFullfilled}
          className={`${DEFAULT_BUTTON_STYLES} text-center`}>
            Edit Recipe
          </button>
        </fieldset>
      </form>
    </>
  );
}

export default EditForm;
