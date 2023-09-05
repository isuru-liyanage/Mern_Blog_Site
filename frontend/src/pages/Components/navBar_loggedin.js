
import './navBar.css'

function NavBarLI(){
    return(
        <>

            <div class="header-outer">
                <div class="header-inner responsive-wrapper">
                    <div class="header-logo">
                        <img src="https://i.ibb.co/Wp1ZfbS/project-management.png"/>
                        <h1>Tech Blog</h1>

                    </div>

                    <nav class="header-navigation">

                        <a href="#">Home</a>
                        <a href="#">About</a>
                        <a href="#">Blog</a>
                        <a href="#">Contact Us</a>
                        <button>Menu</button>
                    </nav>

                    <button className="create-btn">Create</button>

                    <div className="profile-head">
                        <img src = 'https://allthings.how/content/images/size/w2000/wordpress/2020/11/allthings.how-how-to-change-your-picture-on-zoom-profile-picture.png'/>

                        <div className="text-prof">
                            <p className="name">Dilki Sewwandi</p>
                            <button className="logout">Logout</button>
                        </div>
                    </div>


                </div>
            </div>
        </>

    );
}
export default NavBarLI;