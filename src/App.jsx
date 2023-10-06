
import Home from './components/header/pages/Home';
import{BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signin from './components/header/pages/Signin';
import Forgot from './components/header/pages/Forgot';
import CreateAccount from './components/header/pages/CreateAccount';
import FullVideo from './components/header/pages/FullVideo';
import Allitems from './components/header/pages/Allitems';
import Trending from './components/header/pages/Trending';
import ChannelPage from './components/header/pages/ChannelPage';
import Shorts from './components/header/pages/Shorts';
import VerifyRegister from './components/header/pages/VerifyRegister';
import VerifySignin from './components/header/pages/VerifySignin';

function App() {
return (
    <>
    
      <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/Trending' element={<Trending/>}/>
        <Route path='/Signin' element={<Signin/>}/>
        <Route path='/FullVideo/:id' element={<FullVideo/>}/>
        <Route path='/Forgot' element={<Forgot/>}/>
        <Route path='/CreateAccount' element={<CreateAccount/>}/>
        <Route path='/verifyRegister' element={<VerifyRegister/>}/>
        <Route path='/verifySignin' element={<VerifySignin/>}/>
        <Route path='/Allitems' element={<Allitems/>}/>
      <Route path='/c/:channel' element={<ChannelPage/>}/>
      <Route path='/Shorts' elements={<Shorts/>}/>
      </Routes>
      </Router>
      
       
    
    </>
  );
}

export default App
