import React, {useEffect, useState} from "react";
import './Login.css'
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const blogs = () => (
    <blogElements />
);

const blogElements = () => {
   

    return (
        <div className="blogContainer">
            
        </div>
    );
};

const FormInput = (props) => (
    <div className="row">
        <label>{props.description}</label>
        <input
            type={props.type}
            name={props.name}
            placeholder={props.placeholder}
            value={props.value}
            onChange={(e) => props.onChange(props.name, e.target.value)}
        />
    </div>
);
export default App;
