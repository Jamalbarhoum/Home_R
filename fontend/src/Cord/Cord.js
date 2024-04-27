import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import Reload from "../reload/Reload";
function Cord({ scroll, val,toggle,title }) {




  return (
    <>
      <h2 > {title} </h2>
     
      {toggle ? (
        <Reload />
     
      ) : (
        val?.map((elm, index) => {
          return (
            <>
              <Card  style={{ width: "18rem", height: "26rem" }}>
                <Card.Img
                  style={{
                    paddingTop: "10px",
                    width: "300px",
                    height: "220px",
                  }}
                  variant="top"
                  src={elm.image}
                />
                <Card.Body >
                  <Card.Title>{elm.address.slice(3)}</Card.Title>
                  <Card.Text>{elm.description.slice(0,30)}</Card.Text>
                  <Card.Text>$ {elm.price}</Card.Text>
                  <Button variant="primary">بيت</Button>
                </Card.Body>
              </Card>
            </>
            
          );
        })
      )}
     <div ref={scroll}></div>
    </>
  );
}

export default Cord;
