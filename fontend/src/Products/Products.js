import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import Card from "../Cord/Cord"

import axios from 'axios';
function Products({scroll,scroll2}) {
  const [val, setVal] = useState([]);
  const [toggle, setToggle] = useState(true);

  const [data, setData] = useState([]);
  const [toggle1,setToggle1] =useState(true)
  useEffect(() => {
    axios
      .get("http://localhost:5000/val/")
      .then((result) => {
        setTimeout(() => {
          setVal(result.data.result);
          console.log(result.data.result);
          setTimeout((result)=>{
            setToggle(false)
          },0)
        }, 1000);

     
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/houses/`)
      .then((result) => {
        console.log(result.data.result);
        setData(result.data.result);
        setTimeout(()=>{
            setToggle1(false)
        },3000)
        
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    
    <>
    <Container>
        <Row style={{padding:"40px 0",gap:"10px",justifyContent:"center",alignItems:"center"}}>
        <Card val={val} toggle={toggle} scroll={scroll} title={"فلل"}/>
        <Card val={data} toggle={toggle1} scroll={scroll2} title={"منازل"} />
        </Row>
   
    </Container>
    </>
  )
}

export default Products