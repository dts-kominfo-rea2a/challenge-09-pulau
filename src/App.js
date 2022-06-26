import './App.css';
import Contact from './components/Contact';
import Header from './components/Header';

// Uncomment untuk memuat daftar kontak
import contacts from './data/contacts.json';

const App = () => {
    // Masukkan Header dan Contact ke dalam div App
    return ( 
    <div className = "App" >
        <Header />
        <Contact key="0" data={contacts[0]}/>
        <Contact key="1" data={contacts[1]}/>
        <Contact key="2" data={contacts[2]}/>
        <Contact key="3" data={contacts[3]}/>
        <Contact key="4" data={contacts[4]}/>
        <Contact key="5" data={contacts[5]}/>
        </div>
    );
}
export default App