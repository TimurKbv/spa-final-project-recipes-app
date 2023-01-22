import axios from "axios";

export default function removeRecipe(recipe, setDeleted) {
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