import React, { useState } from "react";
import './Login.css'

const App = () => (
    <LoginForm />
);

const LoginForm = () => {
    // State to manage form data
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });

    // Function to handle form input changes
    const handleInputChange = (name, value) => {
        setFormData({
            ...formData,
            [name]: value
        });
    };

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

            if (response.ok) {
                console.log("Form submitted successfully!");
            } else {
                console.error("Form submission failed");
            }
        } catch (error) {
            console.error("Network error:", error);
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
