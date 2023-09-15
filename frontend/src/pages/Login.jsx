import React, { useState } from "react";
import "./Login.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

const LoginForm = () => {
    const [formData, setFormData] = useState({
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
            position: "bottom-left"
        });
    const handleSuccess = (msg) =>
        toast.success(msg, {
            position: "bottom-right"
        });

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:4000/login", formData, {
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials: true
            });

            const { data } = response;
            const { success, message, user } = data;

            if (success) {
                handleSuccess(message);
                // Save user role and ID in cookies
                Cookies.set("userId", user._id);
                Cookies.set("userRole", user.role);

                setTimeout(() => {
                    navigate("/");
                }, 1000); // Replace 1000 with the desired delay in milliseconds
            } else {
                handleError(message);
            }
        } catch (error) {
            handleError(error);
        }
    };

    return (
        <div id="loginform">
            <h2 id="headerTitle">Login</h2>
            <form onSubmit={handleSubmit}>
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
                    <button type="submit">Login</button>
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

export default LoginForm;
