import React, {useEffect, useState} from "react";
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import './viewBlog.css';
import CommentsList from "./showComments";

const AddComment = () => {

    const [formData, setFormData] = useState({
        content: "",
      });

    const handleInputChange = (name, value) => {
        setFormData((prevData) => ({
          ...prevData,
          [name]: Array.isArray(prevData[name]) ? [value] : value
        }));
      };
      

    const handleError = (err) =>{
        toast.error(err, {
            position: "bottom-left",
        })

        setFormData((prevData) => ({
            ...prevData,
            content: ""
        }));
    }
        
        
    
    const handleSuccess = (msg) => {
        toast.success(msg, {
            position: "bottom-right",
        });
    
        // Clear the comment text area by resetting the formData state
        setFormData((prevData) => ({
            ...prevData,
            content: ""
        }));
    };
        

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();


    try {
        const response = await axios.post("http://localhost:4000/comment/create/64f25424e592c53f9051e6c8", formData, {
            headers: {
                "Content-Type": "application/json"
            },
            withCredentials: true
        });

        const { data } = response;
        console.log(response);
        const { success, message } = data;

        if (success) {
            handleSuccess(message);
        } else {
            handleError(message);
        }
    } catch (error) {
        handleError(error);
    }
    };

    return (
        <div id="postingform">
            <form onSubmit={handleSubmit}>

                <div className="grid-container">
                <div className="grid-item">
                    <TextArea
                        name="content"
                        description="Content"
                        placeholder="Enter the content"
                        value= {formData.content}
                        onChange={handleInputChange}
                        className="custom-textarea"
                    />
                </div>
                <div className="grid-item">
                <div id="button" className="btn-comment">
                    <button type="submit">Send</button>
                </div>
                </div>
                </div>
            </form>
            <ToastContainer />
            <CommentsList />
        </div>
    );
};


const TextArea = (props) => (
    <div className="row">
    
        <div className="commentSection">
            <textarea
            name={props.name}
            placeholder={props.placeholder}
            value={props.value}
            onChange={(e) => props.onChange(props.name, e.target.value)}

            />
        </div>
    </div>
  );
  
  const FormInput = (props) => (
    <div className="row">
      <label>{props.description}</label>
      <input
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        value={Array.isArray(props.value) ? props.value.join(', ') : props.value}
        onChange={(e) => props.onChange(props.name, e.target.value)}
      />
    </div>
  );
  
export default AddComment;
