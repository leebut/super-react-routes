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
        <Link to="/react-skills">React ⚛️</Link>
      </section>
    </>
  );
}

export default Skills;
