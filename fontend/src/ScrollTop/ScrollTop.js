import React from 'react'
import { BiArrowToTop } from "react-icons/bi";
import "./ScrollUp.css"
import { Container } from 'react-bootstrap';
function ScrollTop() {
  return (
    <>
   

   
    <div className='ScrollUp'  >
    <BiArrowToTop onClick={()=>{
   window.scrollTo({
     top: 0,
    behavior: 'smooth'
  });

    }} style={{color:"blue",fontSize:"50px"}} />
    </div>


    </>
  )
}

export default ScrollTop