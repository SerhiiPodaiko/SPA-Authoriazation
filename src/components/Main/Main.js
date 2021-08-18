import React from 'react';
import './Main.scss';

const Main = (props) => (
    <div className='main'>
        <h1 className='main-title title'>
            Hello {props.location.state.detail}!
        </h1>
    </div>
)

export default Main;