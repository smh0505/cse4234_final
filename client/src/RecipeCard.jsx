import "./RecipeCard.css";

const regex = /P(?:([.,\d]+)D)?T?(?:([.,\d]+)H)?(?:([.,\d]+)M)?/;

export default function RecipeCard(props) {
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
      <article>
        <img src={props.recipe.image} loading="lazy" />
        <h3>{props.recipe.name}</h3>
        <p>
          <strong>Cook Time</strong>: {getTime(props.recipe.cookTime)} <br />
          <strong>Prep Time</strong>: {getTime(props.recipe.prepTime)} <br />
          <strong>Yield</strong>: {props.recipe.recipeYield || "N/A"}
        </p>
      </article>
    </>
  );
}
