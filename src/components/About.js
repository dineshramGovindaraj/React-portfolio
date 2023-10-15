import "./style/About.css";
import AboutImage from "./style/images/AboutImage.png";
const About = () => {
  return (
    <section id="about">
      <div className="container">
        <h1 className="heading" data-aos="zoom-in-up" data-aos-duration="2000">
          About Me
        </h1>
        <div className="row about-flex justify-content-around align-items-center">
          <div
            className="col-lg-6 col-sm-12"
            data-aos="flip-left"
            data-aos-duration="1000"
          >
            <img src={AboutImage} className="about-img" alt="about image" />
          </div>
          <div
            className="col-lg-6 col-sm-12"
            data-aos="flip-right"
            data-aos-duration="1000"
          >
            <h3 className="about-head">
              Passionate frontend developer with a flair for creating visually
              stunning and user-friendly web experiences through innovative
              coding and design.
            </h3>
            <table className="about-table">
              <tr>
                <td className="about-question">
                  Name <span className="table-colen">:</span>
                </td>
                <td className="about-answer">Dinesh Ram</td>
              </tr>
              <tr>
                <td className="about-question">
                  Date of birth <span className="table-colen">:</span>&nbsp
                </td>
                <td className="about-answer">October 19., 2002</td>
              </tr>
              <tr>
                <td className="about-question">
                  Degree <span className="table-colen">:</span>
                </td>
                <td className="about-answer">B.Tech</td>
              </tr>
              <tr>
                <td className="about-question">
                  Cource <span className="table-colen">:</span>
                </td>
                <td className="about-answer">Information Technology</td>
              </tr>
              <tr>
                <td className="about-question">
                  Email <span className="table-colen">:</span>
                </td>
                <td className="about-answer">dineshramgovindaraj@gmail.com</td>
              </tr>
              <tr>
                <td className="about-question">
                  Phone No <span className="table-colen">:</span>
                </td>
                <td className="about-answer">+91 63821 83872</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
