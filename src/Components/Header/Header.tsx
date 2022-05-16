import React, { useState } from 'react'
import HeaderSearchInput from './HeaderSearchInput/HeaderSearchInput'

import cartIcon from '../../Assets/Icons/cart.svg'
import profileIcon from '../../Assets/Icons/profile-icon.svg'
import hamburgerMenuIcon from '../../Assets/Icons/hamburger-menu.svg'

import '../Header/Header.scss'

const Header: React.FC = () => {

    const [activeHamburger, setActiveHamburger] = useState<boolean>(false)

    const hamburgerMenuClickHandler = () => {
        setActiveHamburger(!activeHamburger);    
    }

    return (
        <div className='header'>
            <div className='header__body'>
                <div className='header__logo'>
                    Book shop
                </div>
                <HeaderSearchInput />
                <div className='header__auth-links'>
                    <a className='header__sign-in-link' href='#'>Sign in</a>
                    <a className='header__sign-in-link-icon' href='#'>
                        <img className='header__sign-in-icon' src={profileIcon} alt='' />
                    </a>
                    <a className='header__cart-link'>
                        <img className='header__cart-icon' src={cartIcon} alt=''/>
                    </a>
                </div>
                <a className='header__hamburger-link'  onClick={hamburgerMenuClickHandler}>
                    <img className='header__hamburger-icon' src={hamburgerMenuIcon} alt='' />
                </a>
                <div className={activeHamburger ? 'header__nav-links active' : 'header__nav-links'}>
                    <a className='header__link' href="">Best Sellers</a>
                    <a className='header__link' href="">New Realease</a>
                    <a className='header__link' href="">Fiction</a>
                    <a className='header__link' href="">Nonfiction</a>
                </div>
            </div>
        </div>
    )
}

export default Header;