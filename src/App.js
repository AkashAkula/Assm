import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import Profile from './components/Profile';
import SignUp from './components/SignUp';
import EditProfile from './components/EditProfile';
import Posts from './components/Posts';
import Login from './components/Login';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home isLoggedIn="true"/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/editProfile" element={<EditProfile />} />
          <Route path="/post" element={<Posts />} />
        </Routes>
    </BrowserRouter>
   
  );
}

export default App;