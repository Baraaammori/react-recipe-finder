import './RecipeCard.css';

function RecipeCard({mealName, mealArea, mealImage}) {
    return (
        <div className="recipe-card">
            <img src={mealImage} alt={mealName} className="recipe-image" />
            <h3>{mealName}</h3>
            <p> {mealArea}</p>
        </div>
    );
}

export default RecipeCard;