import React ,{useState , useEffect} from 'react'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import '../css/Floww.css'
function Floww() {
  
const Slider = [
  {
    image:
      'https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    image:
      'https://images.unsplash.com/photo-1501446529957-6226bd447c46?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1489&q=80'
  },
  {
    image:
      'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80'
  },
  {
    image:
      'https://images.unsplash.com/photo-1475189778702-5ec9941484ae?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80'
  },
  {
    image:
      'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80'
  }
];
  const [current, setCurrent] = useState(0);
  const [SliderData,setSliderData]=useState(Slider )

  const [slide_len,setslide_len]=useState(SliderData.length)
  const [slide_active,setslide_active]=useState('slide')


 
  const length = SliderData.length;


  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
    {slide_active==='slide' ? setslide_active('slide2') : setslide_active('slide')}
  
    var markers = [ ...SliderData];
    for (let i = 0; i < slide_len ; i++) {
        
         if(i < slide_len-1){
          markers[i]=SliderData[i+1]
         
         }
         if(i === slide_len-1){
          markers[i]=SliderData[0]
         
         }
    }
  
    console.log('ma',markers,slide_len)
  
    setSliderData(markers)
  
   
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
    {slide_active==='slide3' ? setslide_active('slide4') : setslide_active('slide3')}
  
    var markers = [ ...SliderData];
    for (let i = 0; i < slide_len ; i++) {
         if(i===0){
          markers[0]=SliderData[slide_len-1]
       
         }
         if(i < slide_len && i > 0){
          markers[i]=SliderData[i-1]
         
         }
        
         
    }
  
    console.log('ma',markers,slide_len)
  
    setSliderData(markers)
   
  };

  if (!Array.isArray(SliderData) || SliderData.length <= 0) {
    return null;
  }

  return (

    <section className='slider'>
      <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
      <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
      <div className='images'>
      {SliderData.map((slide, index) => {
         
    
          
          return (
           
                  <div
                    className={slide_active }
                    key={index}>
                    
                      <img src={slide.image} alt='travel image' className='image' />
                    
                  </div>

                 
        
          );

 
        
       
       
      })}
      </div>
    </section>
 
  );
}

export default Floww