import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import './Footer.scss';

const Footer = () => {
    return (
        <div className=" grid grid-cols-1 footer-wrap text-xs lg:text-xl">
            <div className=" ">
                <p className="">
                    © 2022 Sale traning. 
                   <span> All rights reserved.</span>
                </p>
            </div>
            <div className="d-flex gap-2 mr-10 social-wrap pr-10 ">
                <FacebookIcon sx={{ color: '#17B2FF' }} />
                <TwitterIcon sx={{ color: '#17B2FF' }} />
                <InstagramIcon sx={{ color: '#17B2FF' }} />
            </div>
        </div>
    )
}

export default Footer;