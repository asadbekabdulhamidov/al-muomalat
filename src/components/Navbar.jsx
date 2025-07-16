// images
import SiteLogo from '../assets/images/svg/siteLogo.svg?react';
//react router dom
import { Link, NavLink } from 'react-router-dom';
//componnets
import ProgramsDropdown from './ProgramsDropdown';
import SignButton from './SignButton';
import LanguageDropdown from './LanguageDropdown';

//i18
import { useTranslation } from 'react-i18next';

function Navbar() {
  const { t } = useTranslation();
  return (
    <nav className="container py-[22px] flex items-center justify-between ">
      <Link to="/">
        <SiteLogo />
      </Link>
      <div className="flex items-center gap-10">
        <NavLink className="nav-text" to={'/'}>
          {t('nav_home')}
        </NavLink>
        <ProgramsDropdown />
        <NavLink className="nav-text whitespace-nowrap" to={'#'}>
          {t('nav_finance_tools')}
        </NavLink>
        <NavLink className="nav-text" to={'#'}>
          {t('nav_contact')}
        </NavLink>
      </div>
      <div className="flex items-center gap-[34px]">
        <LanguageDropdown />
        <div className="h-10 w-[1px] bg-gray-400"></div>
        <SignButton navbar="navbar">{t('nav_sign_in')}</SignButton>
      </div>
    </nav>
  );
}

export default Navbar;
