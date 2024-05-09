import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/HomePage/Home.jsx";
import LoginSignup from "./Pages/LoginPage/LoginSignup.jsx";
import ResetPassword from "./Pages/ResetPasswordPage/ResetPassword.jsx";
import AddPost from "./Pages/AddPostPage/AddPost.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<LoginSignup />}></Route>
          <Route path="/reset-password" element={<ResetPassword />}></Route>
          <Route path="/add-post" element={<AddPost />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
