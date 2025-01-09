import AddIngredientForm from "@/component/addIngredientForm";

export default function Recette() {
    return(
        <section className="container mx-auto p-4 flex flex-col items-center">
          <h2>Création d'une recette</h2>
          <AddIngredientForm />          
          <form className="mt-2">
            <div className="">
              <label htmlFor="title">Nom de la recette</label>
                <input className="rounded-full" type="text" id="title" name="title" required />
            </div> 
          </form>
        </section>
    )
}