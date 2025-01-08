export default function Recette() {
    return(
        <section>
          <h2>Création d'une recette</h2>

          <form className="mt-2">
            <div className="">
              <label htmlFor="title">Nom de la recette</label>
                <input className="rounded-full" type="text" id="title" name="title" required />
            </div> 
          </form>
        </section>
    )
}