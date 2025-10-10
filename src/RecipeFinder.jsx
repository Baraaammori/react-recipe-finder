import { useState } from 'react';
import SearchForm from './components/SearchForm/SearchForm';
import RecipeList from './components/RecipeList/RecipeList';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';
import './RecipeFinder.css';

function RecipeFinder() {
    
    const [recipes, setRecipes] = useState([]); 
    const [loading, setLoading] = useState(false);




    async function handleSearch(searchTerm) {
        setLoading(true);

        try {
            const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`;
            const response = await fetch(url);
            const data = await response.json();  
            
            
            console.log('API Response:', data);  
            
            if (data.meals) {
                setRecipes(data.meals);  
            } else {
                setRecipes([]);  
                alert('No recipes found!');
            }
            
        } catch (error) {
            alert('Failed to fetch recipes!');
            setRecipes([]);
        }
        
        setLoading(false);  
    }






    return (
        <div className="recipe-finder">
            <h2> Recipe Finder</h2>
            
            <SearchForm onSearch={handleSearch}/>
            
            {loading ? (
                <LoadingSpinner />
            ) : (
                <RecipeList recipes={recipes} />
            )}
            
        </div>
    );
}

export default RecipeFinder;