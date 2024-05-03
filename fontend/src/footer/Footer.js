import React from 'react'
import "./Footer.css"
import { Container } from 'react-bootstrap'
function Footer() {
  return (
   
     
<footer class="site-footer">
  <div class="container">
    <div class="row">
      <div class="col-sm-12 col-md-6">
        <h6>About</h6>
        <p class="text-justify">"The 'Home' project is a full stack application aimed at providing users with a seamless experience in managing their household tasks and activities. Built with a combination of React for the frontend, PostgreSQL for the database, and JavaScript for server-side scripting, 'Home' offers a comprehensive solution for organizing daily routines.</p>
      </div>

      <div class="col-xs-6 col-md-3">
        <h6>Categories</h6>
        <ul class="footer-links">
          <li><a href="https://www.linkedin.com/in/jamal-barhoum/">linkedin</a></li>
          <li><a href="https://jamallbarhoum.netlify.app/">Portfolio</a></li>
          <li><a href="https://github.com/jamalbarhoum">github</a></li>
        </ul>
      </div>

      <div class="col-xs-6 col-md-3">
        <h6>Quick Links</h6>
        <ul class="footer-links">
          <li><a href="https://jamallbarhoum.netlify.app/">About Us</a></li>
          <li><a href="https://jamallbarhoum.netlify.app/">Contact Us</a></li>
        </ul>
      </div>
    </div>
    <hr/>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-md-8 col-sm-6 col-xs-12">
        <p class="copyright-text">jamallbarhoum@gmail.com
        </p>
      </div>

   
    </div>
  </div>
</footer>
   
  )
}

export default Footer