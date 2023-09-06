import { Route, Routes } from "react-router-dom";
import { Login, Signup,Home,Create} from "./pages";
// import Home from "./pages/Home";


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

      </Routes>
    </div>
  );
}

export default App;