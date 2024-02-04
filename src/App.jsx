import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import Skills from "./pages/Skills";
import ReactSkills from "./pages/ReactSkills";
import PhpSkills from "./pages/PhpSkills";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ReactProjects from "./components/ReactProjects";
import ProjectsInfo from "./components/ProjectsInfo";
import HtmlCssProjects from "./components/HtmlCssProjects";
import PhpProjects from "./components/PhpProjects";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold">Reactive Routes</h1>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="skills" element={<Skills />} />
          <Route path="react-skills" element={<ReactSkills />} />
          <Route path="php" element={<PhpSkills />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />}>
            {/* <Route index element={<ProjectsInfo />} /> */}
            <Route path="react-projects" element={<ReactProjects />} />
            <Route path="html-css-projects" element={<HtmlCssProjects />} />
            <Route path="php-projects" element={<PhpProjects />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
