import "./style/Navbar.css";

const Navbar = () => {
  return (
    <section id="navbar">
      <div className="container">
        <nav
          className="navbar navbar-expand-lg fixed-top"
          style={{ padding: "10px 40px 10px 30px" }}
        >
          <a
            className="navbar-brand nav-brand"
            href="#"
            style={{ fontWeight: "bold" }}
          >
            Dinesh Ram
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="true"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-collapse collapse" id="navbarText">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link nav-text" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-text" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-text" href="#skills">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-text" href="#projects">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-text" href="#contacts">
                  Contacts
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
