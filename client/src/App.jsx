import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";

import Search from "./pages/Search";

import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import SignUp from "./pages/signup";
import Contact from "./pages/contact";
import About from "./pages/about";
import Restaurant from "./pages/Restarunts";
import Protection from "./pages/protection";

const App=()=>{
  return(
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="home" element={<Home/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="search" element={<Search/>}/>
          <Route path="signup" element={<SignUp/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="restarunt" element={<Protection Component={Restaurant}/>}/>
        </Route>
      </Routes>
      <Routes path="Dashboard" element={<Dashboard/>}>
          
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App;