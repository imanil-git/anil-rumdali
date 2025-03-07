import React from "react";
import simran from "../assets/simran.png";
import Title from "./Title";

const About = () => {
  return (
    <section className="about" id="about">
      <Title title={"About us"} />
      <div className="container flex about-content">
        <div className="flex-center myImg">
          <img src={simran} alt="simran.png" />
        </div>
        <div className="my-bio container">
          <h2 className="jost-personalPortfolio">Simran Shrestha</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque sunt
            nam iste, ratione officia recusandae quos et amet blanditiis ut
            repudiandae, voluptatum quo suscipit, optio impedit incidunt
            inventore adipisci nulla.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa
            error vitae illum laborum, mollitia dignissimos dolores earum
            reiciendis? Eum sapiente placeat velit magni nam inventore,
            explicabo consequuntur adipisci expedita officiis.
          </p>
          <p>Sydney, Australia</p>
          <div>
            <div className="tag">Interest</div>
            <div className="flex">
              <span>Accounting</span>
              <span>Eating</span>
              <span>Watching Series</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
