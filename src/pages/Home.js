import React from 'react';
import Header from '../components/Hd_Fd/Header';
import Footer from '../components/Hd_Fd/Footer';
import YoutubePage from '../components/Yt_card/YoutubePage';
import MainFeatures from'../../src/components/features/MainFeatures';
import FeaturesPage from '../../src/components/features/Features';
import EnquireNowPage from '../components/enquirenowpage/EnquireNowPage';
import { Welcome } from '../components/welcome_pg/Welcome';
import Tutoring_page from '../components/tutoring/Tutoring_page';
import HomeCourse from'../components/home_course/HomeCourse'
import "./home.css"
import ReviewPg from '../components/reviewpg/ReviewPg';
const Home = () => {
  return (
    <div id='bodyyy'>
      <Header />
      <Welcome />
      <Tutoring_page/>
      <HomeCourse/>
      <YoutubePage />
      <MainFeatures />
      <FeaturesPage />
      <ReviewPg/>
      <EnquireNowPage />
      <Footer />
    </div>
  );
}

export default Home;
