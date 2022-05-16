import React, { useState } from 'react'
import searchLoopIcon from '../../../Assets/Icons/search-loop.svg'

const HeaderSearchInput: React.FC = () => {

    const [focused, setFocused] = useState(false);


    return (
        <div className='header-search-input'>
            <div className={`header-search-input__wrapper ${focused ? 'active' : ''}`}>
                <input type='text' className='header-search-input__input'
                    placeholder='Search books, authors' 
                    onFocus={() => setFocused(true)}
                    onBlur={() =>setFocused(false)}
                />
                <button className='header-search-input__button'>
                    <img className='header-search-input__button-img' src={searchLoopIcon} alt='' />
                </button>
            </div>
        </div>
    )
}

export default HeaderSearchInput