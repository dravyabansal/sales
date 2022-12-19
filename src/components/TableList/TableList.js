import React from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Response from "./Response.js";
import VideoApp from "./VideoPlayer.js"
import './TableList.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faHeart, faXmark, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery } from 'react-responsive';
import TableMenu from "./TableMenu.js";


const style = {
    position: 'relative',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    boxShadow: 24,
    p: 0,
    m: 0,
};


const TableList = ({ remove, promptDelete, setPromptDelete }) => {
    const [open, setOpen] = React.useState(false);
    const [end, setEnd] = React.useState(false);
    const [over, setOver] = React.useState(false);
    const [show, setShow] = React.useState(false);
    const [second, setSecond] = React.useState(false);
    const [third, setThird] = React.useState(false);
    const [fourth, setFourth] = React.useState(false);
    const [fifth, setFifth] = React.useState(false);
    const [sixth, setSixth] = React.useState(false);
    const [sdk1, setSdk1] = React.useState(false);
    const [sdk2, setSdk2] = React.useState(false);
    const [sdk3, setSdk3] = React.useState(false);
    const [sdk4, setSdk4] = React.useState(false);
    const [sdk5, setSdk5] = React.useState(false);
    const [sdk6, setSdk6] = React.useState(false);
    const [rg1, setRg1] = React.useState(false);
    const [rg2, setRg2] = React.useState(false);
    const [rg21, setRg21] = React.useState(false);
    const [rg22, setRg22] = React.useState(false);
    const [rg31, setRg31] = React.useState(false);
    const [rg32, setRg32] = React.useState(false);
    const [rg33, setRg33] = React.useState(false);
    const [rg41, setRg41] = React.useState(false);
    const [rg42, setRg42] = React.useState(false);
    const [rg43, setRg43] = React.useState(false);
    const [rg51, setRg51] = React.useState(false);
    const [rg52, setRg52] = React.useState(false);
    const [rg53, setRg53] = React.useState(false);


    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    // const handleDelete = (e) => {
    //     e.target.style.display = "none"
    // }
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
    return (

        <div className="table-list-outer-wrap border-8">
            <div className="table-ul-list-wrap ">

                <div className="table-li-list-wrap gap-1 overflow-hidden ">
                    <div className="">
                        <label className="checkbox-entry" >
                            <input type="checkbox" className="" />
                            <span></span>
                        </label>
                    </div>
                    <div className="play-pause-wrap ">
                        <img alt="dravyafolio" src={require('../../assets/images/music.png')} />
                        <img onClick={handleOpen} alt="dravyafolio" src={require('../../assets/images/play.png')} />
                    </div>
                    <div className="w-auto ">
                        <span className="text-white w-auto">
                            <img className="img-fluid" alt="dravyafolio" src={require('../../assets/images/prompts.png')} style={{ "width": "500px" }} />
                        </span>
                    </div>
                    <div style={!isTabletOrMobile ? { "display": "none" } : null}>
                        <TableMenu />
                    </div>
                    <div className="px-2" style={isTabletOrMobile ? { "display": "none" } : { "position": "relative", "left": "5px", "display": "block" }}>
                        <img alt="dravyafolio" src={require('../../assets/images/line.png')} />
                    </div>
                    <div className="d-flex align-items-center gap-2">
                        <p className="p-0 m-0" style={isTabletOrMobile ? { "display": "none" } : { "display": "block", "position": "relative", "left": "6px" }}>
                            responses
                        </p>
                        {/*<img alt="dravyafolio" src={require('../../assets/images/plus.png')} />
                    </div>
                    <div style={isTabletOrMobile ? {"display":"none"}:{"display":"block"}}>
                        <button className="btn" type="btn"><FontAwesomeIcon icon={faCirclePlus} style={{"color":"#119AFF","fontSize":"1.5rem","position":"relative","right":"5px"}} /></button>
                    </div>
                    <div className="px-3" style={isTabletOrMobile ? {"display":"none"}:{"position":"relative","right":"5px","display":"block"}}>
                    <div className="d-flex flex-wrap">
                            <div style={rg21 ? {"display":"none"} : null}>
                                <img alt="dravyafolio" src={require('../../assets/images/log-avtar.png')} className="rounded-circle" style={{"width":"42px"}}></img>
                                <button className="btn" style={remove ? {"position":"relative","right":"20px","bottom":"10px"}:{"display":"none"}} onClick = {() => {setRg21(true)}}><FontAwesomeIcon icon={faCircleXmark} style={{"color":"red","fontSize":"1.2rem"}} /></button>
                            </div>
                            <div style={rg22 ? {"display":"none"} : null}>
                                <img alt="dravyafolio" src={require('../../assets/images/log-avtar.png')} className="rounded-circle" style={{"width":"42px"}}></img>
                                <button className="btn" style={remove ? {"position":"relative","right":"20px","bottom":"10px"}:{"display":"none"}} onClick = {() => {setRg22(true)}}><FontAwesomeIcon icon={faCircleXmark} style={{"color":"red","fontSize":"1.2rem"}} /></button>
                            </div>
                            <div style={rg23 ? {"display":"none"} : null}>
                                <img alt="dravyafolio" src={require('../../assets/images/log-avtar.png')} className="rounded-circle" style={{"width":"42px"}}></img>
                                <button className="btn" style={remove ? {"position":"relative","right":"20px","bottom":"10px"}:{"display":"none"}} onClick = {() => {setRg23(true)}}><FontAwesomeIcon icon={faCircleXmark} style={{"color":"red","fontSize":"1.2rem"}} /></button>
                            </div>
                            <div>
                            <Avatar onClick={() => setShow(true)} style={show ? {"display":"none"}:{"backgroundColor":"#119AFF","color":"white"}}>+20</Avatar>
                            </div>
                            {show ? 
                            <div className="d-flex">
                                <div>
                                <img alt="dravyafolio" src={require('../../assets/images/log-avtar.png')} className="rounded-circle" style={{"width":"42px"}}></img>
                                <button className="btn" style={remove ? {"position":"relative","right":"20px","bottom":"10px"}:{"display":"none"}}><FontAwesomeIcon icon={faCircleXmark} style={{"color":"red","fontSize":"1.2rem"}} /></button>
                            </div>
                            <div>
                                <img alt="dravyafolio" src={require('../../assets/images/log-avtar.png')} className="rounded-circle" style={{"width":"42px"}}></img>
                                <button className="btn" style={remove ? {"position":"relative","right":"20px","bottom":"10px"}:{"display":"none"}}><FontAwesomeIcon icon={faCircleXmark} style={{"color":"red","fontSize":"1.2rem"}} /></button>
                            </div>
                            <div>
                                <img alt="dravyafolio" src={require('../../assets/images/log-avtar.png')} className="rounded-circle" style={{"width":"42px"}}></img>
                                <button className="btn" style={remove ? {"position":"relative","right":"20px","bottom":"10px"}:{"display":"none"}}><FontAwesomeIcon icon={faCircleXmark} style={{"color":"red","fontSize":"1.2rem"}} /></button>
                            </div>
                            <p onClick={() => setShow(false)}><FontAwesomeIcon icon={faCircleXmark} style={{"color":"#119AFF","fontSize":"2.5rem"}}/></p>
                            </div> : null}
                            </div>
                    </div>
                    <div style={isTabletOrMobile ? {"display":"none"}:{"display":"block","position":"relative","right":"0px"}}>
                        <button className="btn" type="button"><FontAwesomeIcon icon={faHeart} style={{color:"none",border:"none",fontSize:"1.6rem"}} /></button>
                    </div>
                    <div className="px-3" style={isTabletOrMobile ? {"display":"none"}:{"display":"block"}}>

                        <AvatarGroup>

                            <div className="d-flex align-items-center gap-3">
                                <p style={{"fontSize":"15px"}}>
                                    Tags
                                </p>
                                <button className="sdk-button bg-gd-light text-white px-2 d-flex" style={{"fontSize":"15px"}} type="button">
                                    SDK
                                </button>
                                <button className="sdk-button bg-gd-light text-white px-2 d-flex" style={{"fontSize":"15px"}} type="button">
                                    SDK
                                </button>
                                <button className="count-button text-white px-2  d-flex" style={{"fontSize":"15px"}} type="button">
                                    +12
                                </button>
                            </div>
                        </AvatarGroup>
                        {sdk2 ? 
                            <div className="d-flex align-items-center gap-3" style={{"marginLeft":"52px"}}>
                                <button className="sdk-button bg-gd-light text-white px-2 d-flex" style={{"fontSize":"15px"}} type="button">
                                    SDK
                                </button>
                                <button className="sdk-button bg-gd-light text-white px-2 d-flex" style={{"fontSize":"15px"}} type="button">
                                    SDK
                                </button>
                                <button className="sdk-button bg-gd-light text-white px-3" onClick={() => setSdk2(false)}>X</button>
                            </div> : null
                        }
                        
                    </div>
                    <div style={isTabletOrMobile ? {"display":"none"}:{"display":"block"}}>
                        <Response />
                    </div>
                    <IconButton
                        onClick={() => {setSdk2(true)}}
                        style={isTabletOrMobile ? {"display":"none"}:{"display":"block"}}
                    >
                        {sdk2 ? <KeyboardArrowUpIcon sx={{ color: 'white' }} onClick={() => {setSdk2(false)}}/> : <KeyboardArrowDownIcon sx={{ color: 'white' }}  onClick={() => {setSdk2(true)}}/>}
                    </IconButton>
                    </div>
                <div className="table-li-list-wrap gap-1">
                    <div>
                        <label className="checkbox-entry" >
                            <input type="checkbox" className="" />
                            <span></span>
                        </label>
                    </div>
                    <div className="play-pause-wrap">
                        <img alt="dravyafolio" src={require('../../assets/images/music.png')} />
                        <img onClick={handleOpen} alt="dravyafolio" src={require('../../assets/images/play.png')} />
                    </div>
                    <div>
                        <span className="text-white macbook" style={isTabletOrMobile ? {"fontSize":"8px","marginLeft":"2px"} :{"fontSize":"14px"}}>

                            Prompts  -
                            Gaming compatability - how ease to play Mobile games due to the size
                        </span>
                        <p></p>
                    </div>
                    <div style={!isTabletOrMobile ? {"display":"none"}:null}>
                    <TableMenu />
                    </div>
                    <div className="px-2" style={isTabletOrMobile ? {"display":"none"}:{"display":"block"}}>
                        <img alt="dravyafolio" src={require('../../assets/images/line.png')} />
                    </div>
                    <div className="d-flex align-items-center gap-2">
                        <p className="p-0 m-0"  style={isTabletOrMobile ? {"display":"none"}:{"display":"block","fontSize":"14px"}}>
                            responses
                        </p>
                        {/*<img alt="dravyafolio" src={require('../../assets/images/plus.png')} />*/}
                    </div>
                    <div style={isTabletOrMobile ? { "display": "none" } : { "display": "block" }}>
                        <button className="btn" type="btn"><FontAwesomeIcon icon={faCirclePlus} style={{ "color": "#119AFF", "fontSize": "1.5rem" }} /></button>
                    </div>
                    <div className="px-2" style={isTabletOrMobile ? { "display": "none" } : { "display": "block" }}>
                        <div className="d-flex flex-wrap ">
                            <div style={rg21 ? { "display": "none" } : null}>
                                <img alt="dravyafolio" src={require('../../assets/images/log-avtar.png')} className="rounded-circle" style={{ "width": "42px" }}></img>
                                <button className="btn" style={remove ? { "position": "relative", "right": "20px", "bottom": "10px" } : { "display": "none" }} onClick={() => { setRg21(true) }}><FontAwesomeIcon icon={faCircleXmark} style={{ "color": "red", "fontSize": "1.2rem" }} /></button>
                            </div>
                            <div style={rg22 ? { "display": "none" } : null}>
                                <img alt="dravyafolio" src={require('../../assets/images/log-avtar.png')} className="rounded-circle" style={{ "width": "42px" }}></img>
                                <button className="btn" style={remove ? { "position": "relative", "right": "20px", "bottom": "10px" } : { "display": "none" }} onClick={() => { setRg22(true) }}><FontAwesomeIcon icon={faCircleXmark} style={{ "color": "red", "fontSize": "1.2rem" }} /></button>
                            </div>
                            {/* <div style={rg23 ? { "display": "none" } : null}>
                                <img alt="dravyafolio" src={require('../../assets/images/log-avtar.png')} className="rounded-circle" style={{ "width": "42px" }}></img>
                                <button className="btn" style={remove ? { "position": "relative", "right": "20px", "bottom": "10px" } : { "display": "none" }} onClick={() => { setRg23(true) }}><FontAwesomeIcon icon={faCircleXmark} style={{ "color": "red", "fontSize": "1.2rem" }} /></button>
                            </div> */}
                            <div>
                                <Avatar onClick={() => setSecond(true)} style={second ? { "display": "none" } : { "backgroundColor": "#119AFF", "color": "white" }}>+20</Avatar>
                            </div>
                            {second ?
                                <div className="d-flex">
                                    <div>
                                        <img alt="dravyafolio" src={require('../../assets/images/log-avtar.png')} className="rounded-circle" style={{ "width": "42px" }}></img>
                                        <button className="btn" style={remove ? { "position": "relative", "right": "20px", "bottom": "10px" } : { "display": "none" }}><FontAwesomeIcon icon={faCircleXmark} style={{ "color": "red", "fontSize": "1.2rem" }} /></button>
                                    </div>
                                    <div>
                                        <img alt="dravyafolio" src={require('../../assets/images/log-avtar.png')} className="rounded-circle" style={{ "width": "42px" }}></img>
                                        <button className="btn" style={remove ? { "position": "relative", "right": "20px", "bottom": "10px" } : { "display": "none" }}><FontAwesomeIcon icon={faCircleXmark} style={{ "color": "red", "fontSize": "1.2rem" }} /></button>
                                    </div>
                                    <div>
                                        <img alt="dravyafolio" src={require('../../assets/images/log-avtar.png')} className="rounded-circle" style={{ "width": "42px" }}></img>
                                        <button className="btn" style={remove ? { "position": "relative", "right": "20px", "bottom": "10px" } : { "display": "none" }}><FontAwesomeIcon icon={faCircleXmark} style={{ "color": "red", "fontSize": "1.2rem" }} /></button>
                                    </div>
                                    <p onClick={() => setSecond(false)}><FontAwesomeIcon icon={faCircleXmark} style={{ "color": "#119AFF", "fontSize": "2.5rem" }} /></p>
                                </div> : null}
                        </div>
                    </div>
                    <div style={isTabletOrMobile ? { "display": "none" } : { "display": "block" }}>
                        <div style={{ "position": "relative", "left": "8px" }}>
                            <button className="btn" type="button"><FontAwesomeIcon icon={faHeart} style={over ? { color: "#119AFF", fontSize: "1.6rem" } : { color: "none", border: "none", fontSize: "1.6rem" }} onClick={() => { setOver(true) }} /></button>
                        </div>
                    </div>
                    <div className="px-3" style={isTabletOrMobile ? { "display": "none" } : { "display": "block" }}>

                        <AvatarGroup>

                            <div className="d-flex align-items-center gap-3">
                                <p style={{ "fontSize": "14px" }}>
                                    Tags
                                </p>
                                <button className="sdk-button bg-gd-light text-white px-2 d-flex" style={{ "fontSize": "15px" }} type="button">
                                    SDK
                                </button>
                                <button className="sdk-button bg-gd-light text-white px-2 d-flex" style={{ "fontSize": "15px" }} type="button">
                                    SDK
                                </button>
                                <button className="count-button text-white px-2  d-flex" style={{ "fontSize": "15px" }} type="button">
                                    +12
                                </button>
                            </div>
                        </AvatarGroup>
                        {sdk2 ?
                            <div className="d-flex align-items-center gap-3" style={{ "marginLeft": "52px" }}>
                                <button className="sdk-button bg-gd-light text-white px-2 d-flex" style={{ "fontSize": "15px" }} type="button">
                                    SDK
                                </button>
                                <button className="sdk-button bg-gd-light text-white px-2 d-flex" style={{ "fontSize": "15px" }} type="button">
                                    SDK
                                </button>
                                <button className="sdk-button bg-gd-light text-white px-3" onClick={() => setSdk2(false)}>X</button>
                            </div> : null
                        }

                    </div>
                    <div style={isTabletOrMobile ? { "display": "none" } : { "display": "block" }}>
                        <Response promptDelete={promptDelete} setPromptDelete={setPromptDelete} />
                    </div>
                    <IconButton
                        onClick={() => { setSdk2(true) }}
                        style={isTabletOrMobile ? { "display": "none" } : { "display": "block" }}>
                        {sdk2 ? <KeyboardArrowUpIcon sx={{ color: 'white' }} onClick={() => { setSdk2(false) }} /> : <KeyboardArrowDownIcon sx={{ color: 'white' }} onClick={() => { setSdk2(true) }} />}
                    </IconButton>

                </div>


                <div className="table-li-list-wrap gap-1  overflow-hidden ">
                    <div>
                        <label className="checkbox-entry" >
                            <input type="checkbox" className="" />
                            <span></span>
                        </label>
                    </div>
                    <div className="play-pause-wrap">
                        <img alt="dravyafolio" src={require('../../assets/images/music.png')} />
                        <img onClick={handleOpen} alt="dravyafolio" src={require('../../assets/images/play.png')} />
                    </div>
                    <div>
                        <span className="text-white macbook" style={isTabletOrMobile ? { "fontSize": "8px", "marginLeft": "2px" } : { "fontSize": "14px" }}>

                            Prompts  -
                            Gaming compatability - how ease to play Mobile games due to the size
                        </span>
                        <p></p>
                    </div>
                    <div style={!isTabletOrMobile ? { "display": "none" } : null}>
                        <TableMenu />
                    </div>
                    <div className="px-2" style={isTabletOrMobile ? { "display": "none" } : { "display": "block" }}>
                        <img alt="dravyafolio" src={require('../../assets/images/line.png')} />
                    </div>
                    <div className="d-flex align-items-center gap-2">
                        <p className="p-0 m-0" style={isTabletOrMobile ? { "display": "none" } : { "display": "block", "fontSize": "14px" }}>
                            responses
                        </p>
                        {/*<img alt="dravyafolio" src={require('../../assets/images/plus.png')} />*/}
                    </div>
                    <div style={isTabletOrMobile ? { "display": "none" } : { "display": "block" }}>
                        <button className="btn" type="btn"><FontAwesomeIcon icon={faCirclePlus} style={{ "color": "#119AFF", "fontSize": "1.5rem" }} /></button>
                    </div>
                    <div className="px-2" style={isTabletOrMobile ? { "display": "none" } : { "display": "block" }}>
                        <div className="d-flex flex-wrap">
                            <div style={rg31 ? { "display": "none" } : null}>
                                <img alt="dravyafolio" src={require('../../assets/images/log-avtar.png')} className="rounded-circle" style={{ "width": "42px" }}></img>
                                <button className="btn" style={remove ? { "position": "relative", "right": "20px", "bottom": "10px" } : { "display": "none" }} onClick={() => { setRg31(true) }}><FontAwesomeIcon icon={faCircleXmark} style={{ "color": "red", "fontSize": "1.2rem" }} /></button>
                            </div>
                            <div style={rg32 ? { "display": "none" } : null}>
                                <img alt="dravyafolio" src={require('../../assets/images/log-avtar.png')} className="rounded-circle" style={{ "width": "42px" }}></img>
                                <button className="btn" style={remove ? { "position": "relative", "right": "20px", "bottom": "10px" } : { "display": "none" }} onClick={() => { setRg32(true) }}><FontAwesomeIcon icon={faCircleXmark} style={{ "color": "red", "fontSize": "1.2rem" }} /></button>
                            </div>
                            <div style={rg33 ? { "display": "none" } : null}>
                                <img alt="dravyafolio" src={require('../../assets/images/log-avtar.png')} className="rounded-circle" style={{ "width": "42px" }}></img>
                                <button className="btn" style={remove ? { "position": "relative", "right": "20px", "bottom": "10px" } : { "display": "none" }} onClick={() => { setRg33(true) }}><FontAwesomeIcon icon={faCircleXmark} style={{ "color": "red", "fontSize": "1.2rem" }} /></button>
                            </div>
                            <div>
                                <Avatar onClick={() => setThird(true)} style={third ? { "display": "none" } : { "backgroundColor": "#119AFF", "color": "white" }}>+20</Avatar>
                            </div>
                            {third ?
                                <div className="d-flex">
                                    <div>
                                        <img alt="dravyafolio" src={require('../../assets/images/log-avtar.png')} className="rounded-circle" style={{ "width": "42px" }}></img>
                                        <button className="btn" style={remove ? { "position": "relative", "right": "20px", "bottom": "10px" } : { "display": "none" }}><FontAwesomeIcon icon={faCircleXmark} style={{ "color": "red", "fontSize": "1.2rem" }} /></button>
                                    </div>
                                    <div>
                                        <img alt="dravyafolio" src={require('../../assets/images/log-avtar.png')} className="rounded-circle" style={{ "width": "42px" }}></img>
                                        <button className="btn" style={remove ? { "position": "relative", "right": "20px", "bottom": "10px" } : { "display": "none" }}><FontAwesomeIcon icon={faCircleXmark} style={{ "color": "red", "fontSize": "1.2rem" }} /></button>
                                    </div>
                                    <div>
                                        <img alt="dravyafolio" src={require('../../assets/images/log-avtar.png')} className="rounded-circle" style={{ "width": "42px" }}></img>
                                        <button className="btn" style={remove ? { "position": "relative", "right": "20px", "bottom": "10px" } : { "display": "none" }}><FontAwesomeIcon icon={faCircleXmark} style={{ "color": "red", "fontSize": "1.2rem" }} /></button>
                                    </div>
                                    <p onClick={() => setThird(false)}><FontAwesomeIcon icon={faCircleXmark} style={{ "color": "#119AFF", "fontSize": "2.5rem" }} /></p>
                                </div> : null}
                        </div>
                    </div>
                    <div style={isTabletOrMobile ? { "display": "none" } : { "display": "block" }}>
                        <div style={{ "position": "relative", "left": "8px" }}>
                            <button className="btn" type="button"><FontAwesomeIcon icon={faHeart} style={over ? { color: "#119AFF", fontSize: "1.6rem" } : { color: "none", border: "none", fontSize: "1.6rem" }} onClick={() => { setOver(true) }} /></button>
                        </div>
                    </div>
                    <div className="px-3" style={isTabletOrMobile ? { "display": "none" } : { "display": "block" }}>

                        <AvatarGroup>

                            <div className="d-flex align-items-center gap-3">
                                <p style={{ "fontSize": "14px" }}>
                                    Tags
                                </p>
                                <button className="sdk-button bg-gd-light text-white px-2 d-flex" style={{ "fontSize": "15px" }} type="button">
                                    SDK
                                </button>
                                <button className="sdk-button bg-gd-light text-white px-2 d-flex" style={{ "fontSize": "15px" }} type="button">
                                    SDK
                                </button>
                                <button className="count-button text-white px-2  d-flex" style={{ "fontSize": "15px" }} type="button">
                                    +12
                                </button>
                            </div>
                        </AvatarGroup>
                        {sdk3 ?
                            <div className="d-flex align-items-center gap-3" style={{ "marginLeft": "52px" }}>
                                <button className="sdk-button bg-gd-light text-white px-2 d-flex" style={{ "fontSize": "15px" }} type="button">
                                    SDK
                                </button>
                                <button className="sdk-button bg-gd-light text-white px-2 d-flex" style={{ "fontSize": "15px" }} type="button">
                                    SDK
                                </button>
                                <button className="sdk-button bg-gd-light text-white px-3" onClick={() => setSdk3(false)}>X</button>
                            </div> : null
                        }

                    </div>
                    <div style={isTabletOrMobile ? { "display": "none" } : { "display": "block" }}>
                        <Response promptDelete={promptDelete} setPromptDelete={setPromptDelete} />
                    </div>
                    <IconButton
                        onClick={() => { setSdk3(true) }}
                        style={isTabletOrMobile ? { "display": "none" } : { "display": "block" }}>
                        {sdk3 ? <KeyboardArrowUpIcon sx={{ color: 'white' }} onClick={() => { setSdk3(false) }} /> : <KeyboardArrowDownIcon sx={{ color: 'white' }} onClick={() => { setSdk3(true) }} />}
                    </IconButton>

                </div>


                <div className="table-li-list-wrap gap-1 overflow-hidden">
                    <div>
                        <label className="checkbox-entry" >
                            <input type="checkbox" className="" />
                            <span></span>
                        </label>
                    </div>
                    <div className="play-pause-wrap">
                        <img alt="dravyafolio" src={require('../../assets/images/music.png')} />
                        <img onClick={handleOpen} alt="dravyafolio" src={require('../../assets/images/play.png')} />
                    </div>
                    <div>
                        <span className="text-white macbook" style={isTabletOrMobile ? { "fontSize": "8px", "marginLeft": "2px" } : { "fontSize": "14px" }}>

                            Prompts  -
                            Gaming compatability - how ease to play Mobile games due to the size
                        </span>
                        <p></p>
                    </div>
                    <div style={!isTabletOrMobile ? { "display": "none" } : null}>
                        <TableMenu />
                    </div>
                    <div className="px-2" style={isTabletOrMobile ? { "display": "none" } : { "display": "block" }}>
                        <img alt="dravyafolio" src={require('../../assets/images/line.png')} />
                    </div>
                    <div className="d-flex align-items-center gap-2">
                        <p className="p-0 m-0" style={isTabletOrMobile ? { "display": "none" } : { "display": "block", "fontSize": "14px" }}>
                            responses
                        </p>
                        {/*<img alt="dravyafolio" src={require('../../assets/images/plus.png')} />*/}
                    </div>
                    <div style={isTabletOrMobile ? { "display": "none" } : { "display": "block" }}>
                        <button className="btn" type="btn"><FontAwesomeIcon icon={faCirclePlus} style={{ "color": "#119AFF", "fontSize": "1.5rem" }} /></button>
                    </div>
                    <div className="px-2" style={isTabletOrMobile ? { "display": "none" } : { "display": "block" }}>
                        <div className="d-flex flex-wrap">
                            <div style={rg41 ? { "display": "none" } : null}>
                                <img alt="dravyafolio" src={require('../../assets/images/log-avtar.png')} className="rounded-circle" style={{ "width": "42px" }}></img>
                                <button className="btn" style={remove ? { "position": "relative", "right": "20px", "bottom": "10px" } : { "display": "none" }} onClick={() => { setRg41(true) }}><FontAwesomeIcon icon={faCircleXmark} style={{ "color": "red", "fontSize": "1.2rem" }} /></button>
                            </div>
                            <div style={rg42 ? { "display": "none" } : null}>
                                <img alt="dravyafolio" src={require('../../assets/images/log-avtar.png')} className="rounded-circle" style={{ "width": "42px" }}></img>
                                <button className="btn" style={remove ? { "position": "relative", "right": "20px", "bottom": "10px" } : { "display": "none" }} onClick={() => { setRg42(true) }}><FontAwesomeIcon icon={faCircleXmark} style={{ "color": "red", "fontSize": "1.2rem" }} /></button>
                            </div>
                            <div style={rg43 ? { "display": "none" } : null}>
                                <img alt="dravyafolio" src={require('../../assets/images/log-avtar.png')} className="rounded-circle" style={{ "width": "42px" }}></img>
                                <button className="btn" style={remove ? { "position": "relative", "right": "20px", "bottom": "10px" } : { "display": "none" }} onClick={() => { setRg43(true) }}><FontAwesomeIcon icon={faCircleXmark} style={{ "color": "red", "fontSize": "1.2rem" }} /></button>
                            </div>
                            <div>
                                <Avatar onClick={() => setFourth(true)} style={fourth ? { "display": "none" } : { "backgroundColor": "#119AFF", "color": "white" }}>+20</Avatar>
                            </div>
                            {fourth ?
                                <div className="d-flex">
                                    <div>
                                        <img alt="dravyafolio" src={require('../../assets/images/log-avtar.png')} className="rounded-circle" style={{ "width": "42px" }}></img>
                                        <button className="btn" style={remove ? { "position": "relative", "right": "20px", "bottom": "10px" } : { "display": "none" }}><FontAwesomeIcon icon={faCircleXmark} style={{ "color": "red", "fontSize": "1.2rem" }} /></button>
                                    </div>
                                    <div>
                                        <img alt="dravyafolio" src={require('../../assets/images/log-avtar.png')} className="rounded-circle" style={{ "width": "42px" }}></img>
                                        <button className="btn" style={remove ? { "position": "relative", "right": "20px", "bottom": "10px" } : { "display": "none" }}><FontAwesomeIcon icon={faCircleXmark} style={{ "color": "red", "fontSize": "1.2rem" }} /></button>
                                    </div>
                                    <div>
                                        <img alt="dravyafolio" src={require('../../assets/images/log-avtar.png')} className="rounded-circle" style={{ "width": "42px" }}></img>
                                        <button className="btn" style={remove ? { "position": "relative", "right": "20px", "bottom": "10px" } : { "display": "none" }}><FontAwesomeIcon icon={faCircleXmark} style={{ "color": "red", "fontSize": "1.2rem" }} /></button>
                                    </div>
                                    <p onClick={() => setShow(false)}><FontAwesomeIcon icon={faCircleXmark} style={{ "color": "#119AFF", "fontSize": "2.5rem" }} /></p>
                                </div> : null}
                        </div>
                    </div>
                    <div style={isTabletOrMobile ? { "display": "none" } : { "display": "block" }}>
                        <div style={{ "position": "relative", "left": "8px" }}>
                            <button className="btn" type="button"><FontAwesomeIcon icon={faHeart} style={over ? { color: "#119AFF", fontSize: "1.6rem" } : { color: "none", border: "none", fontSize: "1.6rem" }} onClick={() => { setOver(true) }} /></button>
                        </div>
                    </div>
                    <div className="px-3" style={isTabletOrMobile ? { "display": "none" } : { "display": "block" }}>

                        <AvatarGroup>

                            <div className="d-flex align-items-center gap-3">
                                <p style={{ "fontSize": "14px" }}>
                                    Tags
                                </p>
                                <button className="sdk-button bg-gd-light text-white px-2 d-flex" style={{ "fontSize": "15px" }} type="button">
                                    SDK
                                </button>
                                <button className="sdk-button bg-gd-light text-white px-2 d-flex" style={{ "fontSize": "15px" }} type="button">
                                    SDK
                                </button>
                                <button className="count-button text-white px-2  d-flex" style={{ "fontSize": "15px" }} type="button">
                                    +12
                                </button>
                            </div>
                        </AvatarGroup>
                        {sdk4 ?
                            <div className="d-flex align-items-center gap-3" style={{ "marginLeft": "52px" }}>
                                <button className="sdk-button bg-gd-light text-white px-2 d-flex" style={{ "fontSize": "15px" }} type="button">
                                    SDK
                                </button>
                                <button className="sdk-button bg-gd-light text-white px-2 d-flex" style={{ "fontSize": "15px" }} type="button">
                                    SDK
                                </button>
                                <button className="sdk-button bg-gd-light text-white px-3" onClick={() => setSdk4(false)}>X</button>
                            </div> : null
                        }

                    </div>
                    <div style={isTabletOrMobile ? { "display": "none" } : { "display": "block" }}>
                        <Response promptDelete={promptDelete} setPromptDelete={setPromptDelete} />
                    </div>
                    <IconButton
                        onClick={() => { setSdk4(true) }}
                        style={isTabletOrMobile ? { "display": "none" } : { "display": "block" }}>
                        {sdk4 ? <KeyboardArrowUpIcon sx={{ color: 'white' }} onClick={() => { setSdk4(false) }} /> : <KeyboardArrowDownIcon sx={{ color: 'white' }} onClick={() => { setSdk4(true) }} />}
                    </IconButton>

                </div>


                <div className="table-li-list-wrap gap-1 overflow-hidden">
                    <div>
                        <label className="checkbox-entry" >
                            <input type="checkbox" className="" />
                            <span></span>
                        </label>
                    </div>
                    <div className="play-pause-wrap">
                        <img alt="dravyafolio" src={require('../../assets/images/music.png')} />
                        <img onClick={handleOpen} alt="dravyafolio" src={require('../../assets/images/play.png')} />
                    </div>
                    <div>
                        <span className="text-white macbook" style={isTabletOrMobile ? { "fontSize": "8px", "marginLeft": "2px" } : { "fontSize": "14px" }}>

                            Prompts  -
                            Gaming compatability - how ease to play Mobile games due to the size
                        </span>
                        <p></p>
                    </div>
                    <div style={!isTabletOrMobile ? { "display": "none" } : null}>
                        <TableMenu />
                    </div>
                    <div className="px-2" style={isTabletOrMobile ? { "display": "none" } : { "display": "block" }}>
                        <img alt="dravyafolio" src={require('../../assets/images/line.png')} />
                    </div>
                    <div className="d-flex align-items-center gap-2">
                        <p className="p-0 m-0" style={isTabletOrMobile ? { "display": "none" } : { "display": "block", "fontSize": "14px" }}>
                            responses
                        </p>
                        {/*<img alt="dravyafolio" src={require('../../assets/images/plus.png')} />*/}
                    </div>
                    <div style={isTabletOrMobile ? { "display": "none" } : { "display": "block" }}>
                        <button className="btn" type="btn"><FontAwesomeIcon icon={faCirclePlus} style={{ "color": "#119AFF", "fontSize": "1.5rem" }} /></button>
                    </div>
                    <div className="px-2" style={isTabletOrMobile ? { "display": "none" } : { "display": "block" }}>
                        <div className="d-flex flex-wrap">
                            <div style={rg51 ? { "display": "none" } : null}>
                                <img alt="dravyafolio" src={require('../../assets/images/log-avtar.png')} className="rounded-circle" style={{ "width": "42px" }}></img>
                                <button className="btn" style={remove ? { "position": "relative", "right": "20px", "bottom": "10px" } : { "display": "none" }} onClick={() => { setRg51(true) }}><FontAwesomeIcon icon={faCircleXmark} style={{ "color": "red", "fontSize": "1.2rem" }} /></button>
                            </div>
                            <div style={rg52 ? { "display": "none" } : null}>
                                <img alt="dravyafolio" src={require('../../assets/images/log-avtar.png')} className="rounded-circle" style={{ "width": "42px" }}></img>
                                <button className="btn" style={remove ? { "position": "relative", "right": "20px", "bottom": "10px" } : { "display": "none" }} onClick={() => { setRg52(true) }}><FontAwesomeIcon icon={faCircleXmark} style={{ "color": "red", "fontSize": "1.2rem" }} /></button>
                            </div>
                            <div style={rg53 ? { "display": "none" } : null}>
                                <img alt="dravyafolio" src={require('../../assets/images/log-avtar.png')} className="rounded-circle" style={{ "width": "42px" }}></img>
                                <button className="btn" style={remove ? { "position": "relative", "right": "20px", "bottom": "10px" } : { "display": "none" }} onClick={() => { setRg53(true) }}><FontAwesomeIcon icon={faCircleXmark} style={{ "color": "red", "fontSize": "1.2rem" }} /></button>
                            </div>
                            <div>
                                <Avatar onClick={() => setFifth(true)} style={fifth ? { "display": "none" } : { "backgroundColor": "#119AFF", "color": "white" }}>+20</Avatar>
                            </div>
                            {fifth ?
                                <div className="d-flex">
                                    <div>
                                        <img alt="dravyafolio" src={require('../../assets/images/log-avtar.png')} className="rounded-circle" style={{ "width": "42px" }}></img>
                                        <button className="btn" style={remove ? { "position": "relative", "right": "20px", "bottom": "10px" } : { "display": "none" }}><FontAwesomeIcon icon={faCircleXmark} style={{ "color": "red", "fontSize": "1.2rem" }} /></button>
                                    </div>
                                    <div>
                                        <img alt="dravyafolio" src={require('../../assets/images/log-avtar.png')} className="rounded-circle" style={{ "width": "42px" }}></img>
                                        <button className="btn" style={remove ? { "position": "relative", "right": "20px", "bottom": "10px" } : { "display": "none" }}><FontAwesomeIcon icon={faCircleXmark} style={{ "color": "red", "fontSize": "1.2rem" }} /></button>
                                    </div>
                                    <div>
                                        <img alt="dravyafolio" src={require('../../assets/images/log-avtar.png')} className="rounded-circle" style={{ "width": "42px" }}></img>
                                        <button className="btn" style={remove ? { "position": "relative", "right": "20px", "bottom": "10px" } : { "display": "none" }}><FontAwesomeIcon icon={faCircleXmark} style={{ "color": "red", "fontSize": "1.2rem" }} /></button>
                                    </div>
                                    <p onClick={() => setFifth(false)}><FontAwesomeIcon icon={faCircleXmark} style={{ "color": "#119AFF", "fontSize": "2.5rem" }} /></p>
                                </div> : null}
                        </div>
                    </div>
                    <div style={isTabletOrMobile ? { "display": "none" } : { "display": "block" }}>
                        <div style={{ "position": "relative", "left": "8px" }}>
                            <button className="btn" type="button"><FontAwesomeIcon icon={faHeart} style={over ? { color: "#119AFF", fontSize: "1.6rem" } : { color: "none", border: "none", fontSize: "1.6rem" }} onClick={() => { setOver(true) }} /></button>
                        </div>
                    </div>
                    <div className="px-3" style={isTabletOrMobile ? { "display": "none" } : { "display": "block" }}>

                        <AvatarGroup>

                            <div className="d-flex align-items-center gap-3">
                                <p style={{ "fontSize": "14px" }}>
                                    Tags
                                </p>
                                <button className="sdk-button bg-gd-light text-white px-2 d-flex" style={{ "fontSize": "15px" }} type="button">
                                    SDK
                                </button>
                                <button className="sdk-button bg-gd-light text-white px-2 d-flex" style={{ "fontSize": "15px" }} type="button">
                                    SDK
                                </button>
                                <button className="count-button text-white px-2  d-flex" style={{ "fontSize": "15px" }} type="button">
                                    +12
                                </button>
                            </div>
                        </AvatarGroup>
                        {sdk5 ?
                            <div className="d-flex align-items-center gap-3" style={{ "marginLeft": "52px" }}>
                                <button className="sdk-button bg-gd-light text-white px-2 d-flex" style={{ "fontSize": "15px" }} type="button">
                                    SDK
                                </button>
                                <button className="sdk-button bg-gd-light text-white px-2 d-flex" style={{ "fontSize": "15px" }} type="button">
                                    SDK
                                </button>
                                <button className="sdk-button bg-gd-light text-white px-3" onClick={() => setSdk5(false)}>X</button>
                            </div> : null
                        }

                    </div>
                    <div style={isTabletOrMobile ? { "display": "none" } : { "display": "block" }}>
                        <Response promptDelete={promptDelete} setPromptDelete={setPromptDelete} />
                    </div>
                    <IconButton
                        onClick={() => { setSdk5(true) }}
                        style={isTabletOrMobile ? { "display": "none" } : { "display": "block" }}>
                        {sdk5 ? <KeyboardArrowUpIcon sx={{ color: 'white' }} onClick={() => { setSdk5(false) }} /> : <KeyboardArrowDownIcon sx={{ color: 'white' }} onClick={() => { setSdk5(true) }} />}
                    </IconButton>

                </div>


                <div className="table-li-list-wrap gap-1 overflow-hidden">
                    <div>
                        <label className="checkbox-entry" >
                            <input type="checkbox" className="" />
                            <span></span>
                        </label>
                    </div>
                    <div className="play-pause-wrap">
                        <img alt="dravyafolio" src={require('../../assets/images/music.png')} />
                        <img onClick={handleOpen} alt="dravyafolio" src={require('../../assets/images/play.png')} />
                    </div>
                    <div>
                        <span className="text-white macbook" style={isTabletOrMobile ? { "fontSize": "8px", "marginLeft": "2px" } : { "fontSize": "14px" }}>

                            Prompts  -
                            Gaming compatability - how ease to play Mobile games due to the size
                        </span>
                        <p></p>
                    </div>
                    <div style={!isTabletOrMobile ? { "display": "none" } : null}>
                        <TableMenu />
                    </div>
                    <div className="px-2" style={isTabletOrMobile ? { "display": "none" } : { "display": "block" }}>
                        <img alt="dravyafolio" src={require('../../assets/images/line.png')} />
                    </div>
                    <div className="d-flex align-items-center gap-2">
                        <p className="p-0 m-0" style={isTabletOrMobile ? { "display": "none" } : { "display": "block", "fontSize": "14px" }}>
                            responses
                        </p>
                        {/*<img alt="dravyafolio" src={require('../../assets/images/plus.png')} />*/}
                    </div>
                    <div style={isTabletOrMobile ? { "display": "none" } : { "display": "block" }}>
                        <button className="btn" type="btn"><FontAwesomeIcon icon={faCirclePlus} style={{ "color": "#119AFF", "fontSize": "1.5rem" }} /></button>
                    </div>
                    <div className="px-2" style={isTabletOrMobile ? { "display": "none" } : { "display": "block" }}>
                        <div className="d-flex flex-wrap">
                            <div style={end ? { "display": "none" } : null}>
                                <img alt="dravyafolio" src={require('../../assets/images/log-avtar.png')} className="rounded-circle" style={{ "width": "42px" }}></img>
                                <button className="btn" style={remove ? { "position": "relative", "right": "20px", "bottom": "10px" } : { "display": "none" }} onClick={() => { setEnd(true) }}><FontAwesomeIcon icon={faCircleXmark} style={{ "color": "red", "fontSize": "1.2rem" }} /></button>
                            </div>
                            <div style={rg1 ? { "display": "none" } : null}>
                                <img alt="dravyafolio" src={require('../../assets/images/log-avtar.png')} className="rounded-circle" style={{ "width": "42px" }}></img>
                                <button className="btn" style={remove ? { "position": "relative", "right": "20px", "bottom": "10px" } : { "display": "none" }} onClick={() => { setRg1(true) }}><FontAwesomeIcon icon={faCircleXmark} style={{ "color": "red", "fontSize": "1.2rem" }} /></button>
                            </div>
                            <div style={rg2 ? { "display": "none" } : null}>
                                <img alt="dravyafolio" src={require('../../assets/images/log-avtar.png')} className="rounded-circle" style={{ "width": "42px" }}></img>
                                <button className="btn" style={remove ? { "position": "relative", "right": "20px", "bottom": "10px" } : { "display": "none" }} onClick={() => { setRg2(true) }}><FontAwesomeIcon icon={faCircleXmark} style={{ "color": "red", "fontSize": "1.2rem" }} /></button>
                            </div>
                            <div>
                                <Avatar onClick={() => setSixth(true)} style={sixth ? { "display": "none" } : { "backgroundColor": "#119AFF", "color": "white" }}>+20</Avatar>
                            </div>
                            {sixth ?
                                <div className="d-flex">
                                    <div>
                                        <img alt="dravyafolio" src={require('../../assets/images/log-avtar.png')} className="rounded-circle" style={{ "width": "42px" }}></img>
                                        <button className="btn" style={remove ? { "position": "relative", "right": "20px", "bottom": "10px" } : { "display": "none" }}><FontAwesomeIcon icon={faCircleXmark} style={{ "color": "red", "fontSize": "1.2rem" }} /></button>
                                    </div>
                                    <div>
                                        <img alt="dravyafolio" src={require('../../assets/images/log-avtar.png')} className="rounded-circle" style={{ "width": "42px" }}></img>
                                        <button className="btn" style={remove ? { "position": "relative", "right": "20px", "bottom": "10px" } : { "display": "none" }}><FontAwesomeIcon icon={faCircleXmark} style={{ "color": "red", "fontSize": "1.2rem" }} /></button>
                                    </div>
                                    <div>
                                        <img alt="dravyafolio" src={require('../../assets/images/log-avtar.png')} className="rounded-circle" style={{ "width": "42px" }}></img>
                                        <button className="btn" style={remove ? { "position": "relative", "right": "20px", "bottom": "10px" } : { "display": "none" }}><FontAwesomeIcon icon={faCircleXmark} style={{ "color": "red", "fontSize": "1.2rem" }} /></button>
                                    </div>
                                    <p onClick={() => setSixth(false)}><FontAwesomeIcon icon={faCircleXmark} style={{ "color": "#119AFF", "fontSize": "2.5rem" }} /></p>
                                </div> : null}
                        </div>
                    </div>
                    <div style={isTabletOrMobile ? { "display": "none" } : { "display": "block" }}>
                        <div style={{ "position": "relative", "left": "8px" }}>
                            <button className="btn" type="button"><FontAwesomeIcon icon={faHeart} style={over ? { color: "#119AFF", fontSize: "1.6rem" } : { color: "none", border: "none", fontSize: "1.6rem" }} onClick={() => { setOver(true) }} /></button>
                        </div>
                    </div>
                    <div className="px-3 " style={isTabletOrMobile ? { "display": "none" } : { "display": "block" }}>

                        <AvatarGroup>

                            <div className="d-flex align-items-center gap-3 ">
                                <p style={{ "fontSize": "14px" }}>
                                    Tags
                                </p>
                                <button className="sdk-button bg-gd-light text-white px-2 d-flex" style={{ "fontSize": "15px" }} type="button">
                                    SDK
                                </button>
                                <button className="sdk-button bg-gd-light text-white px-2 d-flex" style={{ "fontSize": "15px" }} type="button">
                                    SDK
                                </button>
                                <button className="count-button text-white px-2  d-flex" style={{ "fontSize": "15px" }} type="button">
                                    +12
                                </button>
                            </div>
                        </AvatarGroup>
                        {sdk6 ?
                            <div className="d-flex align-items-center gap-3" style={{ "marginLeft": "52px" }}>
                                <button className="sdk-button bg-gd-light text-white px-2 d-flex" style={{ "fontSize": "15px" }} type="button">
                                    SDK
                                </button>
                                <button className="sdk-button bg-gd-light text-white px-2 d-flex" style={{ "fontSize": "15px" }} type="button">
                                    SDK
                                </button>
                                <button className="sdk-button bg-gd-light text-white px-3" onClick={() => setSdk6(false)}>X</button>
                            </div> : null
                        }

                    </div>
                    <div style={isTabletOrMobile ? { "display": "none" } : { "display": "block" }}>
                        <Response promptDelete={promptDelete} setPromptDelete={setPromptDelete} />
                    </div>
                    <IconButton
                        onClick={() => { setSdk6(true) }}
                        style={isTabletOrMobile ? { "display": "none" } : { "display": "block" }}>
                        {sdk6 ? <KeyboardArrowUpIcon sx={{ color: 'white' }} onClick={() => { setSdk6(false) }} /> : <KeyboardArrowDownIcon sx={{ color: 'white' }} onClick={() => { setSdk6(true) }} />}
                    </IconButton>

                </div>


            </div>
            <div className="bg-transparent  ">

                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style} className="border-red-800">
                        {/* <iframe alt="dravyafolio" src="https://platform.twitter.com/widgets/tweet_button.html"></iframe> */}
                        <VideoApp />
                    </Box>
                </Modal>
            </div>
        </div>

    )
}

export default TableList;