import React, {useEffect, useState} from "react";
import './Login.css'
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";

const App = () => (
    <LoginForm />
);

const LoginForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleInputChange = (name, value) => {
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleError = (err) =>
        toast.error(err, {
            position: "bottom-left",
        });
    const handleSuccess = (msg) =>
        toast.success(msg, {
            position: "bottom-right",
        });

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:4000/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();
            const { success, message } = data;

            if (success) {
                handleSuccess(message);
                setTimeout(() => {
                    navigate("/");
                }, 1000);
            } else {
                handleError(message);
            }
        } catch (error) {
            handleError(error);
        }
    };

    return (
        <div id="loginform">
            <h2 id="headerTitle">Signup</h2>
            <form onSubmit={handleSubmit}>
                <FormInput
                    name="name"
                    description="Name"
                    placeholder="Enter the Name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                />
                <FormInput
                    name="email"
                    description="Email"
                    placeholder="Enter the Email"
                    type="text"
                    value={formData.email}
                    onChange={handleInputChange}
                />
                <FormInput
                    name="password"
                    description="Password"
                    placeholder="Enter the password"
                    type="password"
                    value={formData.password}
                    onChange={handleInputChange}
                />

                <div id="button" className="row">
                    <button type="submit">Sign Up</button>
                </div>
            </form>
            <ToastContainer />
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
