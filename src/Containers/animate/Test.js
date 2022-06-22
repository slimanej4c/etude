import React , {useState,useEffect} from 'react'

import styled from "styled-components";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import './Test.css'


const Title = styled.h2`
 
`;

const Word = styled(motion.span)`

`;

const Character = styled(motion.span)`
 
`;

const  Test=({children,x}) =>{ const text = 'Animated Text' // This would normally be passed into this component as a prop!
  
const ctrls = useAnimation();

const { ref, inView } = useInView({
  threshold: 0.5,
  triggerOnce: true,
});

useEffect(() => {
  if (inView) {
    ctrls.start("visible");
  }
  if (!inView) {
    ctrls.start("hidden");
  }
}, [ctrls, inView]);

const wordAnimation = {
  hidden: {},
  visible: {},
};

const characterAnimation = {
  hidden: {
    opacity: 0,

  
    y: `0.25em`,
  },
  visible: {
    opacity: 1,
 
    y: `0em`,
   
    transition: {
      duration: 1,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  },
};

return (
 

  
          

  <Title aria-label={text} role="heading" className='h-test'>
    {x.split(" ").map((word, index) => {
      return (
        <Word
        className='s-test'
        
          ref={ref}
          aria-hidden="true"
          key={index}
          initial="hidden"
          animate={ctrls}
          variants={wordAnimation}
          transition={{
            delayChildren: index * 0.25,
            staggerChildren: 0.05,
          }}
        >
          {word.split("").map((character, index) => {
            return (
              <Character
              className='s-s-test'
              whileHover={{
                scale: 3,
                transition: { duration: 0.1 },
                color:'#FFB300',
              }}
           
                aria-hidden="true"
                key={index}
                variants={characterAnimation}
              >
                {character}
              </Character>
            );
          })}
        </Word>
      );
    })}
  </Title>

);
   
  
  
  
 

   
 
  
}

export default Test