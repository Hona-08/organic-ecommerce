import React, {useState} from 'react'
// import Video from '../../video/herov.mp4'
import {Button} from '../ButtonElement'
import {MobileButton} from '../ButtonElement'
import { 
    HeroContainer,  
    HeroBg, 
    VideoBg,
    HeroContent,
    HeroContentInner,
    HeroHeading,
    HeroSubHeading,
    HeroText,
    HeroMobileTitle,
    HeroMobileText,
    P,
    ArrowForward,
    ArrowRight
} from './HeroElement.js';//importing its style

const HeroSection = ({id, video, type, heroHeading, subHeroHeading, heroText, buttonLabel} ) => {
    const[hover, setHover]= useState(false)   //Button arrow
    const onHover = () => {
        setHover(!hover)
    }
    return (
        <HeroContainer id={id}>
            <HeroBg>
                <VideoBg autoPlay loop muted src={video} type={type} />
            </HeroBg>
            <HeroContent>
                <HeroContentInner>
                    <HeroHeading>{heroHeading}</HeroHeading>
                   <HeroSubHeading>{subHeroHeading}</HeroSubHeading>
                   <HeroText>{heroText}</HeroText>
                   <Button to="/shopall" 
                        onMouseEnter={onHover} 
                        onMouseLeave={onHover}>
                        {buttonLabel}
                        {hover ? <ArrowForward /> : <ArrowRight />} 
                    </Button>

                    {/* Mobile Content */}

                    <HeroMobileTitle>{heroHeading}</HeroMobileTitle>
                   <HeroMobileText>
                        <P>{subHeroHeading}</P>
                        <P>{heroText}</P>
                   </HeroMobileText>
                   <MobileButton to='/shopall' 
                        onMouseEnter={onHover} 
                        onMouseLeave={onHover}>
                        {buttonLabel}
                        {hover ? <ArrowForward /> : <ArrowRight />} 
                    </MobileButton>
                </HeroContentInner>
            </HeroContent>
        </HeroContainer>
    )
}
export default HeroSection;