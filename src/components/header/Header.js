import React, { useState } from 'react';
import './Header.scss';

const Header = () => {


    return (
        <div className='overflow-hidden overflow-x-hidden h-screen'>
            <nav className="navbar navbar-expand-lg bg-primary h-screen z-20 border-x-4">
                <div className="container-fluid ">
                    <a className="navbar-brand" href="/"><img alt='dravyafolio' src={require('../../assets/images/logo.png')} /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav flex-auto flex me-auto text-black list-none" style={{ "marginLeft": "500px" }}>
                            <li className="nav-item">
                                <a className="nav-link  text-light" aria-current="page" href="/">
                                    <div className='flex flex-row grid-flow-row'>
                                        <span>
                                            <img alt='dravyafolio' src={require('../../assets/images/clipboard-list.png')} />
                                            LESSONSS
                                        </span>
                                    </div>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" aria-current="page" href="/">
                                    <img alt='dravyafolio' src={require('../../assets/images/clipboard-list.png')} />
                                    SNIPPETS
                                </a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link  text-light flex-auto flex " aria-current="page" href="/">
                                    <img alt='dravyafolio' src={require('../../assets/images/clipboard-list.png')} />
                                    <span className='pt-7'>ONBOARDING</span>
                                </a>
                            </li>
                        </ul>
                        <div className="login-wrap d-flex justify-content-end align-items-center gap-3">
                            <img alt='dravyafolio' src={require('../../assets/images/notification-icon.png')} />
                            <img alt='dravyafolio' src={require('../../assets/images/log-avtar.png')} />
                        </div>
                    </div>
                </div>
            </nav>





        </div>
    )
}

export default Header
