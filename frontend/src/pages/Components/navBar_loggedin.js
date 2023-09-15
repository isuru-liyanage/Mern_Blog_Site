
import './navBar.css'
import {useNavigate} from "react-router-dom";
import {useCookies} from "react-cookie";

function NavBarLI(props){
    const {username,logout}=props;
    const navigate = useNavigate();
    const [cookies, removeCookie] = useCookies(["userRole"]);

    function handleLogout(){
        removeCookie("token");
        navigate('/');
        logout();
    }


    return(
        <>

            <div className="header-outer">
                <div className="header-inner responsive-wrapper">
                    <div className="header-logo">
                        <img src="https://i.ibb.co/Wp1ZfbS/project-management.png"/>
                        <h1>Tech Blog</h1>

                    </div>

                    <nav className="header-navigation">

                        <a onClick={()=>navigate('/')}>Home</a>
                        <a onClick={()=>navigate('/support')}>Support</a>
                        {/*<a onClick={()=> navigate('')}>Blog</a>*/}
                        <a onClick={()=>navigate('')}>Contact Us</a>
                        <button>Menu</button>
                    </nav>

                    <button className="create-btn" onClick={()=> navigate('/create')}>Create</button>

                    <div className="profile-head"  onClick={() => navigate('Profile') }>
                        <img src = 'https://allthings.how/content/images/size/w2000/wordpress/2020/11/allthings.how-how-to-change-your-picture-on-zoom-profile-picture.png'/>

                        <div className="text-prof">
                            <p className="name"  onClick={() => navigate('Profile') }>{username}</p>
                            <button className="logout" onClick={()=> handleLogout()}>Logout</button>
                        </div>
                    </div>


                </div>
            </div>
        </>

    );
}
export default NavBarLI;