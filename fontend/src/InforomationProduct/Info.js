import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { useLocation } from "react-router";
import Reload from "../reload/Reload";

function Info({home}) {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const searchQuery = queryParams.get("idx") || "";
    // const queue = JSON.parse(searchQuery)
    console.log(searchQuery);
  return (
    <>
      <Container>
        <Row>
          {" "}
          <Col>
          <Image src=""/>
          </Col>
          <Col>jamal barhoum test</Col>
        </Row>
      </Container>
    </>
  );
}

export default Info;
