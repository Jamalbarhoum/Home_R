import "./App.css";
import Navbars from "./Navbar/Navbar";
import Header from "./Header/Header";
import Products from "./Products/Products";
import { useRef } from "react";
import Mems from "./mems/Mems";
import { Routes, Route, Link } from "react-router-dom";
import Info from "./InforomationProduct/Info";
import Footer from "./footer/Footer";

function App() {
  const scroll = useRef();
  const scroll2 = useRef();

  console.log("jamal");
  return (
    <div className="App">
      <Routes>
        <Route
          path="/Info/"
          element={
            <>
            
              <Navbars scroll2={scroll2} scroll={scroll} />
              <Mems />
              <Info />{" "}
            </>
          }
        />
        <Route
          path="/"
          element={
            <>
              {" "}
              <Mems />
              <Navbars scroll2={scroll2} scroll={scroll} />
              <Header />
              <Products scroll2={scroll2} scroll={scroll} />
              <Footer/>
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
