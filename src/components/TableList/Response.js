import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCirclePlay} from '@fortawesome/free-regular-svg-icons';
import {faEllipsis,faTrashCan} from '@fortawesome/free-solid-svg-icons';

const Response = ({promptDelete,setPromptDelete}) => {
    
  return (
    <OverlayTrigger delay={{hide:450,show:300}} overlay={(props) => (
        <Tooltip {...props}>
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
        <button className='btn' type="button"><FontAwesomeIcon icon={faEllipsis} style={{"color":"white"}} /></button>
    </OverlayTrigger>
  )
}

export default Response;