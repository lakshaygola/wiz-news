import './App.css'
import AppBar from './components/AppBar';
import NewsContainer from './components/NewsConatiner';
import { RecoilRoot } from 'recoil';
import Footer from "./components/Footer";


function App() {
  return (
    <>
    <RecoilRoot>    
        <AppBar />
        <NewsContainer />
        <Footer />
    </RecoilRoot>
    </>
  );
}

export default App
