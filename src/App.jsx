
import Home from './pages/Home';
import{BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signin from './pages/Signin';
 import Forgot from './pages/Forgot';
import CreateAccount from './pages/CreateAccount';
import FullVideo from './pages/FullVideo';
import Allitems from './pages/Allitems';
import Trending from './pages/Trending';
import ChannelPage from './pages/ChannelPage';
import Shorts from './pages/Shorts';
import VerifyRegister from './pages/VerifyRegister';
import VerifySignin from './pages/VerifySignin';
import Studio from './pages/Studio';
import Studiopage from './pages/Studiopage';
import Channels from './pages/Channels';
import Editvideo from './pages/Editvideo';
import Reset from './pages/Reset';
import Membership from './pages/Membership';
import Membershippage from './pages/Membershippage';
import "../public/assets/style.css";
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
        <Route path='/Studio' element={<Studio/>}/>
        <Route path='/Channels' element={<Channels/>}/>
      <Route path='/:channel' element={<ChannelPage/>}/>
      <Route path='/Shorts' element={<Shorts/>}/>
      <Route path="/Studiopage" element={<Studiopage/>}/>
      <Route path='/Editvideo/:id' element={<Editvideo/>}/>
      <Route path='/Reset/:token' element={<Reset/>}/> 
      <Route path='/Membership' element={<Membership/>}/> 
      <Route path='/Membershippage' element={<Membershippage/>}/>
      {/* <Route path="/Content" element={<Content/>}/>  */}
      </Routes>
      </Router>
      
       
    
    </>
  );
}

export default App
