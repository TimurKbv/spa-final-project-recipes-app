import React from "react"

function FilterRecipe({setCountry, setCategory, setItemsPerPage, setPage}) {
    
    function handleCountry(evt) {
        setCountry(evt.target.value.toLowerCase());
        setPage(1)
      }
      function handleCategory(evt) {
        setCategory(evt.target.value.toLowerCase());
        setPage(1)
      }
      function handleItemsPerPage(evt) {
        setItemsPerPage(evt.target.value);
        setPage(1)
      }

    return (
        <ul className="bg- w-full  flex justify-evenly p-5 ">

                        <li className="flex flex-col gap-3 items-center ">
                            <label htmlFor="country-select" >Country</label>
                            <select 
                            onChange={(evt) => handleCountry(evt)}
                            id="country-select" 
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            >
                                <option  value="">All</option>
                                <option  value="Italy">Italy</option>
                                <option value="Germany">Germany</option>
                                <option value="China">China</option>
                                <option value="Scotland">Scotland</option>
                            </select>
                        </li>

                        <li className="flex flex-col gap-3 items-center ">
                            <label htmlFor="category-select" >Category</label>
                            <select 
                            onChange={evt => handleCategory(evt)}
                            id="category-select" 
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            >
                                <option  value="">All</option>
                                <option  value="Noodles">Noodles</option>
                                <option value="Roast">Roast</option>
                                <option value="Fried Rice">Fried Rice</option>
                            </select>
                        </li>

                        <li className="flex flex-col gap-3 items-center "> 
                            <label htmlFor="category-select" > Items Per Page</label>
                            <select 
                            onChange={evt => handleItemsPerPage(evt)}
                            id="items-per-page-select" 
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            >
                                <option value="3">3</option>
                                <option value="5">5</option>
                                <option value="10">10</option>
                                <option value="15">15</option>
                            </select>
                        </li>
                    </ul>
    )
}

export default FilterRecipe;