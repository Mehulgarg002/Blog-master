import { Route, Routes, Navigate } from "react-router-dom";
import Signup from "./components/Singup";
import Login from "./components/Login";
import Home from "./components/Main/Navcomponent/Home";
import CreatePost from "./components/Main/Navcomponent/CreatePost";
import UserProfile from "./components/Main/Navcomponent/UserProfile";
import Viewpost from "./components/Main/Navcomponent/viewpost/Viewpost.js";
function App() {
  const user = localStorage.getItem("token");

  return (
    <>
      <Routes>
        {user && <Route path="/" exact element={<Home />} />}{" "}
        <Route path="/signup" exact element={<Signup />} />{" "}
        <Route path="/login" exact element={<Login />} />{" "}
        <Route path="/" element={<Navigate replace to="/login" />} />{" "}
        <Route path={'/home'} exact element={<Home />} />
        <Route path='/createpost' exact element={<CreatePost />} />
        <Route path='/userprofile' exact element={<UserProfile />} />
        <Route path='/viewpost/:id' exact element={<Viewpost />} />
      </Routes>
    </>
  );
}

export default App;
