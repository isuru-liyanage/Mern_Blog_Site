import { Route, Routes } from "react-router-dom";
import { Login, Signup,Home} from "./pages";
// import Home from "./pages/Home";

import viewBlog from "./pages/Blogs/viewBlog";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;