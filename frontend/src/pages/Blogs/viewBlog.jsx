import React from "react";
import logo from '../Components/Uploads/image1.png';
import './viewBlog.css';

const blogData = [
  {
    "user": "Sineth Dhananjaya",
    "imageName": "image1.png",
    "title": "Contrary to popular belief, Lorem Ipsum",
    "content": [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod justo et lectus dignissim convallis. Proin gravida velit vitae bibendum vestibulum.",
      "Duis tincidunt tristique libero, ac malesuada urna hendrerit in. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In hac habitasse platea dictumst.",
      "Nulla facilisi. Pellentesque vitae velit a ipsum condimentum dignissim. Sed vel augue ut augue volutpat malesuada. Fusce ac dolor eu tellus tincidunt consectetur.",
      "Vivamus a odio in odio posuere ultricies. Quisque fringilla orci nec metus venenatis bibendum. Praesent et velit id nunc convallis cursus.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod justo et lectus dignissim convallis. Proin gravida velit vitae bibendum vestibulum.",
      "Duis tincidunt tristique libero, ac malesuada urna hendrerit in. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In hac habitasse platea dictumst.",
      "Nulla facilisi. Pellentesque vitae velit a ipsum condimentum dignissim. Sed vel augue ut augue volutpat malesuada. Fusce ac dolor eu tellus tincidunt consectetur.",
      "Vivamus a odio in odio posuere ultricies. Quisque fringilla orci nec metus venenatis bibendum. Praesent et velit id nunc convallis cursus.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod justo et lectus dignissim convallis. Proin gravida velit vitae bibendum vestibulum.",
      "Duis tincidunt tristique libero, ac malesuada urna hendrerit in. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In hac habitasse platea dictumst.",
      "Nulla facilisi. Pellentesque vitae velit a ipsum condimentum dignissim. Sed vel augue ut augue volutpat malesuada. Fusce ac dolor eu tellus tincidunt consectetur.",
      "Vivamus a odio in odio posuere ultricies. Quisque fringilla orci nec metus venenatis bibendum. Praesent et velit id nunc convallis cursus.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod justo et lectus dignissim convallis. Proin gravida velit vitae bibendum vestibulum.",
      "Duis tincidunt tristique libero, ac malesuada urna hendrerit in. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In hac habitasse platea dictumst.",
      "Nulla facilisi. Pellentesque vitae velit a ipsum condimentum dignissim. Sed vel augue ut augue volutpat malesuada. Fusce ac dolor eu tellus tincidunt consectetur.",
      "Vivamus a odio in odio posuere ultricies. Quisque fringilla orci nec metus venenatis bibendum. Praesent et velit id nunc convallis cursus.",

    ]
  }
];

const BlogElements = () => {
  const blogItems = blogData.map((blog, index) => (

    <div key={index} className="blogContainer" style={{margin:'auto'}}>
      <div className="centered-content">
        <h2 className="blogTitle">{blog.title}</h2>
      </div>

      <div className="right-align">
        <p className="userName">Written by : {blog.user}</p>
      </div>

      <div className="centered-content">
        <img className="postImage" src={logo} alt={blog.imageName} />
      </div>

      <div className="blogContent">
        {blog.content.map((paragraph, paragraphIndex) => (
          <p key={paragraphIndex} className="blogText">{paragraph}</p>
        ))}

      </div>
    </div>
  ));

  return (
    <div>
      {blogItems}
    </div>
  );
};

export default BlogElements;
