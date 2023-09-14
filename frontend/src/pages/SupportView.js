import NavBarLI from "./Components/navBar_loggedin";
import Ticket from "./Components/Ticket";
import {useEffect} from "react";

function SupportView(){

    useEffect(()=>{
        const Apicall = async() =>{
            // console.log("api call")
            const res = await fetch(`http://localhost:4000/home/${counter}`)
            const data = await res.json()
            // const {blog,message}=data;
            console.log(data);

        }
        Apicall();



    },[tigger])

    return (
        <>
            <NavBarLI/>
            <Ticket/>
        </>
    )
}
export default SupportView