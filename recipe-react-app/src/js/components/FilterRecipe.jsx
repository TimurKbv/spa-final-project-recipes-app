import React, { useEffect, useState } from "react";
import axios from "axios";
import { RECIPES_URL } from "../pages/Home";

function FilterRecipe({ setCountry, setCategory, setItemsPerPage, setPage, recipes}) {
  const [allRecipes, setAllRecipes] = useState([]);
  const [countryOptions, setCountryOptions] = useState([]);
  const [categoryOptions, setCategoryOptions] = useState([]);


  function handleCountry(evt) {
    setCountry(evt.target.value.toLowerCase());
    setPage(1);
  }
  function handleCategory(evt) {
    setCategory(evt.target.value.toLowerCase());
    setPage(1);
  }
  function handleItemsPerPage(evt) {
    setItemsPerPage(evt.target.value);
    setPage(1);
  }


  useEffect(() => {

    (async function () {
        // Erstelle Fetch Link 
        let fetchURL = RECIPES_URL ;
        try {
          let fetchedData = await (await axios.get(fetchURL)).data;              

          // Hole ALLE REZEPTE
          setAllRecipes(fetchedData);
        } catch (error) {
          console.error(error);
        } 
      })();

    setCountryOptions(() => {
        let filter = 'country';
        return getOptions(filter)
    });
    setCategoryOptions(() => {
        let filter = 'category';
        return getOptions(filter)
    })

  }, [recipes]);

//   HILFSFUNKTION um options zu bekommen
  function getOptions(filter) {
    let filters = [] ;
    allRecipes.forEach((rec) => {
        if (!filters.includes(rec[filter].toLowerCase())) filters.push(rec[filter].toLowerCase())
    });
    return filters.map(c => <option key={c} value={c}>{c.toUpperCase()}</option>)
  }


  return (
    <ul className="bg- w-full  flex justify-evenly p-5 ">
        {/* Countries Filter */}
      <li className="flex flex-col gap-3 items-center ">
        <label htmlFor="country-select">Country</label>
        <select
          onChange={(evt) => handleCountry(evt)}
          id="country-select"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="">ALL</option>
          {/* COUNTRIES OPTIONS AUS DER API */}
          {countryOptions}
        </select>
      </li>
        {/* Category Filter */}
      <li className="flex flex-col gap-3 items-center ">
        <label htmlFor="category-select">Category</label>
        <select
          onChange={(evt) => handleCategory(evt)}
          id="category-select"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
            {/* CATEGORIES OPTIONS AUS DER API */}
          <option value="">ALL</option>
          {categoryOptions}
        </select>
      </li>
        {/* Items per page Filter */}
      <li className="flex flex-col gap-3 items-center ">
        <label htmlFor="category-select"> Items Per Page</label>
        <select
          onChange={(evt) => handleItemsPerPage(evt)}
          id="items-per-page-select"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="1">1</option>
          <option value="3">3</option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
        </select>
      </li>
    </ul>
  );
}

export default FilterRecipe;
