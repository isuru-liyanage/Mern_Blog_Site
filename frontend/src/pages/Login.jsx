import React, { useState } from "react";
import './Login.css'

const App = props => (
    <LoginForm />
);

class LoginForm extends React.Component{
    render(){
        return(
            <div id="loginform">
                <h2 id="headerTitle">Login</h2>
                <Form />
            </div>
        )
    }
}

const Form = props => (
    <div>
        <FormInput description="Email" placeholder="Enter the Email" type="text" />
        <FormInput description="Password" placeholder="Enter the password" type="password"/>

        <div id="button" class="row">
            <button>Login</button>
        </div>
    </div>
);


const FormInput = props => (
    <div class="row">
        <label>{props.description}</label>
        <input type={props.type} placeholder={props.placeholder}/>
    </div>
);

export default App