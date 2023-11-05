import { Routes, Route } from "react-router-dom"
import Home from "/home/xmalone0920/blogApp/frontend/src/pages/Home.jsx"
import Register from "./pages/Register"
import Login from "./pages/Login"
import PostDetails from "./pages/PostDetails";
import CreatePost from "./pages/CreatePost";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/write" element={<CreatePost />} />
        <Route exact path="/posts/post/:id" element={<PostDetails/>} />
      </Routes>
    </div>
  );
}

export default App
