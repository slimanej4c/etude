import React ,{useState} from 'react'
import { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
//  <NavLink className="nav-link" to="/">Profile</NavLink>
const  Navbar=() =>{
  const [active, setActive] = useState("nav");
  const [icon, setIcon] = useState("show");
  const [show_logo, setshow_logo] = useState("logo-nav");
  const navToggle = () => {
    console.log('change........')
    if (active === "nav") {
      setActive("nav nav-animate");
    } else setActive("nav");

    // Icon Toggler
    if (icon === "show") {
      setIcon("show exit"); 
    } else setIcon("show"); 

    if (show_logo === "logo-nav") {
      setshow_logo("logo-nav sh"); 
    } else setshow_logo("logo-nav"); 
  };
  return (
    <div className={active}>
          <div className='icon-logo'>

            <div onClick={navToggle} className={icon} >
              <div className="line11"></div>
              <div className="line22"></div>
              <div className="line33"></div>
              </div>

              <div className={show_logo}>


              </div>
          </div>

        <div className='nav-container'>
       
            <ul className='nav-ul'>
            <Fragment>
                <li className='nav-item' onClick={navToggle}>
                <NavLink className="nav-link" to="/etude">ACCUEILL</NavLink>
               
                </li>
                <li className='nav-item'  onClick={navToggle}>
                <NavLink className="nav-link" to="/aprops">QUI SOMMES-NOUS</NavLink>
                </li>
                <li className='nav-item'  onClick={navToggle}>
                <NavLink className="nav-link" to="/contact">CONTACT</NavLink>
                </li>
                <li className='nav-item'  onClick={navToggle}>
                <NavLink className="nav-link" to="/experience">NOS REALISATON</NavLink>
                </li>
            </Fragment>
            </ul>
        </div>

     
       
        <div className='input-nav'>

        </div>
        
    </div>
  )
}

export default Navbar