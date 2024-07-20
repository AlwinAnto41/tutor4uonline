// App.js

import React from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Home from './pages/Home'; // Import other pages/components as needed
// import FeaturesPage from './pages/features/Features';
import Courses from'./pages/course/Courses';
import Tutoring from'./components/tutoring/Tutoring_page';
import HomeCourse from './components/home_course/HomeCourse';
import ReviewPg from './components/reviewpg/ReviewPg';
import About from './pages/About/mainAbout';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route index element={<Home/>}/>
    {/* <Route path='/features' element={<FeaturesPage/>}/> */}
    <Route path='/Courses' element={<Courses/>}/>
    <Route path='/about-us' element={<About/>}/>
    <Route path='/rr' element={<ReviewPg/>}/>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
