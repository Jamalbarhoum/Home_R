
import './App.css';
import Navbars from './Navbar/Navbar';
import Header from './Header/Header';
import Products from './Products/Products';
import { useRef } from 'react';
import Mems from './mems/Mems';

function App() {
  const scroll = useRef()
  const scroll2 = useRef()

  console.log("jamal");
  return (
    <div className="App">
    
          <Mems/>
        <Navbars scroll2={scroll2} scroll={scroll}/>
        <Header/>
        <Products scroll2={scroll2}  scroll={scroll}/>
    </div>
  );
}

export default App;
