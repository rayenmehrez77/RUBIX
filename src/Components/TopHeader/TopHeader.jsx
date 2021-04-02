import React from 'react';
import { FaFacebookF, FaPinterestP, FaTwitter } from "react-icons/fa"; 
import { MdEmail } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";
import { GrInstagram } from "react-icons/gr";
import {TopHeaderContainer, TopHeaderLeft, TopHeaderRight, TopHeaderMiddle, Phone, Email } from "./TopHeader.style";

const TopHeader = () => {
    return (
        <TopHeaderContainer>
             <TopHeaderLeft>
                <Phone>
                    <AiFillPhone /> 
                    <span>+216 92 183 047</span>
                </Phone>
                <Email>
                    <MdEmail /> 
                    <span>rubixstore@gmail.com</span>
                </Email>
             </TopHeaderLeft>
             <TopHeaderMiddle>
                <p>Free shipping on all orders over <span>$79</span><a>Shop Now</a></p>
             </TopHeaderMiddle>
             <TopHeaderRight>
                    <FaFacebookF /> 
                    <FaPinterestP /> 
                    <FaTwitter /> 
                    <GrInstagram /> 
             </TopHeaderRight>
        </TopHeaderContainer>
    )
}

export default TopHeader
