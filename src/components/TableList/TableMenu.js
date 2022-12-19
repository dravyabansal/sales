import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCirclePlay} from '@fortawesome/free-regular-svg-icons';
import {faChevronDown,faTrashCan,faReply,faTag} from "@fortawesome/free-solid-svg-icons";

const TableMenu = ({promptDelete,setPromptDelete}) => {
  return (
    <div className='border-5 bg:white'>
      <OverlayTrigger delay={{hide:450,show:300}} overlay={(props) => (
        <Tooltip {...props}>
            <p className='response-menu'>
            <button className='btn' type="button"><FontAwesomeIcon icon={faReply} style={{"color":"#17B2FF"}} /></button>
                Responses
            </p>
            <p className='tag-menu'>
            <button className='btn' type="button"><FontAwesomeIcon icon={faTag} style={{"color":"#17B2FF"}} /></button>
                Tags
            </p>
            <p className='play'>
                <button className='btn' type="button"><FontAwesomeIcon icon={faCirclePlay} style={{"color":"#17B2FF"}} /></button>
                Play Prompts
            </p>
            <p className='delete'>
                <button className='btn' type="button"><FontAwesomeIcon icon={faTrashCan} style={{"color":"#DC4C64"}} onClick={() => {setPromptDelete(true)}}/></button>
                Delete Prompts
            </p>
            <p>
                <button className='btn' type="button"><FontAwesomeIcon icon={faTrashCan} style={{"color":"#DC4C64"}} /></button>
                Delete Response
            </p>
        </Tooltip>
        )}
    placement="bottom">
        <div style={{"position":"relative","left":"12px"}}>
        <button className='btn' type="button"><FontAwesomeIcon icon={faChevronDown} style={{"color":"white","fontSize":"0.8rem"}} /></button>
        </div>
    </OverlayTrigger>
    </div>
  )
}

export default TableMenu
