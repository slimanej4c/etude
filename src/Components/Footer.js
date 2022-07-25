import React from 'react'
import './Footer.css'
import { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
function Footer() {
  return (
    <div className='container-footer'>
        
     <div className='footer-left'>
      <div className='footer-left-left1'>

      </div>
      <div className='footer-left-right1'>
        <h1></h1>

              <Fragment>
                          <li className='footer-item' >
                          <NavLink className="footer-link" to="/etude">ACCUEILL</NavLink>
                        
                          </li>
                          <li className='footer-item'  >
                          <NavLink className="footer-link" to="/aprops">QUI SOMMES-NOUS</NavLink>
                          </li>
                          <li className='footer-item'  >
                          <NavLink className="footer-link" to="/contact">CONTACT</NavLink>
                          </li>
                          <li className='footer-item'  >
                          <NavLink className="footer-link" to="/experience">NOS REALISATON</NavLink>
                          </li>
                      </Fragment>

        </div>

     </div>
    
     <div className='footer-center'>
              <div className='logo-footer'>

             </div>

     </div>
     <div className='footer-right'>


          <div  className='footer-left-left2'>
          <h5 className='footer-font'>  140 rue zone d'activité <br/>BBA Algeria<br/>Tel: +213 666 666 666 <br/> Fax: +213 666 666 666 <br/>Email: email@domain.dz </h5>

          </div>
         <div  className='footer-left-right2'>

         </div>
        
         </div>


     
    </div>
  )
}

export default Footer