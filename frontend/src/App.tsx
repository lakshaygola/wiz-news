import "./App.css";
import AppBar from "./components/AppBar";
import { RecoilRoot } from 'recoil';
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Trending from "./pages/Trending";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Profile from "./pages/Profile";



function App() {
  return (
    <>
      <RecoilRoot>
        <BrowserRouter>   
          <AppBar />
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/trending" element={<Trending />} />
              <Route path="/signup" element={<Signup/>} />
              <Route path="/signin" element={<Signin/>} />
              <Route path="/profile" element={<Profile/>} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </RecoilRoot>
    </>
  );
}

export default App;
