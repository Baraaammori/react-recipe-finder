import { useState } from 'react';
import './SearchForm.css';

function SearchForm({ onSearch }) {  
    const[ input , setInput] = useState("")

    function handleChange(event){
            setInput(event.target.value)
    }

    function handleSubmit(event){
        event.preventDefault()
        if (input.trim()) {
            onSearch(input); 
        }
    }

    return (
        <div className="search-form-container">
            <form onSubmit={handleSubmit} className="search-form">
                <input 
                    type="text"  
                    value={input} 
                    onChange={handleChange}
                    placeholder="Search for recipes... (e.g., pasta, chicken, cake)"
                    className="search-input"
                />
                <button type="submit" className="search-button">
                    🔍 Search
                </button>
            </form>
        </div>
    );
}

export default SearchForm;