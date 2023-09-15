import React, {useEffect, useState} from "react";
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import './AddBlog.css'

const AddBlog = () => {

    const [formData, setFormData] = useState({
        title: "",
        interestedFields: [],
        content: [],
        photoUrl: ""
      });
      
    const [selectedImage, setSelectedImage] = useState(null);
    const [imagePreviewUrl, setImagePreviewUrl] = useState("");

    const handleImageChange = (e) => {
        const file = e.target.files[0];
    
        if (file) {
          setSelectedImage(file);
    
          const reader = new FileReader();
          reader.onloadend = () => {
            setImagePreviewUrl(reader.result);
          };
          reader.readAsDataURL(file);
    
          const formData = new FormData();
          formData.append("image", file);
    
          axios.post("http://localhost:4000/upload", formData, {
            headers: {
              "Content-Type": "multipart/form-data"
            },
            withCredentials: true
          })
          .then((response) => {
            const { data } = response;
            console.log("Image uploaded:", data.imageUrl);
    
            setFormData(prevData => ({
              ...prevData,
              photoUrl: data.imageUrl
            }));
            
          })
          .catch((error) => {
            handleError("Image upload failed");
          });
        } else {
          setSelectedImage(null);
          setImagePreviewUrl("");
        }
      };

      const handleInputChange = (name, value) => {
        setFormData((prevData) => ({
          ...prevData,
          [name]: value
        }));
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
            const response = await axios.post("http://localhost:4000/blogs/create", formData, {
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
              handleError(message || "An error occurred");
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

                <FormInput
                    name="interestedFields"
                    description="Interested Fields"
                    placeholder="Enter interested fields"
                    type="text"
                    value={Array.isArray(formData.interestedFields) ? formData.interestedFields.join(', ') : formData.interestedFields}
                    onChange={handleInputChange}
                />

                <TextArea
                    name="content"
                    description="Content"
                    placeholder="Enter the content"
                    value={Array.isArray(formData.content) ? formData.content.join('\n') : formData.content}
                    onChange={handleInputChange}
                    className="custom-textarea"
                />

                <div className="row">
                <label>Image</label>

                <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                key={imagePreviewUrl}
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
        value={Array.isArray(props.value) ? props.value.join('\n') : props.value}
        onChange={(e) => props.onChange(props.name, e.target.value)}
        style={{ width: "300px", height: "150px", resize: "none" }}
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
        value={Array.isArray(props.value) ? props.value.join(', ') : props.value}
        onChange={(e) => props.onChange(props.name, e.target.value)}
      />
    </div>
  );
  
export default AddBlog;
