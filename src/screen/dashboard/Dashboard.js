import React, { useState } from "react";
// import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import './Dashboard.scss';
import '../../App.scss'
import TableList from '../../components/TableList/TableList';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { useMediaQuery } from 'react-responsive';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShuffle, faCircleDown, faTrashCan } from "@fortawesome/free-solid-svg-icons";


const Dashboard = () => {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
    // eslint-disable-next-line no-unused-vars
    const [remove, setRemove] = useState(false);
    const [promptDelete, setPromptDelete] = React.useState(false);
    return (

        <div className="dashboard-outer-wrap bg-[#dbdbdb]">

            <div className="space-top-wrap-common"></div>
            <div className="container-fluid px-md-4">
                <div className="row pt-3">
                    <div className="dashboard-top-head-wrap d-flex position-relative">

                        <div className="">
                            <button className="btn  px-2 common-btn text-red-400 d-flex gap-3">
                                <img className="bg-gr" src={require('../../assets/images/plus.png')} alt="dravyafolio" /> <p className="add-prompt hover: text-black">Add Prompts</p>
                            </button>
                        </div>

                        <div className="d-flex align-items-center gap-3 search-box">
                            <div className="position-relative">
                                <div className="ab-search-icon-wrap">
                                    <img alt="/" src={require('../../assets/images/search.png')} />
                                </div>
                                <input className="text-wrap-input " placeholder="Search" />
                            </div>
                        </div>
                    </div>
                    <div className="outer-table-wrap  bg-slate-900 border-r-red-800">

                        <div className="nav-top-wrap d-flex justify-content-between align-items-center">
                            <div className="d-flex gap-3 align-items-center">
                                <div>
                                    <label className="checkbox-entry" >
                                        <input type="checkbox" className="pt-3 w-24 h-24" />
                                        <span><label className="select-all text-white fw-bold pt-1">Select All</label></span>
                                    </label>
                                </div>
                                <div className="d-flex gap-2 align-items-center pb-1 justify-center">
                                    <select className="cus-select-wrap w-250">
                                        <option selected hidden>Prompts</option>
                                        <option value="1">
                                            Private
                                        </option>
                                        <option value="2">  
                                            Public
                                        </option>
                                        <option value="3">
                                            Recored
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div className="gap-3">
                                <div className="d-flex gap-2 align-items-center response-option">
                                   
                                    <select className="cus-select-wrap">
                                        <option selected hidden>
                                            Responses
                                        </option>
                                        <option>
                                            Private
                                        </option>
                                        <option>
                                            Public
                                        </option>
                                        <option>
                                            Recored
                                        </option>
                                    </select>
                                    <div style={isTabletOrMobile ? { "display": "none" } : null}>
                                        <button className='btn' type="button"><FontAwesomeIcon icon={faTrashCan} style={{ "color": "#DC4C64", "fontSize": "1.4rem" }} onClick={() => { setRemove(true) }} /></button>
                                    </div>
                                </div>
                                {/* <div className="del-btn" style={!isTabletOrMobile ? { "display": "none" } : null}>
                                    <button className='btn' type="button"><FontAwesomeIcon icon={faTrashCan} style={{ "color": "#DC4C64", "fontSize": "1.4rem" }} onClick={() => { setRemove(true) }} /></button>
                                </div> */}
                            </div>
                        </div>
                        <TableList remove={remove} setRemove={setRemove} promptDelete={promptDelete} setPromptDelete={setPromptDelete} />
                        <div className="d-flex justify-content-center paggination-wrap mt-4">
                            <Stack spacing={2}>
                                <Pagination count={6} variant="outlined" shape="rounded" />
                            </Stack>
                        </div>
                    </div>
                    <AudioPlayer
                        autoPlay
                        controls="true"
                        src="https://hanzluo.s3-us-west-1.amazonaws.com/music/wuyuwuqing.mp3"
                        onPlay={e => console.log("onPlay")}
                        className=" text-[#943232] overflow-hidden"
                        style={{ background: 'rgba(69, 68, 68, 0.83)', zIndex:'20', borderRadius: '20px', overflow:'hidden',  }}
                        // style={{ background: 'rgba(69, 68, 68, 0.83)' }}
                    />
                    <div className="d-flex">
                        <div style={isTabletOrMobile ? { "position": "relative", "bottom": "70px" } : { "position": "relative", "bottom": "90px" }}>
                            <img alt="/" src={require('../../assets/images/log-avtar.png')} style={{ "width": "50px" }} />
                            <div style={isTabletOrMobile ? { "display": "none" } : { "marginLeft": "70px", "position": "relative", "bottom": "50px" }}>
                                <p style={{ "fontSize": "15px" }}>GAMING - HOW EASE TO PLAY MOBILE GAMES DUE TO THE SIZE</p>
                                <p style={{ "color": " #999999", "fontSize": "15px" }}>JACK JOHN</p>
                            </div>
                        </div>
                        <div>
                            <div className="form-check form-switch record-me" style={isTabletOrMobile ? { "display": "none" } : null}>
                                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                                <label className="form-check-label text-white" htmlFor="flexSwitchCheckChecked">Record Me</label>
                            </div>
                            <div className="form-check form-switch free-style" style={isTabletOrMobile ? { "display": "none" } : null}>
                                <input className="form-check-input" data-onstyle="danger" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                                <label className="form-check-label text-white" htmlFor="flexSwitchCheckChecked">Freestyle Mode</label>
                            </div>
                            <div className="shuffle">
                                <button className="btn" type="button"><FontAwesomeIcon icon={faShuffle} style={{ "color": "#f68f00", "fontSize": "1.4rem" }} /></button>
                            </div>
                            <div className="circle-down">
                                <button className="btn" type="button"><FontAwesomeIcon icon={faCircleDown} style={{ "color": "white", "fontSize": "1.4rem" }}></FontAwesomeIcon></button>
                            </div>
                        </div>
                    </div>
                    {/*<div className="nav-top-wrap gap-3 d-flex flex-column">
                        <img src={require('../../assets/images/2.png')} />
                        <img src={require('../../assets/images/2.png')} />
                        <img src={require('../../assets/images/2.png')} />
                        <img src={require('../../assets/images/2.png')} />
                    </div>
                    <div className="nav-top-wrap">
                        <img src={require('../../assets/images/music-bar.png')} />
                    </div>*/}
                </div>
            </div>
        </div>
    )
}

export default Dashboard;