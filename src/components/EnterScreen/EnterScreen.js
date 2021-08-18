import React from 'react';
import { Link } from 'react-router-dom';
import './EnterScreen.scss';

const EnterScreen = () => (
    <div className='enter-screen'>
        <h1 className='enter-screen__title title'>
            Ready for a great User experience?
        </h1>
        <p className='enter-screen__subtitle'>
            Bring your media to the next level!
        </p>
        <Link to='/signup' className='enter-screen-link'>
            Sign Up
        </Link>
    </div>
)

export default EnterScreen;