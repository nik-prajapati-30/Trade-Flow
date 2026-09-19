import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
      <nav class="navbar navbar-expand-lg  bordor-bottom " style={{backgroundColor:"fff"}} >
        <div class="container p-2">
          <Link class="navbar-brand" to={"/"}>
            <i className="fa-solid fa-arrow-trend-up"></i> <h1 style={{fontSize: "20px",paddingBottom: "10px", paddingRight: "180px", marginRight: "320px"}}>Trade-Flow</h1>
          </Link> 
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav  mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to={"/signup"}>
                  Signup
                </Link>
              </li>
            
              <li class="nav-item">
                <Link class="nav-link active" to={"./about"}>
                  About
                </Link>
              </li>
              <li class="nav-item"> 
                <Link class="nav-link active" to={"./product"}>
                  Product
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to={"./pricing"}>
                  Pricing
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to={"./support"}>
                  Support 
                </Link>
              </li>
             
            </ul>
           
          </div>
        </div>
      </nav>
  );
}

export default Navbar;
