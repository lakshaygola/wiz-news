import './App.css'
import AppBar from './components/AppBar';
import NewsContainer from './components/NewsConatiner';
import { RecoilRoot } from 'recoil';


function App() {
  return (
    <>
    <RecoilRoot>    
        <AppBar />
        <NewsContainer />
    </RecoilRoot>
    </>
  );
}

export default App
