import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-bar">
    <div className="nav-container">
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
          alt="wave"
          className="wave-image"
        />
        <h1 className="wave-heading">Wave</h1>
      </div>
      <ul className="nav-menu">
        <li className="nav-options">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li className="nav-options">
          <Link className="nav-link" to="/about">
            About
          </Link>
        </li>
        <li className="nav-options">
          <Link className="nav-link" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  </nav>
)
export default Header
