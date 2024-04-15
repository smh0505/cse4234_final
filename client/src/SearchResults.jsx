import RecipeCard from "./RecipeCard"
import "./SearchResults.css"

export default function SearchResults(props) {
  return <>
    <section>
      {props.results?.map((recipe) => <RecipeCard key={recipe._id} recipe={recipe}></RecipeCard>)}
    </section>
  </>
}
