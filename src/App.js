import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import ColorChanger from './components/ColorChanger';
import ContactForm  from './components/ContactForm';
import TextInput from './components/TextInput';
import ItemList from './components/ItemList';

function App() {
  return (
    <div className="App">
      <HelloWorld />
      <ColorChanger />
      <ContactForm />
      <TextInput />
      <ItemList />
    </div>
  );
}

export default App;
