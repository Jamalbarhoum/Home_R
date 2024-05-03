import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Card from "../Cord/Cord";

import axios from "axios";
import ScrollTop from "../ScrollTop/ScrollTop";
function Products({ scroll, scroll2 }) {
  const [val, setVal] = useState([]);
  const [toggle, setToggle] = useState(true);

  const [data, setData] = useState([]);
  const [toggle1, setToggle1] = useState(true);
  useEffect(() => {
    axios
      .get("https://home-k4ci.onrender.com/val/")
      .then((result) => {
        setTimeout(() => {
          const vil = result.data.result.filter((elm, index) => {
            return elm.property_type === "Villa";
          });
          setVal(vil);

          setTimeout((result) => {
            setToggle(false);
          }, 0);
        }, 1000);
      })
      .catch((error) => {
        console.log(error);
      });
    return () => setVal([]);
  }, []);

  useEffect(() => {
    axios
      .get(`https://home-k4ci.onrender.com/val/`)
      .then((result) => {
        console.log(result.data.result);
        const musers = result.data.result.filter((elm, index) => {
          return elm.property_type === "House";
        });
        setData(musers);
        setTimeout(() => {
          setToggle1(false);
        }, 3000);
      })
      .catch((err) => {
        console.log(err);
      });
    return () => setData([]);
  }, []);
  return (
    <>
      <ScrollTop />
      <Container>
        <Row
          style={{
            padding: "10px 0 50px 0",
            gap: "10px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Card val={val} toggle={toggle} scroll={scroll} title={"فلل"} />
          <Card val={data} toggle={toggle1} scroll={scroll2} title={"منازل"} />
        </Row>
      </Container>
    </>
  );
}

export default Products;
