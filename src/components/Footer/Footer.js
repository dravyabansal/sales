import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import './Footer.scss';

const Footer = () => {
    return (
        <div className="col-12 p-2 px-4 footer-wrap">
            <div>
                <p className="m-0 footer-text">
                    © 2022 Sale traning. All rights reserved.
                </p>
            </div>
            <div className="d-flex gap-2 social-icons-wrap">
                <FacebookIcon sx={{ color:'#17B2FF'}} />
                <TwitterIcon sx={{ color:'#17B2FF'}} />
                <InstagramIcon sx={{ color:'#17B2FF'}} />
            </div>
        </div>
    )
}

export default Footer;