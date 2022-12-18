import React, { useState } from 'react';
// import './Header.scss';

const Header = () => {
    const [open, setOpen] = useState(false);


    // const handleClick = () => {
    //     setOpen(true)
    // }
    return (
        <div className=' overflow-x-hidden h-screen sm:bg-yellow-400 w-fit'>
            <nav className="navbar navbar-expand-lg bg-primary h-screen z-20 border-x-4">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img alt='dravyafolio' src={require('../../assets/images/logo.png')} /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        {/* Hamburgur Menu Icon */}
                        <span className="navbar-toggler-icon" onClick={setOpen}></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav flex-auto flex" style={{ "marginLeft": "60vw" }} >
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
                                    <span>
                                        <img alt='dravyafolio' src={require('../../assets/images/clipboard-list.png')} />
                                        SNIPPETS
                                    </span>
                                </a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link  text-light flex-auto flex " aria-current="page" href="/">
                                    <span className='rounded'>
                                        <img alt='dravyafolio' className='h-24 w-24' src={require('../../assets/images/clipboard-list.png')} />
                                        <span className='pt-16 font-extrabold border-2 rounded hover:text-black '>ONBOARDING</span>
                                    </span>
                                </a>
                            </li>
                        </ul>
                        <div className="login-wrap d-flex justify-content-end align-items-center gap-3">
                            <img alt='dravyafolio' className='h-24 w-24 border-l-amber-900' src={require('../../assets/images/notification-icon.png')} />
                            <img alt='dravyafolio' className='h-24 w-24' src={require('../../assets/images/log-avtar.png')} />
                        </div>
                    </div>
                </div>
            </nav>





        </div>
    )
}

export default Header
