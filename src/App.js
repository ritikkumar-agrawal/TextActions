// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextBox from './Components/TextBox';
// import Navbar from './Components/Navbar';

function App() {
  return (
    <>
    <Navbar classname="Laddu" title="TextActions"/>
    <div className = "container">
    <TextBox heading="Enter the Text below :" />
    </div>
    </>
  );
}

export default App;
