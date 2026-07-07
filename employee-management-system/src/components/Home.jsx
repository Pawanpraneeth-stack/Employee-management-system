import "./Home.css";

function Home() {
  return (
    <div className="home">

      <header className="hero-section">
        <h1>Employee Management System</h1>

        <p>
          Welcome to the Employee Management System. This application helps
          organizations manage employee information, departments, and records
          efficiently through a simple and user-friendly interface.
        </p>

        <button className="home-btn">
          Get Started
        </button>
      </header>

      <section className="about-section">

        <h2>About the System</h2>

        <p>
          The Employee Management System is designed to simplify employee
          administration by allowing organizations to maintain employee
          records, monitor departments, and improve workforce management.
        </p>

      </section>

    </div>
  );
}

export default Home;