import "./RecipeCard.css";

const regex = /P(?:([.,\d]+)D)?T?(?:([.,\d]+)H)?(?:([.,\d]+)M)?/;

export default function RecipeCard({ recipe, onDetail }) {
  const getTime = (time) => {
    if (!time) return "N/A";

    const matches = time.match(regex);

    let hour =
      (matches[1] ? Number(matches[1]) : 0) * 24 +
      (matches[2] ? Number(matches[2]) : 0);
    let minute = matches[3] ? Number(matches[3]) : 0;

    hour += Math.floor(minute / 60);
    minute %= 60;

    return (
      String(hour).padStart(2, "0") + ":" + String(minute).padStart(2, "0")
    );
  };

  const openPage = () => {
    onDetail(recipe)
  }

  return (
    <>
      <article>
        <img src={recipe.image} loading="lazy" />
        <h3>{recipe.name}</h3>
        <p>
          <strong>Cook Time</strong>: {getTime(recipe.cookTime)} <br />
          <strong>Prep Time</strong>: {getTime(recipe.prepTime)} <br />
          <strong>Yield</strong>: {recipe.recipeYield || "N/A"}
        </p>
        <footer>
          <button onClick={openPage}>View Recipe</button>
        </footer>
      </article>
    </>
  );
}
