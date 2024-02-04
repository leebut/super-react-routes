import { Link } from "react-router-dom";
import TopNav from "../components/TopNav";

function Skills() {
  return (
    <>
      <header>
        <TopNav />
      </header>
      <section>
        <h1 className="text-2xl">This is the Skills page.</h1>
        <ul className="list-none">
          <li>
            <Link to="/react-skills">React ⚛️</Link>
          </li>
          <li>
            <Link to="/php">PHP 🐘</Link>
          </li>
        </ul>
      </section>
    </>
  );
}

export default Skills;
