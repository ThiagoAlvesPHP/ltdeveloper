// LIB
import { useEffect, useRef } from 'react';

// STYLE
import * as C from './style';

// TYPE
import { services } from '../../types/services';

function ServiceItem({ data, top }: services) {

  const serviceRef = useRef<HTMLDivElement>(null);
  const serviceContentRef = useRef<HTMLDivElement>(null);

  useEffect(()=>{
    const serviceTop: number = Number(serviceRef.current?.offsetTop);
    if(top >= serviceTop - 140) {
      serviceContentRef.current?.classList.remove('hidden');
    }
  }, [top]);

  return (
    <C.Container background={data.background} ref={serviceRef}>
      { data.position === "left" &&
        <div className="image-service">
          <div className="background-shadow" />
        </div>
      }
      <div className="content-service hidden" ref={serviceContentRef}>
        <h3 className="title">{data.title}</h3>
        <p className="line"><span /><span /></p>
        <p className="body">{data.body}</p>
      </div>
      { data.position === "right" &&
        <div className="image-service">
          <div className="background-shadow" />
        </div>
      }
    </C.Container>
  )
}

export default ServiceItem;