import './LoadingSpinner.css';

function LoadingSpinner() {
    return (
        <div className="loading-container">
            <div className="spinner"></div>
            <p className="loading-text">Searching for  recipes</p>
        </div>
    );
}

export default LoadingSpinner;