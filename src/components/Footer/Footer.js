import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faInstagramSquare, faFacebookSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <footer className='logos'>
            <a href="https://twitter.com/i/flow/login">
                <FontAwesomeIcon icon={faTwitterSquare} className="twitter" />
            </a>
            <a href="https://tr-tr.facebook.com">
                <FontAwesomeIcon icon={faFacebookSquare} className="facebook" />
            </a>
            <a href="https://www.instagram.com/halibal__/">
                <FontAwesomeIcon icon={faInstagramSquare} className="instagram" />
            </a>
            <a href="https://github.com/halibal">
                <FontAwesomeIcon icon={faGithubSquare} className="github" />
            </a>
        </footer>
    )
}

export default Footer;