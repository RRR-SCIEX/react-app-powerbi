import React from "react";
import "./top.css";
import img from "../../../assets/Rectangle 29.png";

const Top = () => {
    return (
        <div className="topSection">
            <div className="hederSection flex">
                <div className="title">
                    <h1>Welcome to Together</h1>
                    <p>Hello Ghanem , Welcome back!</p>
                </div>

                <div className="adminDiv flex">
            
                    <img className="adminImge" src={img} alt="admin imag" />
                </div>
            </div>
        </div>
    );
};

export default Top;
