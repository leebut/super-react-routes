import { NavLink, Outlet, useNavigate } from "react-router-dom";
import TopNav from "../components/TopNav";

function Projects() {
  const navigate = useNavigate();

  return (
    <>
      <header>
        <TopNav />
      </header>
      <section>
        <h1 className="text-2xl">🖥️ Projects 🖥️</h1>
        <ul className="mb-3">
          <li>
            <NavLink to="react-projects">⚛️ React projects</NavLink>
          </li>
          <li>
            <NavLink to="html-css-projects">HTML & CSS Projects</NavLink>
          </li>
          <li>
            <NavLink to="php-projects">🐘 PHP Projects</NavLink>
          </li>
        </ul>
        <Outlet />

        <button
          onClick={(e) => {
            e.preventDefault();
            navigate(-1);
          }}
        >
          ⬅️
        </button>
      </section>
    </>
  );
}

export default Projects;
