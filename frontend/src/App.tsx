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
const India = React.lazy(() => import("./pages/India"));
const UnitedStates = React.lazy(() => import("./pages/UnitedStates"));
const UnitedKindom = React.lazy(() => import("./pages/UnitedKindom"));
const Australia = React.lazy(() => import("./pages/Australia"));
const Russia = React.lazy(() => import("./pages/Russia"));
const SearchedNews = React.lazy(() => import("./pages/SearchedNews"));
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
                  <Route path="/india/top-news" element= {<India />} />
                  <Route path="/us/top-news" element= {<UnitedStates />} />
                  <Route path="/uk/top-news" element= {<UnitedKindom />} />
                  <Route path="/au/top-news" element= {<Australia />} />
                  <Route path="/rus/top-news" element= {<Russia />} />
                  <Route path="/searched/headlines" element={<SearchedNews />}></Route>
              </Routes>
            </Suspense>
          <Footer />
        </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
