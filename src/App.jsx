// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './features/aboutMe/About';
import Home from './features/home/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Projects from './features/projects/Projects';
import ContactUs from './features/contactUs/ContactUs';
import Project_Details from './features/projects/Componets/Project_Details';
import ScrollToTopButton from './features/Scroll_btn/ScrollToTopButton';

function App() {
  return (
    <>
      <Header />
      <ScrollToTopButton/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about-me" element={<About/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/projects/:category" element={<Projects/>} />
        <Route path="/project/:id" element={<Project_Details/>} />
        <Route path="/contactUs" element={<ContactUs/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;