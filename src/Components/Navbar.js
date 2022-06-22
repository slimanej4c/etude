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

       <div onClick={navToggle} className={icon} >
        <div className="line11"></div>
        <div className="line22"></div>
        <div className="line33"></div>
        </div>

     


        <div className='nav-container'>
        <div className={show_logo}>


           </div>
            <ul className='nav-ul'>
            <Fragment>
                <li className='nav-item' onClick={navToggle}>
                <NavLink className="nav-link" to="/">Accueil</NavLink>
               
                </li>
                <li className='nav-item'  onClick={navToggle}>
                <NavLink className="nav-link" to="/profile">QUI SOMMES-NOUS</NavLink>
                </li>
                <li className='nav-item'  onClick={navToggle}>
                <NavLink className="nav-link" to="/Deplome">Déplome et Formationn</NavLink>
                </li>
                <li className='nav-item'  onClick={navToggle}>
                <NavLink className="nav-link" to="/">Expérience Proffessionel</NavLink>
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