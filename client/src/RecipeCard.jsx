import "./RecipeCard.css";

const regex = /PT(?:([.,\d]+)H)?(?:([.,\d]+)M)?/;

export default function RecipeCard(props) {
  const getTime = (time) => {
    let duration = time || "N/A";
    if (duration !== "N/A") {
      const matches = time.match(regex);
      duration =
        String(matches[1] || 0).padStart(2, "0") +
        ":" +
        String(matches[2] || 0).padStart(2, "0");
    }
    return duration;
  };

  return (
    <>
      <article>
        <img src={props.recipe.image} loading="lazy"/>
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
