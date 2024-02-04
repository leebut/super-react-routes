import { useNavigate } from "react-router-dom";
import TopNav from "../components/TopNav";

function PhpSkills() {
  const navigate = useNavigate();

  return (
    <>
      <header>
        <TopNav />
      </header>
      <section>
        <h1 className="text-2xl">🐘 PHP Skills 🐘</h1>
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

export default PhpSkills;
