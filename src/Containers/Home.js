import React from 'react'
import { motion , AnimatePresence  } from 'framer-motion';
import './css/Home.css'
import AnimatePage from './AnimatePage';
import Test from './animate/Test';

const home =()=> {
  return (
    <AnimatePage>
    <div className='container-home'>

        <div className='image-home'>
          <div className='text-image-home'>
        <Test x={"Bureau d'étude QHSE"}/>
        </div>
        </div>

        <div className='about-home'>
             
           </div>
     
      </div>
      </AnimatePage>
  )
}

export default home
