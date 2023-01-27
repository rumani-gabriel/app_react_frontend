import React, {useState} from 'react';
import video2 from '../../videos/video2.mp4';
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements';
import {Button} from '../ButtonElement';

const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={video2} type=""/>
            </HeroBg>
            <HeroContent>
                <HeroH1> Título que encabeza la sección </HeroH1>
                <HeroP>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="singup"
                     onMouseEnter={onHover}
                     onMouseLeave={onHover}
                     primary='true'
                     dark='true'
                     smooth={true}
                       duration={500}
                       spy={true}
                       exact='true'
                       offset={-250}> 
                        botón de inicio {hover ? <ArrowForward/> : <ArrowRight/>}
                                        {/* con ésto se hace un efecto de flecha  */}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection;
