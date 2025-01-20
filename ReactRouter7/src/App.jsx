import { Routes, Route, Link, Navigate } from "react-router";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import NavBar from "./NavBar";
import College from "./College";
import Student from "./Student";
import Department from "./Department";
import CollegeDetails from "./CollegeDetails";
import PageNotFound from "./PageNotFound";
import Signup from "./Signup";
import Forgot from "./Forgot";
import UserList from "./UserList";
import UserDetails from "./UserDetails";

function App() {
  return (
    <>
      {/* <NavBar></NavBar> */}
      <Routes>
        <Route element={<NavBar></NavBar>}>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/users" element={<UserList></UserList>}></Route>
          <Route path="/users/list" element={<UserList></UserList>}></Route>
          <Route path="/users/:id/:name?" element={<UserDetails></UserDetails>}></Route>
          
          <Route path="in">
            <Route path="/in/user">
              <Route path="/in/user/about" element={<About></About>}></Route>
              <Route path="/in/user/login" element={<Login></Login>}></Route>
              <Route path="/in/user/signup" element={<Signup></Signup>}></Route>
              <Route path="/in/user/forgot" element={<Forgot></Forgot>}></Route>
            </Route>
          </Route>
        </Route>
        <Route path="/college" element={<College></College>}>
          <Route index element={<Student></Student>}></Route>
          <Route path="department" element={<Department></Department>}></Route>
          <Route
            path="detail"
            element={<CollegeDetails></CollegeDetails>}
          ></Route>
        </Route>
        {/* <Route path="/*" element={<PageNotFound></PageNotFound>}></Route> */}
        <Route path="/*" element={<Navigate to="/login"></Navigate>}></Route>
      </Routes>
    </>
  );
}

export default App;
