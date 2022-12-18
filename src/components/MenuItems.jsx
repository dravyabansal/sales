// import { Close } from '@material-ui/icons';
import React from 'react';
// import { a } from 'react-router-dom';

const MenuItems = ({showMenu,active}) => {
  return (
                <ul className={active ? 'flex-col flex items-center fixed inset-0 left-1/4 uppercase bg-black/40 backdrop-blur-lg gap-8 justify-center p-8 md:hidden' : 'hidden'}>
                    {/* <Close onClick={showMenu} className='cursor-pointer'/> */}
                    <li><a href='/'>Home</a></li>
                    <li><a href='/'>Testimonials</a></li>
                    <li><a href='/'>Information</a></li>
                    <li><a href='/'>Jobs</a></li>
                    <li><a href='/'>About</a></li>
                    <li><a href='/'>Contact</a></li>
                </ul>
  );
};

export default MenuItems;