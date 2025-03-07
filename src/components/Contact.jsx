import React from "react";
import Title from "./Title";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <Title title={"Contact"} />

      <div className="flex social">
        <a href="" title="socail">
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="" title="socail">
          <i className="fa-brands fa-square-github"></i>
        </a>
        <a href="" title="socail">
          <i className="fa-brands fa-youtube"></i>
        </a>
        <a href="" title="socail">
          <i className="fa-solid fa-mobile"></i>
        </a>
      </div>
      <h3>OR</h3>

      <div className="flex-center">
        <a href="" className="email-section flex-center">
          <span>rumdali.rai757@gmail.com</span>
          <div className="email-icon flex-center">
            <i className="fa-solid fa-paper-plane"></i>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Contact;
