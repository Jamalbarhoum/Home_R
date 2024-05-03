/* eslint-disable no-unused-vars */
import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import Reload from "../reload/Reload";
import "./Card.css";
function Cord({ scroll, val, toggle, title }) {
  const redirect = useNavigate();

  return (
    <>
      {toggle ? (
        <div style={{height:"20vh", width:"100%",backgroundColor:"#fff",display:"flex",justifyContent:"center",alignItems:"center"}}>
          <Reload />
        </div>
       
      ) : (
        <>
          <h2> {title} </h2>
          {val?.map((elm, index) => {
            return (
              <>
                <Card className="Card_vis">
                  <Card.Img
                    className="img_card"
                    style={
                      {
                        // paddingTop: "10px",
                        // width: "300px",
                        // height: "220px",
                      }
                    }
                    variant="top"
                    src={elm.image}
                  />
                  <Card.Body className="Card_body">
                    <Card.Title>{elm.address.slice(3)}</Card.Title>
                    <Card.Text>{elm.description.slice(0, 30)}</Card.Text>
                    <Card.Text>$ {elm.price}</Card.Text>
                    <Button
                      onClick={() => {
                        redirect({
                          pathname: "Info",
                          search: `?idx=${elm.id}`,
                        });
                      }}
                      variant="primary"
                    >
                      بيت
                    </Button>
                  </Card.Body>
                </Card>
              </>
            );
          })}
        </>
      )}
      <div ref={scroll}></div>
    </>
  );
}

export default Cord;
