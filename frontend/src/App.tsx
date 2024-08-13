import React from "react";
import "./App.css";
import AppBar from "./components/AppBar";
import { RecoilRoot } from 'recoil';
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
const Business = React.lazy(() => import("./pages/Business"));
const Signup = React.lazy(() => import("./pages/Signup"));
const Signin = React.lazy(() => import("./pages/Signin"));
const Profile = React.lazy(() => import("./pages/Profile"));
const Politics = React.lazy(() => import("./pages/Politics"));
const Science = React.lazy(() => import("./pages/Science"));
const Sports = React.lazy(() => import("./pages/Sports"));
import { Suspense } from "react";
import { Loader } from "./components/Loader";



function App() {
  return (
    <RecoilRoot>
        <BrowserRouter>   
          <AppBar />
            <Suspense fallback={<Loader />}>
              <Routes>
                  <Route path="/" element={<Home/>} />
                  <Route path="/business" element={<Business />} />
                  <Route path="/signup" element={<Signup/>} />
                  <Route path="/signin" element={<Signin/>} />
                  <Route path="/profile" element={<Profile/>} />
                  <Route path="/politics" element={<Politics/>} />
                  <Route path="/sports" element={<Sports/>} />
                  <Route path="/science" element={<Science/>} />
              </Routes>
            </Suspense>
          <Footer />
        </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
