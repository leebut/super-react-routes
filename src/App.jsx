import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import Skills from "./pages/Skills";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold">Reactive Routes</h1>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path={"skills"} element={<Skills />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
