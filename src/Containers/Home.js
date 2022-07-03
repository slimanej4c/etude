import React from 'react'
import { motion , AnimatePresence  } from 'framer-motion';
import './css/Home.css'
import AnimatePage from './AnimatePage';
import Test from './animate/Test';


import Floww from './animate/Floww';
import ImageSlider from './animate/Flow';

const home =()=> {
  return (
    <AnimatePage>
    <div className='container-home'>

        <div className='image-home'>
          <div className='text-image-home'>
        <Test x={"BUREAU DE L'ARCHITECTURE ET D'ETUDES "}/>
        <Test x={"TECHNIQUE ET ENVIRONNEMENTALES"}/>
        </div>
        </div>

        <div className='presentation-home'>
          <h1>À PROPOS DU BECO GIS</h1>
       <p> BEGOGOS est un bureau  d'ingénierie spécialisé dans les études réglementaires</p>
        </div>
        <div className='about-home'>
           <ImageSlider></ImageSlider>
             
           </div>
     
      </div>
      </AnimatePage>
  )
}

export default home
