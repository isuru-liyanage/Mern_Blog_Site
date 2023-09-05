import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { ToastContainer, toast } from "react-toastify";

import BlogItem from "./Components/BlogItem";
import NavBar from "./Components/navBar";
import NavBarLI from "./Components/navBar_loggedin";
import './Components/navBar.css'
import Home_footer from "./Components/home_footer";


let logedin = true;
const Home = () => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        logedin=false;
        // navigate("/login");
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
            logedin=false;
            // navigate("/login");
          }
        } catch (error) {
          console.error("Error fetching data:", error);
          removeCookie("token");
          logedin=false;
          // navigate("/login");
        }
      }
    };

    verifyCookie();
  }, [cookies, navigate, removeCookie]);

  const [counter, setCounter] = useState(1); // Initialize the counter state
  const [datalist,setdatalist]= useState([]);

  const updateCounter = (value) => {
    setCounter((prevCounter) => prevCounter + value);
  };

  useEffect(()=>{
    const Apicall = async() =>{
      console.log("api call")
      const res = await fetch(`http://localhost:4000/home/${counter}`)
      const data = await res.json()
      const {blog,message}=data;
      console.log(data)
      if(message=="Blog Found"){
        setdatalist(blog);
      }




    }
    Apicall();



  },[counter])

  const Logout = () => {
    removeCookie("token");
    // navigate("/signup");
    setUsername("");
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
        <ToastContainer/>
        {logedin ? (
            <NavBarLI username={username} logout={Logout}/>
        ) : (
            <NavBar/>
        )}


        {/*<button onClick={() => navigate("/login")}>Click ME</button>*/}
        <div className="grid">
          {datalist?.map((ele,index)=>
              {
                return <BlogItem content={ele.content} photoUrl={ele.photoUrl} publisherName={ele.publisherName} title={ele.title} key ={index}/>
              }
            )}
          {/*<BlogItem/><BlogItem/><BlogItem/><BlogItem/><BlogItem/><BlogItem/>*/}
        </div>

        <Home_footer name={counter} updateCounter={updateCounter} />
        {/*<AddBlog />*/}
        {/* <BlogElements /> */}
      </>
  );
};

export default Home;
