
import './App.css';
import Navbars from './Navbar/Navbar';
import Header from './Header/Header';
import Products from './Products/Products';
import { useRef } from 'react';
import Mems from './mems/Mems';
import Reload from './reload/Reload';
function App() {
  const scroll = useRef()

  console.log("jamal");
  return (
    <div className="App">
    
      <Mems/>
        <Navbars scroll={scroll}/>
        <Header/>
        <Products scroll={scroll}/>
    </div>
  );
}

export default App;
