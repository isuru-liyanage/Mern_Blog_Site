import { Route, Routes } from "react-router-dom";
import { Login, Signup,Home,Create} from "./pages";
import Profile_view from "./pages/profile_view";


import BlogElements from "./pages/Blogs/viewBlog";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/create" element={<Create />} />
        <Route path="/view_blog/:id" element={<BlogElements />} />
          <Route path ="/Profile" element={<Profile_view/>}/>

      </Routes>
    </div>
  );
}

export default App;