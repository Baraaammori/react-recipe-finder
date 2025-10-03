import './App.css';
import { useState } from 'react';
import Contacts from './Contact';
import Navbar from './ContactsNavbar';

function App() {
  const [formView, setFormView] = useState(false);

  function toggleForm() {
    setFormView(!formView);
  }

  return (
    <div className="app">
      <Navbar logo="My Contacts" toggleForm={toggleForm}/>
      <main className="main-content">
        <Contacts toggleForm={toggleForm} showForm={formView}/>
      </main>
    </div>
  );
}

export default App;
