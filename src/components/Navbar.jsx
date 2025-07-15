// images
import SiteLogo from '../assets/images/svg/siteLogo.svg?react';
//react router dom
import { Link, NavLink } from 'react-router-dom';
//componnets
import ProgramsDropdown from './ProgramsDropdown';

function Navbar() {
  return (
    <nav className="container py-[22px] flex items-center ">
      <Link to="/">
        <SiteLogo />
      </Link>
      <div className="flex items-center">
        <NavLink to={'/'}>Home</NavLink>
        <ProgramsDropdown />
        <NavLink to={'#'}>Finance tools</NavLink>
        <NavLink to={'#'}>Contact</NavLink>
      </div>
      <div></div>
    </nav>
  );
}

export default Navbar;
