import { useEffect, useState} from "react";
import ContactForm from "./ContactsForm";
import './Contact.css';

function Contacts(props){
    const [contacts , setcontacts] = useState(() => {
        const saved = localStorage.getItem("contacts");
        return saved ? JSON.parse(saved) : [];
    });

       useEffect(() => {
            localStorage.setItem("contacts", JSON.stringify(contacts));
        }, [contacts]);

    const [editingId , setEditingId] = useState(null)
    const [editingName , setEditingName] = useState("")
    const [editingEmail , setEditingEmail] = useState("")
    const [editingNumber , setEditingNumber] = useState("")
    const[search , setSearch] = useState("")
    
    function handleAddContact(newContact) {
        setcontacts([newContact, ...contacts]);
    }

    function handleDelete(id){
           
        setcontacts(contacts.filter(contact => contact.id !== id));
    }
    
    function StartEditing(id , number , name , email){
        setEditingEmail(email)
        setEditingId(id)
        setEditingName(name)
        setEditingNumber(number)
    }

    function handleEditingNameChange(event){
        setEditingName(event.target.value);
    }
    function handleEditingEmailChange(event){
        setEditingEmail(event.target.value);
    }
    function handleEditingNumberChange(event){
        setEditingNumber(event.target.value);
    }

    function SaveEditing(id){

        setcontacts(contacts.map(contact =>
            contact.id === id ? { ...contact, name: editingName, number: editingNumber, email: editingEmail } : contact
        ));
        setEditingEmail("");
        setEditingNumber("");
        setEditingName("");
        setEditingId(null)
    }

    function handleSearchChange(event){
        setSearch(event.target.value)
    }

    const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(search.toLowerCase()) ||
    contact.email.toLowerCase().includes(search.toLowerCase()) ||
    contact.number.includes(search)
);

    return(
        <div className="contact-container">
           <input 
               type="text" 
               placeholder="Search contacts by name" 
               onChange={handleSearchChange}
               className="search-bar"
           />
            {props.showForm && <ContactForm onAddContact={handleAddContact} onClose={props.toggleForm} />}

            <ul className="contact-list">
                {filteredContacts.map(contact=>
                    <li key={contact.id} className="contact-item">
                        {editingId === contact.id ? (
        <div className="edit-form">
            <input 
                value={editingName} 
                onChange={handleEditingNameChange} 
                placeholder="Name"
                className="edit-input"
            />
            <input 
                value={editingNumber} 
                onChange={handleEditingNumberChange} 
                placeholder="Phone Number"
                className="edit-input"
            />
            <input 
                value={editingEmail} 
                onChange={handleEditingEmailChange} 
                placeholder="Email"
                className="edit-input"
            />
            <button onClick={() => SaveEditing(contact.id)} className="btn btn-save">Save Contact</button>
        </div>
    ) : (
        <div className="contact-info">
            <div className="contact-details">
                <span className="contact-name">{contact.name}</span>
                <span className="contact-phone">📞 {contact.number}</span>
                <span className="contact-email">✉️ {contact.email}</span>
            </div>
            <div className="contact-actions">
                <button onClick={() => StartEditing(contact.id, contact.number, contact.name, contact.email)} className="btn btn-edit">Edit</button>
                <button onClick={() => handleDelete(contact.id)} className="btn btn-delete">Delete</button>
            </div>
        </div>
    )}
                    </li>
                )}
            </ul>
            {filteredContacts.length === 0 && search && (
                <p style={{textAlign: 'center', color: '#666', fontSize: '18px', marginTop: '40px'}}>
                    No contacts found for "{search}" 🔍
                </p>
            )}
            {contacts.length === 0 && (
                <p style={{textAlign: 'center', color: '#666', fontSize: '18px', marginTop: '40px'}}>
                    No contacts yet. Click the + button to add your first contact! 👆
                </p>
            )}
        </div>
    );



}


export default Contacts