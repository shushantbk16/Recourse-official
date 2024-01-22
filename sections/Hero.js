import Banner from "@/components/Banner";
import Expertise from "@/components/Expertise";
import ShowCase from "@/sections/Portfolio";
import Testimonial from "@/components/Testimonial";
import { Title, TitleLogo, TitleSm } from "@/components/common/Title";
import { BlogCard, Brand } from "@/components/router";
import React from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import { TfiRulerPencil } from "react-icons/tfi";
import { VscFileSubmodule } from "react-icons/vsc";
import { BiUser } from "react-icons/bi";
import Choose from "@/components/Choose";
import Development from "@/components/Development";
import { motion } from "framer-motion";
import Services from "./Services";
import Portfolio from "@/sections/Portfolio";
import cl from "../assets/images/12067486_4891582.svg";
import ca from "../assets/images/21860000_6543416.svg";
import cb from "../assets/images/customer satisfaction.jpg";
import cd from "../assets/images/13123594_5152356.svg";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          {/* <TitleLogo title="Re.course.tech" caption="" className="logokb" />
          <h1 className="hero-title">WE BUILD DIGITAL EXPERIENCES</h1> */}

          {/* <div className="sub-heading">
            <TitleSm title="WEB DEVELOPMENT"/> <span>.</span>
            <TitleSm title="APP DEVELOPMENT"/> <span>.</span>
            <TitleSm title="UI/UX DESIGN" />
          </div> */}
        </div>
      </section>
      <section className="hero-sec" style={{ paddingTop: "15%" }}>
        <div className="container">
          <div className="heading-title">
            <h2 className="cardify-title">
              A comprehensive software hub catering to all your digital
              requirements.
            </h2>
            <p style={{ padding: "5% 0%", textAlign: "left" }}>
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
              <p style={{ color: "black", fontSize: "1rem" }}>
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
      {/* <Expertise /> */}
      <Choose />
      <Development />

      <Brand />
      {/* <Banner/> */}
      {/* <Testimonial /> */}
      {/* <ShowCase /> */}

      {/* <div className="text-center">
        <Title title="Latest news & articles" />
      </div>
      <BlogCard /> */}
    </>
  );
};

export default Hero;
