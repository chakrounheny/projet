import React from 'react';
import { NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light py-3 shadow-sm">
  <div class="container">
    <h1 class="navbar-brand fw-bold fs-4" href="#">chakroun Epices</h1>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/produit">Produit</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/Nous">nous-sommes</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/contact">contactez-nous</Link>
        </li>
      </ul>
      <div className="b">
          <Link to="/login" className="btn btn-outline-dark">
              <i className="fa fa-sign-in me-1"></i>connexion</Link>
              
          <Link to="register" className="btn btn-outline-dark">
              <i className="fa fa-user-plus me-1"></i>S'inscrire</Link>
              
          <Link to="cart" className="btn btn-outline-dark">
              <i className="fa fa-shopping-cart me-1"></i>pannier(0)</Link>
              </div>
              </div>
  </div>
</nav>
        </div>
    )
}
