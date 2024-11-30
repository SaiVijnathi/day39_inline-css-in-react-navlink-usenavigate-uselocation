import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import EditProfile from './components/EditProfile';
import Leaves from './components/Leaves';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import Tasks from './components/Tasks';
import PageNotFound from './components/PageNotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LogIn/>}></Route>
          <Route path='/signup' element={<SignUp/>}></Route>
          <Route path='/dashboard' element={<Dashboard/>}></Route>
          <Route path='/tasks' element={<Tasks/>}></Route>
          <Route path='/leaves' element={<Leaves/>}></Route>
          <Route path='/editprofile' element={<EditProfile/>}></Route>
          <Route path='*' element={<PageNotFound/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
