import { Route, Routes } from "react-router-dom";
import { Login, Signup,Home,Create} from "./pages";
import { EditBlog } from "./pages/Blogs/EditBlog"
// import Home from "./pages/Home";


import BlogElements from "./pages/Blogs/viewBlog";
import Profile from "./pages/Profile";
import CreateTicket from "./pages/CreateTicket";
<<<<<<< HEAD
import ContactUs from "./pages/CreateTicket";
=======
import SupportView from "./pages/SupportView";


>>>>>>> a30f0631f8a25b43b63583ded2328c40fe33306b

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/create" element={<Create />} />
        <Route path="/view_blog/:id" element={<BlogElements />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/CreateTicket" element={<CreateTicket />} />
        <Route path="/support" element={<SupportView/>}/>
       <Route path="/CreateTicket" element={<CreateTicket />} />
        <Route path="/editor/:blogId" element={<EditBlog />} />
      </Routes>
    </div>
  );
}

export default App;