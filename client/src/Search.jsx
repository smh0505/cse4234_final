import { useState } from "react"

export default function Search({onResult}) {
  const [query, setQuery] = useState("")

  const search = (e) => {
    e.preventDefault()
    fetch(`http://localhost:5050/search?query=${query}`)
      .then(res => res.json())
      .then(data => onResult(data))
  }

  return <>
    <form onSubmit={search}>
      <input type="text" name="query" value={query} onChange={e => setQuery(e.target.value)} />
      <input class="button" type="submit" value="Submit" />
    </form>
  </>
}
