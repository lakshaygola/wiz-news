import './App.css'
import AppBar from './components/AppBar';
import { RecoilRoot } from 'recoil';
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Trending from "./components/Trending"


function App() {
  return (
    <>
      <RecoilRoot>
        <BrowserRouter>   
          <AppBar />
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/trending" element={<Trending />}>
          </Routes>
          <Footer />
        </BrowserRouter>
      </RecoilRoot>
    </>
  );
}

export default App
