import React from 'react';
import ProfilePicture from "../../img/CV.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Info() {
    return (
        <div className="info-section">
            <img src={ProfilePicture} alt="my profile" />
            <h1>Halil ALGUL</h1>
            <h2>Front-End Developer</h2>
            <a
                href="https://github.com/halibal"
                target="_blank"
                rel='noreferrer noopener'
            >
                https://github.com/halibal
            </a>
            <div className="buttons">
                <a href="mailto:halibal95@gmail.com" target="_blank" rel="noreferrer noopener" className='email'>
                    <FontAwesomeIcon icon={faEnvelope} className='envelope-icon' />
                    Email
                </a>
                <a href="https://www.linkedin.com/in/halilagul/" target="_blank" rel="noreferrer noopener" className='linkedin'>
                    <FontAwesomeIcon icon={faLinkedin} className='linkedin-icon' />
                    LinkedIn
                </a>
            </div>
        </div>
    )
}

export default Info;