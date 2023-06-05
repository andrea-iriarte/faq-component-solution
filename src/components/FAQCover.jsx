import React from 'react'
import { box, bigWoman, smallWoman, patternBig, patternSmall } from '../images'
import { useWindowSize } from "@uidotdev/usehooks"


const FAQCover = () => {

    const size = useWindowSize();
    const isMobile = (size.width < 1100);
    console.log(isMobile);
  return (
    <div className='images-container'>
        <div className='base-illustration'>
            <img src={isMobile ? patternSmall : patternBig} alt="" className='pattern'/>
            <img src={isMobile ? smallWoman : bigWoman} alt="" className='woman'/>
        
        </div>
        {!isMobile && <img src={box} alt="" className='box'/>}
        
    </div>
    
    
  )
}

export default FAQCover