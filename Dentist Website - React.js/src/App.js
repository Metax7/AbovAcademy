import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./pages/layouts/header";
import Footer from "./pages/layouts/footer";
import Home from "./pages/home";
import About from "./pages/about";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NewsPage from "./pages/components/newsPage";
import ScrollToTop from "./scrollToTop";

function App() {
  return (
    <>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/news-page/:href/:category" element={<NewsPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
