import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate, useParams,useLocation } from "react-router-dom";
import Reload from "../reload/Reload";
function Cord({ scroll, val,toggle,title }) {

  const redirect = useNavigate()


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
                  <Button onClick={()=>{
                  redirect({
                    pathname:"Info",
                    search: `?idx=${elm}`
                  })
                  }} variant="primary">بيت</Button>
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
