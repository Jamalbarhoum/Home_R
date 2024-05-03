import React, { useEffect, useMemo, useRef, useState } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { useLocation } from "react-router";
import Reload from "../reload/Reload";
import axios from "axios";
import "./infi.css";
import { MotionAnimate } from "react-motion-animate";
import Table from "../TableInfo/Table";

function Info({ home }) {
  const [show, setToggleShow] = useState(false);
  const [data, setData_product] = useState({});
  const [toggle, setToggle] = useState(false);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("idx") * 1 || "";
  const id = useRef(searchQuery);
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
    const getProduct = () => {
      axios
        .get(`http://localhost:5000/val/${id.current}`)
        .then((result) => {
          console.log(result.data.result[0]);
          setData_product(result.data.result[0]);
          setToggle(true);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getProduct();
  }, []);

  return (
    <>
      {toggle ? (
        <div style={{ height: "140vh" }} className="up scrollbar">
          <Container className="Container">
            <Row className="Row">
              {" "}
              <Col
                style={{
                  height: "80vh",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Image className="image"
                  style={{
                    width: "100%",
                    height: "80%",
                    borderRadius: "90px 600px 100px 30px",
                    border: "7px solid rgb(48,46,45)",
                  }}
                  src={data.image}
                />
              </Col>
              <Col
                style={{
                  color: "#fff",
                  display: "flex",
                  height: "80vh",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <h1>{data.city}</h1>
                <h1 style={{ color: "red", margin: "20px" }}>${data.price}</h1>
              </Col>
            </Row>
            <Button
              style={{ marginBottom: "20px" }}
              onClick={() => {
                setToggleShow(!show);
                if (!show) {
                  window.scrollTo({
                    top: document.body.scrollHeight,
                    behavior: "smooth", // Optional: Use smooth scrolling behavior
                  });
                } else {
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth", // Optional: Use smooth scrolling behavior
                  });
                }
              }}
            >
              View information
            </Button>
            {show && (
              <MotionAnimate>
                {" "}
                <Row>
                  {" "}
                  <Table data={data} />
                </Row>
              </MotionAnimate>
            )}
          </Container>
        </div>
      ) : (
        <div
          style={{
            height: "90vh",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#000",
          }}
        >
          <Reload />
        </div>
      )}
    </>
  );
}

export default Info;
