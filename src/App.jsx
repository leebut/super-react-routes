import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import Skills from "./pages/Skills";
import ReactSkills from "./pages/ReactSkills";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold">Reactive Routes</h1>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="skills" element={<Skills />} />
          <Route path="react-skills" element={<ReactSkills />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
