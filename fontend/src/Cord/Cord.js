import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from "axios";
import Reload from "../reload/Reload";
function Cord({ scroll }) {
  const [val, setVal] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:5000/val/")
      .then((result) => {
        setTimeout(() => {
          setVal(result.data.result);
        }, 1000);
       
        console.log(result.data.result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      {!val &&    <Reload/> }
      {val?.map((elm, index) => {
        return (
          <>

            <Card ref={scroll} style={{ width: "18rem",height:"26rem" }}>
              
              <Card.Img
                style={{ paddingTop: "10px",width:"300px",height:"220px" }}
                variant="top"
                src={elm.image}
              />
              <Card.Body>
                <Card.Title>{elm.address.slice(3)}</Card.Title>
                <Card.Text>{elm.description}</Card.Text>
                <Card.Text>$ {elm.price}</Card.Text>
                <Button variant="primary">بيت</Button>
              </Card.Body>
            </Card>
          </>
        );
      })}
     
    </>
  );
}

export default Cord;
