
import './navBar.css'
import {useNavigate} from "react-router-dom";

function NavBarLI(props){
    const {username,logout}=props;
    const navigate = useNavigate();
    return(
        <>

            <div className="header-outer">
                <div className="header-inner responsive-wrapper">
                    <div className="header-logo">
                        <img src="https://i.ibb.co/Wp1ZfbS/project-management.png"/>
                        <h1>Tech Blog</h1>

                    </div>

                    <nav className="header-navigation">

                        <a href="#">Home</a>
                        <a href="#">About</a>
                        <a href="#">Blog</a>
                        <a href="#">Contact Us</a>
                        <button>Menu</button>
                    </nav>

                    <button className="create-btn" onClick={()=> navigate('/create')}>Create</button>

                    <div className="profile-head">
                        <img src = 'https://allthings.how/content/images/size/w2000/wordpress/2020/11/allthings.how-how-to-change-your-picture-on-zoom-profile-picture.png'/>

                        <div className="text-prof">
                            <p className="name">{username}</p>
                            <button className="logout" onClick={()=> logout()}>Logout</button>
                        </div>
                    </div>


                </div>
            </div>
        </>

    );
}
export default NavBarLI;