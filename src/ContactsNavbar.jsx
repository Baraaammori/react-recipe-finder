import './Navbar.css';

function Navbar(props) {
    return(
        <nav className="navbar">
            <div className="navbar-content">
                <a href="#" className="navbar-logo">
                    📱 {props.logo}
                </a>
                <div className="navbar-actions">
                    <button onClick={props.toggleForm} className="add-contact-btn">
                        <span className="plus-icon">+</span>
                        Add Contact
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;