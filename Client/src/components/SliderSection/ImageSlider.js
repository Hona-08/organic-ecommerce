import React, {useEffect, useState} from 'react';
import { SliderData } from './SliderData';
import ChevronRightSharpIcon from '@mui/icons-material/ChevronRightSharp';
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import './Slider.css';
import {OverallButton} from '../UniButtonElement'

const ImageSlider = ({slides}) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    useEffect (() => {
        const interval = setInterval(() =>{
            setCurrent (current === length -1 ? 0 : current + 1 );
        }, 2000);
        return () => clearInterval(interval);
    }, [current]);

    if(!Array.isArray(slides) || slides.length <= 0){
        return null; 
    }
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1) //Array starts with 0 so checking if current state is in 0. So, if there is 3 in total it would be 2, if it's that then you would reset it by sending it back to the first image so zero else current=1 
    }
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)  
    }

    return (
    <div className='featuredProduct'>
        <div className='container'>
            <div className= 'header'>
                <div className= 'h2'>
                    Check out our products.
                </div>
            </div>
            <section class = 'slider'>
                <ChevronLeftOutlinedIcon className='left-arrow' fontSize = "large" onClick= {prevSlide} />
                <ChevronRightSharpIcon className='right-arrow' fontSize = "large" onClick= {nextSlide} />
                {SliderData.map((slide, index) => { //checks the index and then change the image
                    return(
                        <div className= {index === current ? 'slide active' : 'slide'} key={index}> 
                        {/* index is equals to current then return the class slide active else i just want to return slide  */}
                            {index === current && ( <img src={slide.image} alt= 'firstimage' className='image' /> )} 
                            {/* //if index is current andif that's true then return the image inside the paranthesis */}
                        </div>
                    )
                })}
            </section>
            <OverallButton to="/shopnow">
                Shop now
            </OverallButton>
        </div>
    </div>
  );
}
export default ImageSlider;