import "./style/Home.css";
import dinesh from "./style/images/dinesh.png";
const Home = () => {
  return (
    <section id="home">
      <div className="container">
        <div className="row head-mob">
          <div
            className="col-lg-6 col-md-6  home-left"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <span className="home-hello">Hello!</span>
            <h1 className="home-text home-head-1">
              I'm{" "}
              <span className="home-name">
                Dinesh
                <br />
                Ram
              </span>{" "}
            </h1>
            <h2 className="home-text home-head-2">A Frontend Developer</h2>
            <button type="button" className="btn btn-warning btn-cv">
              Download CV
            </button>
          </div>
          <div
            className="col-lg-6 col-md-6"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <img className="home-img " src={dinesh} alt="Dinesh-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
