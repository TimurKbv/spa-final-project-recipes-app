

function DetailsList({ recipe }) {
    
    return (
        <ul className=" h-full flex flex-col gap-2 px-10 details-list">
              <li className="">
                <h2 className="font-bold text-xl ">{recipe.title}</h2>
              </li>
              <li>
                <h4 >
                  <span>Category:</span> {recipe.category}
                </h4>
              </li> 
              <li>
                <h4 ><span>Country:</span> {recipe.country}</h4>
              </li>
              <li>
                <h4 ><span>Cooktime:</span> {recipe.cooktime}</h4>
              </li>
              <li>
                <h4 ><span>Ingredients</span></h4>
                <p >{recipe.ingredients}</p>
              </li>
              <li>
                <h4 ><span>Description</span></h4>
                <p >{recipe.description}</p>
              </li>
              <li>
                <h4><span>Procedure</span></h4>
                <p > {recipe.procedure}</p>
              </li>
            </ul>
    )
}


export default DetailsList;