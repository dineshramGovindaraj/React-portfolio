import "./style/Skills.css";
import Html from "./style/images/Html.png";
import Css from "./style/images/Css.png";
import Js from "./style/images/Js.png";
import React from "./style/images/Reactjs.png";
import Node from "./style/images/Nodejs.png";
import Bootstrap from "./style/images/Bootstrap.png";
const Skills = () => {
  return (
    <section id="skills">
      <div className="container">
        <h1 className="heading" data-aos="zoom-in-up" data-aos-duration="2000">
          Skills
        </h1>
        <div className="row skills-card row-cols-md-5 text-center">
          <div
            className="col-lg-4"
            data-aos="zoom-in-right"
            data-aos-duration="1000"
          >
            <div className="card card-bg mb-4 rounded-3 border-0">
              <div className="card-body  ">
                <img className="img-card " src={Html} alt="html" />
                <ul className="list-unstyled mt-3 mb-4">
                  <li className="card-text"> HTML</li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4"
            data-aos="zoom-in-down"
            data-aos-duration="1000"
          >
            <div className="card card-bg mb-4 rounded-3 border-0">
              <div className="card-body">
                <img className="img-card " src={Css} alt="css" />
                <ul className="list-unstyled mt-3 mb-4">
                  <li className="card-text"> CSS</li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4"
            data-aos="zoom-in-left"
            data-aos-duration="1000"
          >
            <div className="card card-bg mb-4 rounded-3 border-0">
              <div className="card-body">
                <img className="img-card " src={Js} alt="css" />
                <ul className="list-unstyled mt-3 mb-4">
                  <li className="card-text">Javascript</li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4"
            data-aos="zoom-in-right"
            data-aos-duration="1000"
          >
            <div className="card card-bg mb-4 rounded-3 border-0">
              <div className="card-body">
                <img className="img-card " src={Bootstrap} alt="bs" />
                <ul className="list-unstyled mt-3 mb-4">
                  <li className="card-text"> Bootstrap</li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4"
            data-aos="zoom-in-down"
            data-aos-duration="1000"
          >
            <div className="card card-bg mb-4 rounded-3 border-0">
              <div className="card-body">
                <img className="img-card " src={React} alt="react" />
                <ul className="list-unstyled mt-3 mb-4">
                  <li className="card-text"> ReactJs</li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4"
            data-aos="zoom-in-left"
            data-aos-duration="1000"
          >
            <div className="card card-bg mb-4 rounded-3 border-0">
              <div className="card-body">
                <img className="img-card " src={Node} alt="node" />
                <ul className="list-unstyled mt-3 mb-4">
                  <li className="card-text"> NodeJs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
