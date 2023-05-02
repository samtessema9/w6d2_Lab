import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import ColorChanger from './components/ColorChanger';
import ContactForm  from './components/ContactForm';
import TextInput from './components/TextInput';

function App() {
  return (
    <div className="App">
      <HelloWorld />
      <ColorChanger />
      <ContactForm />
      <TextInput />
    </div>
  );
}

export default App;
