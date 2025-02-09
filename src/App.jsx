import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar";
import Hero from "./components/Hero";
import Education from "./components/Education";
import ComputerKnowledge from "./components/ComputerKnowledge";
import WorkExperience from "./components/WorkExperience";
import Projects from "./components/Projects";

const App = () => {
  return (
    // Command to start program: npm run dev
    <Router>
      <div className="overflow-x-hidden text-neutral-900 antialiased selection:bg-slate-300
      selection:text-slate-900">
        <div className="fixed top-0 -z-10 h-full w-full">
          <div className="absolute top-0 z-[-2] h-screen w-screen rotate-180 transform
          bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]"></div>
        </div>
        <div className="container mx-auto px-8">
          <NavBar />
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/education" element={<Education />} />
            <Route path="/computerknowledge" element={<ComputerKnowledge />} />
            <Route path="/workexperience" element={<WorkExperience />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
