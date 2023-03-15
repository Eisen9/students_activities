import React from "react";
import {Link} from "react-router-dom";
import './../event_styles.css';

function Header() {
  return (
    <header>
      <nav class="navbar navbar-expand-lg navbar-dark">
        <Link className="navbar-brand" to="/">
          Out And About
        </Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item">
            <a class="nav-link" href="#features">About Us</a>
            </li>
            <li class="nav-item">
            <Link className="nav-link" to="/events">
              Events
            </Link>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#testimonials">Activities Log</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#footer">Contact</a>
            </li>

        </ul>
        </div>
    </nav>
    </header>
  );
}

export default Header;
