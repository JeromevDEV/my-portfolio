import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
const Navbar = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="navbar-wrapper">
          <div
            role="button"
            onClick={() => scrollTo("#home")}
            className="name"
            tabIndex={0}
          >
            Portfolio.
          </div>
          <div className="links-wrapper" >
            <button onClick={() => scrollTo("#work")} style={{fontSize: 15}}>Work</button>
            <button onClick={() => scrollTo("#about")} style={{fontSize: 15}}>About</button>
			<button onClick={() => scrollTo("#skills")} style={{fontSize: 15}}>Skills</button>
			<button onClick={() => scrollTo("#education")} style={{fontSize: 15}}>Education</button>
            <button onClick={() => scrollTo("#contact")} style={{fontSize: 15}}>Contact</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
