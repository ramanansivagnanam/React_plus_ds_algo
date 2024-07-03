import React from "react";
import "./App.css";

import { Link, Route, Routes, useParams } from "react-router-dom";
import Navbar from "./Navbar/Navbar";

const App = () => {
  const Home = () => {
    return <div>Home page</div>;
  };

  const About = () => {
    return <div>About page</div>;
  };

  const Carrer = () => {
    return <div>Carrer page</div>;
  };

  const ContactUS = () => {
    return <div>ContactUS page</div>;
  };

  const DynamicProfile = () => {
    console.log('DynamicProfile');
    const {name} = useParams();
    console.log({name});
    return <div>DynamicProfile : {name}</div>
  }

  return (
    <>
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/carrer" element={<Carrer />} />
        <Route path="/contact-us" element={<ContactUS />} />
        <Route path="/dynamic/:name" element={<DynamicProfile />} />
      </Routes>
    </>
  );
};

export default App;
