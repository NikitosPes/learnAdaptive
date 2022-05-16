import React from 'react';

import './Footer.scss'

const Footer: React.FC = () => {
    return (
        <div className='footer'>
            <div className="footer__body">
                <div className="footer__links">
                    <a className='footer__link' href="">Lorem</a>
                    <a className='footer__link' href="">Lorem, ipsum.</a>
                    <a className='footer__link' href="">Lorem, ipsum.</a>
                    <a className='footer__link' href="">Lorem, ipsum dolor.</a>
                    <a className='footer__link' href="">Lorem, ipsum dolor.</a>
                    <a className='footer__link' href="">Lorem</a>
                </div>
                <div className="footer__copyright-block">
                    <div>@Lorem, ipsum.</div>
                    <a href="" className="footer__copyright-link">Lorem, ipsum dolor.</a>
                    <a href="" className="footer__copyright-link">Lorem, ipsum.</a>
                </div>
            </div>
        </div>
    )
}

export default Footer