import React from "react";
import logo_uvt from "../data/uvt_logo.png";
//component that only render the logo

const Logo = () => {
    return (
        <div>
        <img src={logo_uvt} alt="UVT_Logo" />
        </div>
    );
    }
        
export default Logo;