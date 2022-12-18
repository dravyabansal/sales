import React from 'react'

const Time = () => {
  return (
    <div className="header-section w-100">
            <div className="container-fluid px-md-4">
                <div className="row">
                    <div className="col-12 inner-header-wrap d-flex ">
                        <div className="logo-head-wrap">
                            <img alt='dravyafolio' src={require('../../assets/images/logo-head.png')} />
                        </div>
                        <div className="menu-list-section-wrap">
                            <ul className="menu-ul-wrap d-flex gap-4">
                                <li className="menu-li-wrap">
                                    <div className="inner-menu-list-wrap d-flex align-items-center gap-2 cursour-pointer">
                                        <img alt='dravyafolio' src={require('../../assets/images/clipboard-list.png')} />
                                        <p className="m-0">
                                            Lessonss
                                        </p>
                                    </div>
                                </li>
                                <li className="menu-li-wrap">
                                    <div className="inner-menu-list-wrap d-flex align-items-center gap-2 cursour-pointer">
                                        <img alt='dravyafolio' src={require('../../assets/images/clipboard-list.png')} />
                                        <p className="m-0">
                                            Snippets
                                        </p>
                                    </div>
                                </li>
                                <li className="menu-li-wrap">
                                    <div className="inner-menu-list-wrap d-flex align-items-center gap-2 cursour-pointer">
                                        <img alt='dravyafolio' src={require('../../assets/images/clipboard-list.png')} />
                                        <p className="m-0">
                                            ONBOARDING
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="login-wrap d-flex justify-content-end align-items-center gap-3">
                            <img alt='dravyafolio' src={require('../../assets/images/notification-icon.png')} />
                            <img alt='dravyafolio' src={require('../../assets/images/log-avtar.png')} />
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Time
