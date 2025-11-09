import { useState } from "react"
import "../styles/Navbar.css"
import logo from "../assets/images/logo.png"
import menuIcon from "../assets/icons/open_menu.svg"
import closeIcon from "../assets/icons/close_menu.svg"
import mail from "../assets/icons/mail.svg"
import { Link, useLocation } from "react-router-dom"

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  const isHome = location.pathname === "/"

  return (
    <header className="navbar">
      <Link to="/">{!isHome && <img src={logo} alt="Logo" className="logo" />}</Link>

      <img
        src={open ? closeIcon : menuIcon}
        alt="Menu"
        className="menu-icon"
        onClick={() => setOpen(!open)}
      />

      <nav className={`nav-links ${open ? "open" : ""}`}>
        <Link to="#" onClick={() => setOpen(false)}>About Team</Link>
        <Link to="#" onClick={() => setOpen(false)}>About Us</Link>
        <Link to="#" onClick={() => setOpen(false)}>Services</Link>
        <Link to="#" onClick={() => setOpen(false)}>Portfolio</Link>
        <Link to="/contact-us" className="talk-btn" onClick={() => setOpen(false)}>
          Let's Talk <img src={mail} alt="mail-logo" />
        </Link>
      </nav>
    </header>
  )
}

export default Navbar