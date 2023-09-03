import React from "react";
import "./sideBar.css";
import logo from "../../assets/logo.png";
import {IoMdSpeedometer} from 'react-icons/io'

const SideBar = () => {
    return (
        <div className="sideBar grid">
            <div className="logoDiv flex">
                <img src={logo} alt="image name" />
                <h2>Together</h2>
            </div>

            <div className="menuDiv">
                

                <ul className="menuList grid">
                    <li className="listItem">
                        <a href="#" className="menuLink flex">
                        <IoMdSpeedometer className="icon"/>
                            <span className="smallText">Dashbourd</span>
                        </a>
                    </li>

                    <li className="listItem"> 
                        <a href="#" className="menuLink flex">
                        <IoMdSpeedometer className="icon"/>
                            <span className="smallText">Dashbourd</span>
                        </a>
                    </li>
                    <li className="listItem">
                        <a href="#" className="menuLink flex">
                        <IoMdSpeedometer className="icon"/>
                            <span className="smallText">Dashbourd</span>
                        </a>
                    </li>




                </ul>
            </div>
            <div>
            
            
            </div>
            <div></div> <div></div> <div></div> <div></div> <div></div>

           
        </div>
    );
};

export default SideBar;
