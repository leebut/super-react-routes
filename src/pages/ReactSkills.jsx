import { Link, NavLink, useNavigate } from "react-router-dom";
import TopNav from "../components/TopNav";

function ReactSkills() {
  const navigate = useNavigate();

  return (
    <>
      <header>
        <TopNav />
      </header>
      <section>
        <h1 className="text-2xl">⚛️ React Skills ⚛️</h1>

        <NavLink to="react-projects">React projects</NavLink>

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

export default ReactSkills;
