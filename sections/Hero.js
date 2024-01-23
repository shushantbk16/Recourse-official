import { Brand } from "@/components/router";
import React from "react";
import Choose from "@/components/Choose";
import Development from "@/components/Development";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container"></div>
      </section>
      <section className="hero-sec" style={{ paddingTop: "15%" }}>
        <div className="container">
          <div className="heading-title">
            <h2 className="cardify-title">
              A comprehensive software hub catering to all your digital
              requirements.
            </h2>
            <p style={{ padding: "2% 2%", textAlign: "justify" }}>
              Our early achievements are a testament to our passion and
              innovation. With a growing list of satisfied clients, we've
              completed 50+ projects and counting. Our dedicated team of 15+
              experts is committed to fueling your company's digital journey.
            </p>
          </div>
          <hr className="cardify-line" />
          <div>
            <div className="cardify">
              <h1 className="cardify-text">Timely Delivery</h1>
              <p style={{ color: "black", fontSize: "1rem", width: "100%" }}>
                Timely delivery of software projects Our early achievements are
                a testament to our passion and innovation. With a growing list
                of satisfied clients, we've completed 50+ projects and counting.
                Our dedicated team of 15+ experts is committed to fueling your
                company's digital journey.
              </p>
            </div>
            <hr className="cardify-line" />
            <div className="cardify">
              <h1 className="cardify-text">
                Unique Technologies and Modern Approach
              </h1>

              <p style={{ color: "black", fontSize: "1rem" }}>
                Unique technologies & modern approach Our early achievements are
                a testament to our passion and innovation. With a growing list
                of satisfied clients, we've completed 50+ projects and counting.
                Our dedicated team of 15+ experts is committed to fueling your
                company's digital journey.
              </p>
            </div>
            <hr className="cardify-line" />
            <div className="cardify">
              <h1 className="cardify-text">
                100+ successful cases in portfolio
              </h1>

              <p style={{ color: "black", fontSize: "1rem" }}>
                100+ successful cases in portfolio Our early achievements are a
                testament to our passion and innovation. With a growing list of
                satisfied clients, we've completed 50+ projects and counting.
                Our dedicated team of 15+ experts is committed to fueling your
                company's digital journey.
              </p>
            </div>
            <hr className="cardify-line" />
            <div className="cardify">
              <h1 className="cardify-text">Customer satisfaction</h1>

              <p style={{ color: "black", fontSize: "1rem" }}>
                Customer satisfaction is our top priority Our early achievements
                are a testament to our passion and innovation. With a growing
                list of satisfied clients, we've completed 50+ projects and
                counting. Our dedicated team of 15+ experts is committed to
                fueling your company's digital journey.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Choose />
      <Development />
      <Brand />
    </>
  );
};

export default Hero;
