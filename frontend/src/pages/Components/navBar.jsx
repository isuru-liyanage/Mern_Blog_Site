
import './navBar.css'

function NavBar(){
    return(
        <>

            <div class="header-outer">
                <div class="header-inner responsive-wrapper">
                    <div class="header-logo">
                        <img src="https://i.ibb.co/Wp1ZfbS/project-management.png"/>
                        <h1>Tech Blog</h1>

                    </div>
                    <div className="buttonset">
                        <button className="login-btn">Login</button>
                        <button className="signup-btn">Signup</button>
                    </div>

                    <nav class="header-navigation">

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