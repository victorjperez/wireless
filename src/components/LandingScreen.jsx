import React from 'react';

import logo from '../resources/wirelesslogo.svg'

function LandingScreen() {
    return (
        <React.Fragment>
        <div className={'title-area'}>
            <img src={logo} alt={"wireless logo"}/>
            <h1>The Official Zine Of U92-FM</h1>
            <h2>FALL SEMESTER 2019</h2>
        </div>

        </React.Fragment>);
}
export default LandingScreen;