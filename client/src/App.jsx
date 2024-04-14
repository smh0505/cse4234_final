import { useState } from "react";
import Search from "./Search.jsx"

export default function App() {
  const [count, setCount] = useState(0);

  const populate = () => {
    fetch("http://localhost:5050/populate", {
      method: "post"
    }).then(e => e.json()).then(data => {
      if (data.success) setCount(data.count)
    })
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
      <main>
        <Search></Search>
      </main>
    </>
  );
}
