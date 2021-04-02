import React from 'react'; 
import { BannerContainer, Img } from "./Banner.styles"; 
import img from '../../assets/images/banner.PNG'; 

const Banner = () => {
    return (
        <BannerContainer>
            <Img src={img} alt="banner images" /> 
        </BannerContainer>
    )
}

export default Banner
