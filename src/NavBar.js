import React from 'react';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

  <a className="navbar-brand" href="./">BJ Zamites's Site</a>

  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul className="navbar-nav">

      <li className="nav-item">
        <a className="nav-link" href="./dev">Development</a>
      </li>

      <li className="nav-item">
        <a className="nav-link" href="./music">Music</a>
      </li>

      </ul>
      </div>

</nav>
  );
}

export default NavBar;
