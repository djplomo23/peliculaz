import { useEffect, useRef } from "react";
import {Power4} from 'gsap'
import './Transition.css'

export const Transition = ({timeLine}) => {
    const trans = useRef(null)

 useEffect(() => {
      timeLine.to(trans.current, {
          duration: 4,
          x: 2500,
          ease: Power4.easeOut
      });
    })
 


  return (
    <div>
      <div className="transition-effect" ref={trans}></div>
    </div>
  );
};
