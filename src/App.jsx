import { Routes, Route } from "react-router-dom"
import Footer from "./component/Footer"
import NavBar from "./component/NavBar"
import Home from "/home/xmalone0920/blogApp/frontend/src/pages/Home.jsx"

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App
