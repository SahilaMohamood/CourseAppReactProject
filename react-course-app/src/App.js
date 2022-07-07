import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./component/home/home-page.component";
import AboutPage from "./component/about/about-page-component";
import HeaderPage from "./common/header-component";
import PageNotFound from "./component/pageNotFound/page-not-found.component";
import "./App.css";
import Courses from "./component/courses/course.component";

function App() {
  return (
    <div>
      <HeaderPage />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/courses" element={<Courses/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
