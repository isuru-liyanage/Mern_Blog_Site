import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { ToastContainer, toast } from "react-toastify";
import AddBlog from "./AddBlog"
import BlogElements from './viewBlog'

const Home = () => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        navigate("/login");
      } else {
        try {
          const response = await fetch("http://localhost:4000", {
            method: "POST",
            credentials: "include",
          });

          if (!response.ok) {
            throw new Error("Network response was not ok");
          }

          const data = await response.json();
          const { status, user } = data;

          if (status) {
            setUsername(user);
            toast(`Hello ${user}`, {
              position: "top-right",
            });
          } else {
            removeCookie("token");
            navigate("/login");
          }
        } catch (error) {
          console.error("Error fetching data:", error);
          removeCookie("token");
          navigate("/login");
        }
      }
    };

    verifyCookie();
  }, [cookies, navigate, removeCookie]);

  const Logout = () => {
    removeCookie("token");
    navigate("/signup");
  };

  return (
      <>
        {/* <div className="home_page">
          <h4>
            {" "}
            Welcome <span>{username}</span>
          </h4>
          <button onClick={Logout}>LOGOUT</button>
        </div> */}
        <ToastContainer />
        <AddBlog />
        {/* <BlogElements /> */}
      </>
  );
};

export default Home;
