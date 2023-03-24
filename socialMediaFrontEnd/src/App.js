import Homepage from './pages/Homepage';
import Login from './pages/login/Login';
import Profile from './pages/profile/Profile';
import Register from './pages/register/Register';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

function App() {
  const user = useSelector((state)=>state.userReducer.payload)
  return (
    <Routes>
      <Route path='/' element={user ?<Homepage />: <Login />} />
      <Route path='/profile/:username' element={<Profile />} />
      <Route path='/login' element={user ? <Homepage /> : <Login />} />
      <Route path='/register' element={user ? <Homepage /> : <Register />} />
    </Routes>
  );
}

export default App;
