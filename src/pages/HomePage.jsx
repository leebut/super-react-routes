import TopNav from "../components/TopNav";

function HomePage() {
  return (
    <>
      <header>
        <TopNav />
      </header>
      <div>
        <h1 className="text-2xl">This is the home page</h1>
      </div>
    </>
  );
}

export default HomePage;
