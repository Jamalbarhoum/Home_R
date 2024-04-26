import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import Reload from '../reload/Reload'
function Header() {
  const [toggle,setToggle] =useState(false)
  return (

    <div style={{height:"90vh"}} className='up'>
    <Container className='Container-header'> 
   
      <div className='Left side'>
        <p className='content-header'> اشتري بين احلامك</p>
    
      </div>
      <div className='Right-side'>
        
    
          
       
          
          <img className='image-header' src='pexels-photo-106399.jpeg'/>

       
         
      </div>
    </Container>
    </div>
  )
}

export default Header