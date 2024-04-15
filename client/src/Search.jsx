import { useState } from "react"
import SearchResults from "./SearchResults.jsx"

export default function Search() {
  const [query, setQuery] = useState("")
  const [result, setResult] = useState([])

  const search = (e) => {
    e.preventDefault()
    fetch(`http://localhost:5050/search?query=${query}`)
      .then(res => res.json())
      .then(data => setResult(data))
  }

  return <>
    <form onSubmit={search}>
      <input type="text" name="query" value={query} onChange={e => setQuery(e.target.value)} />
      <input type="submit" value="Submit" />
    </form>
    <span>{result.length} recipes found.</span>
    <SearchResults results={result}></SearchResults>
  </>
}
