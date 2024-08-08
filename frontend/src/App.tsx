import './App.css'
import AppBar from './components/AppBar';
import { RecoilRoot } from 'recoil';
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Trending from "./pages/Trending";
import Signup from "./pages/Signup";


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
          </Routes>
          <Footer />
        </BrowserRouter>
      </RecoilRoot>
    </>
  );
}

export default App
