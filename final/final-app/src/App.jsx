import { useState } from "react";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Cats from "./components/cats/Cats";
import Register from "./components/register/Register";
import CatFacts from "./components/catfacts/CatFacts";

import "./App.css";

function App() {
  const [page, setPage] = useState("Home");

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <>
      <Header pageChange={handlePageChange} />
        {page === "Home" && <Home pageChange={handlePageChange} />}
        {page === "About" && <About />}
        {page === "Cats" && <Cats />}
        {page === "Register" && <Register />}
        {page === "Cat Facts" && <CatFacts />}
      <Footer />
    </>
  );
}

export default App;
