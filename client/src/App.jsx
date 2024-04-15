import { useState } from "react";
import Search from "./Search.jsx";
import SearchResults from "./SearchResults.jsx";

export default function App() {
  const [count, setCount] = useState(0);
  const [result, setResult] = useState([]);

  const populate = () => {
    fetch("http://localhost:5050/populate", {
      method: "post"
    }).then(e => e.json()).then(data => {
      if (data.success) setCount(data.count)
    })
  }

  const updateResult = (data) => {
    setResult(data)
  }

  return (
    <>
      <header>
        {count ? (
          <span>{count} recipe(s) successfully added to the database</span>
        ) : (
          <button onClick={populate}>Populate DB</button>
        )}
      </header>

      <h1> Group 6 Recipe Finder!</h1>

      <main>
        <Search onResult={updateResult}></Search>
        <span>{result.length} recipes found.</span>
        <SearchResults results={result}></SearchResults>
      </main>
    </>
  );
}
