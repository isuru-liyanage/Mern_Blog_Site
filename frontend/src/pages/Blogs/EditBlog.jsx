import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
// import "./EditBlog.css";

const EditBlog = () => {
  const { blogId } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    interestedFields: "",
    content: "",
    photoUrl: "",
  });

  const [imagePreviewUrl, setImagePreviewUrl] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:4000/blogs?blogId=${blogId}`)
      .then((response) => {
        const { data } = response;
        const { title, interestedFields, content, photoUrl } = data.blog;

        setFormData({
          title,
          interestedFields: interestedFields.join(", "),
          content: content.join("\n"),
          photoUrl,
        });

        setImagePreviewUrl(photoUrl);
      })
      .catch((error) => {
        handleError("Failed to fetch blog post data");
      });
  }, [blogId]);

  const handleImageChange = (e) => {
    // Implement image upload logic if needed
  };

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        `http://localhost:4000/blogs/${blogId}`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      const { data } = response;
      const { success, message } = data;

      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate(`/blog/${blogId}`);
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      handleError("Failed to update blog post");
    }
  };

  return (
    <div id="editingform">
      <h2 id="headerTitle">Edit Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <label>Title</label>
          <input
            type="text"
            name="title"
            placeholder="Enter a Title"
            value={formData.title}
            onChange={(e) => handleInputChange("title", e.target.value)}
          />
        </div>

        <div className="row">
          <label>Interested Fields</label>
          <input
            type="text"
            name="interestedFields"
            placeholder="Enter interested fields"
            value={formData.interestedFields}
            onChange={(e) =>
              handleInputChange("interestedFields", e.target.value)
            }
          />
        </div>

        <div className="row">
          <label>Content</label>
          <textarea
            name="content"
            placeholder="Enter the content"
            value={formData.content}
            onChange={(e) => handleInputChange("content", e.target.value)}
            style={{ width: "300px", height: "150px", resize: "none" }}
          />
        </div>

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
          <button type="submit">Update</button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default EditBlog;
