import React from "react";
import { Container } from "react-bootstrap";

function Header() {

  return (
    <div style={{ height: "90vh" }} className="up">
      <Container style={{display:"flex",height:"100%",alignItems:"center", justifyContent:"center"}} className="Container-header">
        <div style={{width:"350px"}} className="Left side">
          <h1 style={{fontSize:"50px"}} className="content-header"> اشتري بين احلامك</h1>
        </div>
        <div className="Right-side">
          <img className="image-header" src="pexels-photo-106399.jpeg" alt="no result" />
        </div>
      </Container>
    </div>
  );
}

export default Header;
