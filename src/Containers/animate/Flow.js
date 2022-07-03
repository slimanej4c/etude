


import React, { useState } from 'react';

import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

import '../css/Flow.css'



const ImageSlider = () => {
  
const SliderData = [
  {
    image:
     require('../../Assets/domaine.jpg'),
    domaine:"Domaine d'activité"
  },
  {
    image:
    require('../../Assets/back3.jpg'),
    domaine:"Blog"
  },
  {
    image:
      'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80',
      domaine:"Moyens",
  
    },
 
];
  const [current, setCurrent] = useState(0);
  const [slide_class,setslide_class]=useState('slide')
  const [slide_active,setslide_active]=useState(true)
  const [slide_not_active,setslide_not_active]=useState(true)
console.log('helo............................')
console.log('helo............................')
console.log('helo............................')

 
  const length = SliderData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
    {!slide_active && setslide_active(true)} 
  
   
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
    {slide_active && setslide_active(false)} 
  };

  if (!Array.isArray(SliderData) || SliderData.length <= 0) {
    return null;
  }

  return (

    <section className='slider'>
      <FaArrowAltCircleLeft className='left-arrow'  onClick={ nextSlide} />
      <FaArrowAltCircleRight className='right-arrow'  onClick={prevSlide}/>
   
      {SliderData.map((slide, index) => {
         
         {if(index===current){
          
          return (
            <div className='images'>
            <div
              className={slide_active ? 'slide_moins' :'slide_moins2' }
              key={index}
            >
               <h2>{index===0 ? SliderData[SliderData.length-1]['domaine'] :SliderData[index-1]['domaine']}</h2>
              
                <img src={index===0 ? SliderData[SliderData.length-1]['image'] :SliderData[index-1]['image']} alt='travel image' className='image' />
              
            </div>
            <div
            className={slide_active ? 'slide' :'slide2' }
            key={index}
          >
            {index === current && ( <h2>{slide.domaine}</h2>)}
            {index === current && (
             
              <img src={slide.image} alt='travel image' className='image' />
         )}
          </div>
          <div
              className={slide_active ? 'slide_plus' :'slide_plus2' }
              key={index}
            >
              <h2>{index===SliderData.length-1? SliderData[0]['domaine'] : SliderData[index+1]['domaine']}</h2>
              
                <img src={index===SliderData.length-1? SliderData[0]['image'] : SliderData[index+1]['image']} alt='travel image' className='image' />
              
            </div>
          </div>
          );

        }}
        
       
       
      })}
    
    </section>
 
  );
};

export default ImageSlider;

/*import React from 'react';
import ReactDOM from 'react-dom';
import Coverflow from 'react-coverflow';
import { StyleRoot } from 'radium';

const slides = [
  {
    title: "Machu Picchu",
    subtitle: "Peru",
    description: "Adventure is never far away",
    image:
      "https://images.unsplash.com/photo-1571771019784-3ff35f4f4277?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
  },
  {
    title: "Chamonix",
    subtitle: "France",
    description: "Let your dreams come true",
    image:
      "https://images.unsplash.com/photo-1581836499506-4a660b39478a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
  },
  {
    title: "Mimisa Rocks",
    subtitle: "Australia",
    description: "A piece of heaven",
    image:
      "https://images.unsplash.com/photo-1566522650166-bd8b3e3a2b4b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
  },
  {
    title: "Four",
    subtitle: "Australia",
    description: "A piece of heaven",
    image:
      "https://images.unsplash.com/flagged/photo-1564918031455-72f4e35ba7a6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
  },
  {
    title: "Five",
    subtitle: "Australia",
    description: "A piece of heaven",
    image:
      "https://images.unsplash.com/photo-1579130781921-76e18892b57b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
  }
];

function useTilt(active) {
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (!ref.current || !active) {
      return;
    }

    const state = {
      rect: undefined,
      mouseX: undefined,
      mouseY: undefined
    };

    let el = ref.current;

    const handleMouseMove = (e) => {
      if (!el) {
        return;
      }
      if (!state.rect) {
        state.rect = el.getBoundingClientRect();
      }
      state.mouseX = e.clientX;
      state.mouseY = e.clientY;
      const px = (state.mouseX - state.rect.left) / state.rect.width;
      const py = (state.mouseY - state.rect.top) / state.rect.height;

      el.style.setProperty("--px", px);
      el.style.setProperty("--py", py);
    };

    el.addEventListener("mousemove", handleMouseMove);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
    };
  }, [active]);

  return ref;
}

const initialState = {
  slideIndex: 0
};

const slidesReducer = (state, event) => {
  if (event.type === "NEXT") {
    return {
      ...state,
      slideIndex: (state.slideIndex + 1) % slides.length
    };
  }
  if (event.type === "PREV") {
    return {
      ...state,
      slideIndex:
        state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1
    };
  }
};

function Slide({ slide, offset }) {
  const active = offset === 0 ? true : null;
  const ref = useTilt(active);

  return (
    <div
      ref={ref}
      className="slide"
      data-active={active}
      style={{
        "--offset": offset,
        "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1
      }}
    >
      <div
        className="slideBackground"
        style={{
          backgroundImage: `url('${slide.image}')`
        }}
      />
      <div
        className="slideContent"
        style={{
          backgroundImage: `url('${slide.image}')`
        }}
      >
        <div className="slideContentInner">
          <h2 className="slideTitle">{slide.title}</h2>
          <h3 className="slideSubtitle">{slide.subtitle}</h3>
          <p className="slideDescription">{slide.description}</p>
        </div>
      </div>
    </div>
  );
}

function Flow() {
  const [state, dispatch] = React.useReducer(slidesReducer, initialState);

  return (
    <div className="slides">
      <button onClick={() => dispatch({ type: "PREV" })}>‹</button>

      {[...slides, ...slides, ...slides].map((slide, i) => {
        let offset = slides.length + (state.slideIndex - i);
        return <Slide slide={slide} offset={offset} key={i} />;
      })}
      <button onClick={() => dispatch({ type: "NEXT" })}>›</button>
    </div>
  );
}


export default Flow*/
