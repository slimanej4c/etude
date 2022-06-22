import React , {useState,useEffect} from 'react'
import { motion , AnimatePresence  } from 'framer-motion';
import '../css/Profile.css'
const animations={

    initial:{rotate:0,  opacity:0 },
   
   
    animate:{opacity:1},
    exit:{opacity:1},
}


const  Retate=({children,x}) =>{
    console.log('xxxxx',x)

   
    const [anim,setanim]=useState(false)
    const [v,setv]=useState(2)
  

      useEffect(() => {
        
        
      },[anim]);
   
 
  
  
  return (
  <motion.div  className='retate-left'
 
    animate={anim ? {rotate:360,  opacity:1} : "animate"} initial= 'initial' variants={animations} transition={{duration:v,ease: "easeOut",} }
    dragConstraints={{ left: 0, right: 0 }}
    dragTransition={{
        min: 0,
        max: 100,
        bounceStiffness: 100
      }}
    onAnimationComplete={definition => {
        console.log('Completed animating', definition)
        setanim(true)
        setv(0.5)
      }}
   
    >
       
            {children}
    </motion.div>
 
  )
}

export default Retate