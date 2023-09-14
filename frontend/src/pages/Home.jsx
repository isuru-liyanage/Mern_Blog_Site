import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import BlogItem from "./Components/BlogItem";
import NavBar from "./Components/navBar";
import NavBarLI from "./Components/navBar_loggedin";
import './Components/navBar.css'
import Home_footer from "./Components/home_footer";
import { useCookies } from "react-cookie";

// import profileView from "./pages/Profile_View";
// import './pages/profileView.css'

let logedin = true;
let tigger=0

const Home = () => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies(["userRole"]);
  const [username, setUsername] = useState("");
  const [counter, setCounter] = useState(1);
  const [datalist,setdatalist]= useState([]);
  const[bar,setbar]=useState(<NavBar/>)

  const userRole = cookies.userRole || "user";

  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        logedin=false;
        // navigate("/login");
        setbar(<NavBar/>);
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
            setbar(<NavBarLI username={user} logout={Logout} />);
          } else {
            removeCookie("token");
            logedin=false;
            // navigate("/login");
            setbar(<NavBar/>);
          }
        } catch (error) {
          console.error("Error fetching data:", error);
          removeCookie("token");
          logedin=false;
          // navigate("/login");
          setbar(<NavBar/>);
        }
      }
    };

    verifyCookie();
  }, [cookies, navigate, removeCookie]);

  const Logout = () => {
    removeCookie("token");
    // navigate("/signup");
    // setUsername("");
    setbar(<NavBar/>)
  };

  const updateCounter = (value) => {
    setCounter((prevCounter) => prevCounter + value);
    tigger= tigger+1
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



  },[tigger])

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

        {bar}

        {/*<button onClick={() => setbar(<NavBar/>)}>Click ME</button>*/}

        <div className="layout">
          <div className="grid">
            {datalist?.map((ele,index)=>
                {
                  return <BlogItem content={ele.content} photoUrl={ele.photoUrl} publisherName={ele.publisherName} title={ele.title} key ={index} id ={ele._id}/>
                }
              )}
            {/*<BlogItem/><BlogItem/><BlogItem/><BlogItem/><BlogItem/><BlogItem/>*/}
          </div>
        </div>
      

        {userRole === "admin" ? (
        // <AdminHome />
        <div><h1>Admin Page</h1></div>
        ) : (
        <div><h1>User Page</h1></div>
        )}

        <Home_footer name={counter} updateCounter={updateCounter} />

      </>
  );
};

export default Home;
