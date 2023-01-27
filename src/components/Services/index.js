import React from 'react';
import Icon1 from '../../images/one.svg';
import Icon2 from '../../images/two.svg';
import Icon3 from '../../images/three.svg';
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements';

const Services = () => {
    return (
        <ServicesContainer id='services'>
            <ServicesH1>Títulos de los servicios</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Lorem ipsum dolor sit amet.</ServicesH2>
                    <ServicesP>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Lorem ipsum dolor sit amet.</ServicesH2>
                    <ServicesP>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</ServicesP>
                </ServicesCard><ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Lorem ipsum dolor sit amet.</ServicesH2>
                    <ServicesP>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>

    )
}

export default Services;
