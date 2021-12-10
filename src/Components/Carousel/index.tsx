// LIB
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// STYLE
import * as C from './style';

// TYPE
import { PropsCarousel } from '../../types/carousel';

// COMPONENT
import ImageProject from '../ImageProject';

function Carousel({ data }: PropsCarousel) {

  const [ current, setCurrent ] = useState<number>(0);
  const length = data.length;

  function prevSlide() {
    setCurrent(current === 0 ? length - 1 : current - 1);
  }

  function nextSlide() {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }  

  return (
    <C.Container>
      <div className="slider">
        <div className="arrow-left"><FaChevronLeft onClick={prevSlide} /></div>
          {
            data.map((item, index)=>{
              return (
                <ImageProject 
                  data={item} 
                  key={index.toString()} 
                  className={index === current ? "active" : ""} 
                  current={current}
                  index={index}
                />
              )
            })
          }
        <div className="arrow-right"><FaChevronRight onClick={nextSlide} /></div>
      </div>
      <div className="navigation-manual"></div>
    </C.Container>
  )
}

export default Carousel;