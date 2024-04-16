import { useState } from "react"
import RecipeCard from "./RecipeCard"
import RecipeDetail from "./RecipeDetail"
import "./SearchResults.css"

export default function SearchResults(props) {
  const [detail, setDetail] = useState(null)

  return <>
    {
      detail 
        ? <section>
            <RecipeDetail recipe={detail}></RecipeDetail>
          </section>
        : <section>
            {props.results?.map((recipe) => <RecipeCard key={recipe._id} recipe={recipe} onDetail={setDetail}></RecipeCard>)}
          </section>
    }
  </>
}
