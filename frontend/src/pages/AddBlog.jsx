import React, {useEffect, useState} from "react";
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import './AddBlog.css'


const AddBlog = () => {

    

    const [formData, setFormData] = useState({
        title: "",
        content: ""
    });
    const [selectedImage, setSelectedImage] = useState(null);
    const [imagePreviewUrl, setImagePreviewUrl] = useState("");

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        
        if (file) {
            setSelectedImage(file);
    
            const imageUrl = URL.createObjectURL(file);
            setImagePreviewUrl(imageUrl);
        } else {
            setSelectedImage(null);
            setImagePreviewUrl("");
        }
    };
    

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
            const response = await axios.post("http://localhost:4000/login", formData, {
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
        <div id="postingform">
            <h2 id="headerTitle">Make a Post</h2>
            <form onSubmit={handleSubmit}>
                <FormInput
                    name="title"
                    description="Title"
                    placeholder="Enter a Title"
                    type="text"
                    value={formData.title}
                    onChange={handleInputChange}
                />

                <TextArea
                    name="content"
                    description="content"
                    placeholder="Enter the content"
                    type="text"
                    value={formData.content}
                    onChange={handleInputChange}
                    className="custom-textarea"
                />

                <div className="row">
                    <label>Image</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                    />
                     {imagePreviewUrl && (
                    
                    <div className="image-preview">
                        <img src={imagePreviewUrl} alt="Preview" />
                    </div>
                    )}
                </div>
                <div id="button" className="row">
                    <button type="submit">Post</button>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};


const TextArea = (props) => (
    <div className="row">
    <label>{props.description}</label>
    <textarea
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onChange={(e) => props.onChange(props.name, e.target.value)}
        style={{ width: "300px", height: "150px", resize: "none" }} // Adjust width and height as needed
    />
</div>
);

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


export default AddBlog;
