import { DEFAULT_BUTTON_STYLES } from "./DisplayRecipes";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";


function FormCreateRecipe() {
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [country, setCountry] = useState('');
    const [image, setImage] = useState('');
    const [cooktime, setCooktime] = useState(0);
    const [ingredients, setIngredients] = useState('');
    const [procedure, setProcedure] = useState('');
    const [description, setDescription] = useState('');
    const [inputsAreFullfilled, setInputsAreFullfilled] = useState(false);
    const navigate = useNavigate();



    // Prüfe ob alle Angaben da sind um den button zu aktivieren
  useEffect(() => {
    if (title.length > 0 && category.length > 0 && country.length > 0 && description.length > 0 && image.length > 0 && procedure.length > 0 && cooktime > 0 && ingredients.length > 0) {
        setInputsAreFullfilled(true)
    } else setInputsAreFullfilled(false)

  }, [title,  category, country, image, cooktime, ingredients, procedure, description])
    
    function handleSubmit(evt) {
        evt.preventDefault();

        let ingr = ingredients.trim().split(',');

        let data = {
            title: title,
            category: category,
            country: country,
            description: description,
            picture: image,
            procedure: procedure,
            cooktime: cooktime,
            ingredients: ingr
        };
        console.log(data);

        if (inputsAreFullfilled) {
                        // create
            axios.post('http://localhost:8080/recipes/', data)
            .then(res => {
                console.log(res.data);
                let id = res.data.id;
                
                navigate("/details/" + id, {replace: true});
            })
            .catch(err => {
                // behandle fehler vom User
                console.log(err);
            });
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit} >
                    {/* title */}
                <fieldset className="mb-4 mx-auto w-1/4">
                    <label htmlFor="recipe-title" className="text-center block mb-2 text-sm font-medium text-gray-900 dark:text-white">Recipe name</label>
                    <input onChange={evt => setTitle(evt.target.value)} value={title} placeholder="Spagetti..." type="text" id="recipe-title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </fieldset>
                    {/* category */}
                <fieldset className="mb-4 mx-auto w-1/4">
                    <label htmlFor="recipe-category" className="text-center block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                    <input onChange={evt => setCategory(evt.target.value)}  value={category} placeholder="Rice.." type="text" id="recipe-category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </fieldset>
                    {/* country */}
                <fieldset className="mb-4 mx-auto w-1/4">
                    <label htmlFor="recipe-country" className="text-center block mb-2 text-sm font-medium text-gray-900 dark:text-white">Country</label>
                    <input onChange={evt => setCountry(evt.target.value)}  value={country} placeholder="Germany" type="text" id="recipe-country" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </fieldset>  
                    {/* picture */}
                <fieldset className="mb-4 mx-auto w-1/3">
                    <label htmlFor="recipe-picture" className="text-center block mb-2 text-sm font-medium text-gray-900 dark:text-white">Picture</label>
                    <input onChange={evt => setImage(evt.target.value)}  value={image} type="text" id="recipe-picture" placeholder="Link to the image" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </fieldset>
                    {/* description */}
                <fieldset className="mb-4 mx-auto w-1/2">
                    <label htmlFor="recipe-description" className="text-center block mb-2 text-sm font-medium text-gray-900 dark:text-white">Describtion</label>
                    <textarea onChange={evt => setDescription(evt.target.value)}  value={description} id="recipe-description" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Describe your recipe"></textarea>
                </fieldset>
                    {/* cooktime */}
                <fieldset className="mb-4 mx-auto w-1/12">
                    <label htmlFor="cooktime" className="text-center block mb-2 text-sm font-medium text-gray-900 dark:text-white">Cooktime</label>
                    <input onChange={evt => setCooktime(parseInt(evt.target.value))}  value={cooktime} placeholder="40" type="number" id="cooktime" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </fieldset> 
                    {/* ingredients */}
                <fieldset className="mb-4 mx-auto w-1/2">
                    <label htmlFor="ingredients" className="text-center block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ingredients</label>
                    <textarea onChange={evt => setIngredients(evt.target.value)}  value={ingredients} id="ingredients" rows="5" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Water, Noodles"></textarea>
                </fieldset>
                    {/* procedure */}
                <fieldset className="mb-4 mx-auto w-1/2">
                    <label htmlFor="procedure" className="text-center block mb-2 text-sm font-medium text-gray-900 dark:text-white">Procedure</label>
                    <textarea onChange={evt => setProcedure(evt.target.value)}  value={procedure} id="procedure" rows="5" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=""></textarea>
                </fieldset>

                <fieldset className=" mx-auto w-1/2 flex justify-center pt-5 pb-10">
                    <button disabled={!inputsAreFullfilled} className={`${DEFAULT_BUTTON_STYLES} text-center`}>
                        Create Recipe
                    </button>
                </fieldset>

            </form>
        </>
    )
}

export default FormCreateRecipe;