import React from 'react'
import './App.css'
function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary fi">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
       <h3 className="tex">SIXTEEN<span className="cs"> CLOTHING</span></h3>

    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-justify" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
</svg>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item ">
          <a className="nav-link active mx-3 text-white" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item  mx-3" >
          <a className="nav-link text-white" href="#">Electronics</a>
        </li>
        <li className="nav-item  mx-3">
          <a className="nav-link text-white" href="#">Blog</a>
        </li>
        <li className="nav-item  mx-3">
          <a className="nav-link text-white" href="#">Pages</a>
        </li>
        <li className="nav-item  mx-3">
          <a className="nav-link text-white" href="#">Contact</a>
        </li>
      </ul>
      <button type="button" className="btn btn-outline-danger  ms-auto">login</button>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar