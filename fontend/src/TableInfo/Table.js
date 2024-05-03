import React from "react";
import "./Table.css";
import { Container } from "react-bootstrap";
function Table({ data }) {
  return (
    <Container>
    <div className="Cont">
      <table class="styled-table">
        <thead>
          <tr>
            <th>city</th>
            <th>type</th>
            <th>bedrooms</th>
            <th>bathrooms</th>
            <th>price</th>
            <th>description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th> {data.city}</th>
            <th> {data.property_type}</th>
            <th>{data.bedrooms}</th>
            <th> {data.bathrooms}</th>
            <th> {data.price}</th>
            <th> {data.description}</th>
          </tr>
        </tbody>
      </table>
    </div>
    </Container>
  );
}

export default Table;
