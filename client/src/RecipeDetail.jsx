import "./RecipeDetail.css";

const regex = /P(?:([.,\d]+)D)?T?(?:([.,\d]+)H)?(?:([.,\d]+)M)?/;

export default function RecipeDetail({ recipe }) {
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

  return (
    <>
      <article className="full-detail">
        <img src={recipe.image} />
        <h1>{recipe.name}</h1>
        <p>
          <strong>Cook Time</strong>: {getTime(recipe.cookTime)} <br />
          <strong>Prep Time</strong>: {getTime(recipe.prepTime)} <br />
          <strong>Yield</strong>: {recipe.recipeYield || "N/A"}
        </p>
        <p>{recipe.description}</p>
        <strong>Ingredients</strong>
        <fieldset>
          <ul>
            {recipe?.ingredients.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </fieldset>
      </article>
    </>
  );
}
