import { useState } from "react";
import './ContactForm.css';

function ContactForm({ onAddContact, onClose }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    

    function handleSubmit(event) {
        event.preventDefault();
        
        
        if (name.trim() === "" || email.trim() === "" || number.trim() === "") {
            return;
        }

        
        const newContact = {
            id: Date.now(),
            name: name.trim(),
            email: email.trim(),
            number: number.trim()
        };

        onAddContact(newContact);
        setName("");
        setEmail("");
        setNumber("");
        onClose && onClose();
    }

    return (
        <div className="contact-form">
            <h2 className="form-title">Add New Contact</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input 
                        type="text" 
                        placeholder="Enter contact name" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="form-input"
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        placeholder="Enter phone number" 
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        className="form-input"
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="email" 
                        placeholder="Enter email address" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-input"
                    />
                </div>
                <button type="submit" className="submit-btn">Add Contact</button>
            </form>
        </div>
    );
}

export default ContactForm;