import React from 'react';
import './../../../Assets/styles/Header/logo.sass';
import logo from './../../../Assets/img/logo/Reginox_logo.png';
import holding from './../../../Assets/img/logo/PRHolding_logo.png';
const Logo = () => {
    return(
        <div className = 'container-logo'>
            <img className = 'header-logo' src = {logo} alt = 'image-logo' />
            <img className = 'header-holding' src = {holding} alt = 'image-logo' />            
        </div>
    )
}

export default Logo;