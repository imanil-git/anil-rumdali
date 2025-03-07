import React from "react";
import anil from "../assets/anil.png";
import simran from "../assets/simran.png"

const Hero = () => {
  return (
    <>
      <section className="hero-section container" id="hero">
        <div className="grid hero">
          <div className="left flex">
            <div className="jost-personalPortfolio">
              Hi I`m <span>Simran Shrestha</span>
            </div>
            <div className="tag">Accoutant</div>
            <p>I Love Accountanting and want to play with money</p>
            <div>
              <a href={anil} download>
                <button>
                  Download CV <i className="fa-solid fa-download"></i>
                </button>
              </a>
            </div>
          </div>
          <div className="right flex">
            <img src={simran} alt="simran.png" />
          </div>
        </div>
      </section>

      {/* <!-- banner section --> */}
      <section className="flex banner container">
        <div className="flex info-content">
          <div className="flex-center icon-container">
            <i className="fa-solid fa-award"></i>
          </div>
          <div>
            <span>BBA</span>
            <p>Graduation</p>
          </div>
        </div>
        <div className="info-divider"></div>
        <div className="flex info-content">
          <div className="flex-center icon-container">
            <i className="fa-solid fa-award"></i>
          </div>
          <div>
            <span>5 + Projects</span>
            <p>Completed</p>
          </div>
        </div>
        <div className="info-divider"></div>
        <div className="flex info-content">
          <div className="flex-center icon-container">
            <i className="fa-solid fa-award"></i>
          </div>
          <div>
            <span>1+ year</span>
            <p>Experience</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
