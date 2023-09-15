import NavBarLI from "./Components/navBar_loggedin";
import Ticket from "./Components/Ticket";
import React, {useEffect, useState} from "react";
import {useCookies} from "react-cookie";
import BlogItem from "./Components/BlogItem";
import {useNavigate} from "react-router-dom";

function SupportView(){
    const [supportlist,setsupportlist] =useState();
    const navigate = useNavigate();
    // const [cookies, removeCookie] = useCookies(["userRole"]);
    // const userRole = cookies.userID;
    useEffect(()=>{
        const Apicall = async() =>{
            // console.log("api call")
            const res = await fetch("http://localhost:4000/support", {
                method: "GET",
                credentials: "include",
            });
            const data = await res.json()
            const {support}=data;
            setsupportlist(support);
            console.log(support);

        }
        Apicall();



    },[])


    return (
        <>
            <NavBarLI/>
            {supportlist?.map((ele,index)=>
                {
                    return <Ticket key={index} title = {ele.title} date={ele.createdAt} cnt ={ele.content} id ={ele._id} />
                }
            )}
            <center><button onClick={()=>navigate('/CreateTicket')}>Add new Ticket</button></center>

        </>
    )
}
export default SupportView