import { Route, Routes } from "react-router-dom";
import { Login, Signup,Home,Create} from "./pages";
import { EditBlog } from "./pages/Blogs/EditBlog"
// import Home from "./pages/Home";


import BlogElements from "./pages/Blogs/viewBlog";
import Profile from "./pages/Profile";
import CreateTicket from "./pages/CreateTicket";
import SupportView from "./pages/SupportView";
import AdminNavigationBar from "./pages/Admin/Admin"
import BlogManage from "./pages/Admin/BlogManage"
import SupportManage from "./pages/Admin/SupportManage"
import UserManage from "./pages/Admin/UserManage"


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
        <Route path="/admin" element={<AdminNavigationBar />} />
        <Route path="/blogmanage" element={<BlogManage/>} />
        <Route path="/supportmanage" element={<SupportManage/>} />
        <Route path="/usermanage" element={<UserManage/>} />
      </Routes>
    </div>
  );
}

export default App;