import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Card from "../Cord/Cord"
function Products({scroll}) {
  return (
    <>
    <Container>
        <Row style={{padding:"40px 0",gap:"10px",justifyContent:"center",alignItems:"center"}}>
        <Card scroll={scroll}/>
        </Row>
   
    </Container>
    </>
  )
}

export default Products