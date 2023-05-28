import {  NavLink, Route, Routes } from 'react-router-dom';

import Home from "./components/Home";
import About from './components/About';
import NotFound from './components/NotFound';
import Contacts from './components/Contacts';
import Courses from './components/Courses';
import Search from './components/Search';
import List from './components/List';
 import './style/App.css'


function App() {
   

  return (
    <>
        <div>
        <nav>
          <ul>
            <li>
              <NavLink to="/" className={({isActive})=>(isActive?'active':'inactive')}>Home</NavLink>
            </li>
            <li>
              <NavLink to="About" className={({isActive})=>(isActive?'active':'inactive')}>About Page</NavLink>
            </li>
            <li>
              <NavLink to="Course" className={({isActive})=>(isActive?'active':'inactive')}>Course Page</NavLink>
            </li>
           
          </ul>
        </nav>
        </div>

    {/* Routes */}

        <div>


          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/About' element={<About/>}></Route>
            <Route path='/Course' element={<Courses/>}>

                  <Route path='search' element={<Search/>}></Route>
                  <Route path='list' element={<List/>}></Route>
            </Route>
            <Route path='/About/Contacts' element={<Contacts/>}></Route>
            <Route path='*' element={<NotFound/>}></Route>

          </Routes>
        </div>
      </>
  );
}

export default App;
