import './RecipeList.css';
import RecipeCard from '../RecipeCard/RecipeCard';
function RecipeList({recipes}) {
    

    return (
        <div className="recipe-list-container">
            {recipes.map(recipe => 
                <RecipeCard 
                    key={recipe.idMeal}  // ← Important! Unique ID for each
                    mealName={recipe.strMeal} 
                    mealArea={recipe.strArea}
                    mealImage={recipe.strMealThumb}  // ← Add image too!
                />
            )}
        </div>
    );
}

export default RecipeList;