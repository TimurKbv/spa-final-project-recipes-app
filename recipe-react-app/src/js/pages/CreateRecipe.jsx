
import FormCreateRecipe from "../components/FormCreateRecipe";


function CreateRecipe() {
  return (
    <>
      <div className="container flex flex-col  items-center w-screen h-screen">
        <h2 className="py-10 text-4xl font-bold">Create Recipe</h2>
        <div className="container flex flex-col w-full h-full">
            <FormCreateRecipe />
        </div>
      </div>
    </>
  );
}

export default CreateRecipe;
