import { useNavigate } from "react-router-dom";
import './navBar.css'

function NavBar(){
    const navigate = useNavigate();
    return(
        <>

            <div className="header-outer">
                <div className="header-inner responsive-wrapper">
                    <div className="header-logo">
                        <img src="https://i.ibb.co/Wp1ZfbS/project-management.png"/>
                        <h1>Tech Blog</h1>

                    </div>
                    <div className="buttonset">
                        <button className="login-btn" onClick={()=>navigate("/login")}>Login</button>
                        <button className="signup-btn" onClick={()=>navigate("/signup")}>Signup</button>
                    </div>

                    <nav className="header-navigation">

                        <a href="#">Home</a>
                        <a href="#">About</a>
                        <a href="#">Blog</a>
                        <a href="#">Contact Us</a>
                        <button>Menu</button>
                    </nav>

                </div>
           </div>
        </>

    );
}
export default NavBar;