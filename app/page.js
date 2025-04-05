'use client'
import NavBar from "./components/NavBar";
import Headers from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia(' (prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = '';
    }
  }, [isDarkMode]);
  return (
    <>
      <NavBar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Headers isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
      <About isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
      <Services isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
      <Work isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
      <Contact isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
      <Footer isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
    </>
  );
}

