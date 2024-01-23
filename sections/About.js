import { Title } from "@/components/common/Title";
import Image from "next/image";
import React from "react";
import profile from "../assets/images/company-profile.png";

const About = () => {
  return (
    <div className="about-container">
      <div className="heading-title">
        <br />
        <div>
          <Title title="ABOUT-US" className="title-bg" />
          <div className="about-us">
            <Image src={profile} alt="choose" width={530} height={530} />
            <p className="about-us-text" style={{ color: "black" }}>
              Welcome to Recourse-Tech, where innovation meets expertise.
              Established in 2019, we pride ourselves on being a dynamic force
              in the technology landscape, dedicated to delivering cutting-edge
              solutions tailored to meet the evolving needs of our clients.
              <br />
              <br />
              At Recourse-Tech, we believe in the transformative power of
              technology. Our journey began with a vision to empower businesses
              with robust software solutions, and over the years, we've grown
              into a versatile team of professionals committed to driving
              success through innovation.
              <br />
              <br />
              What sets us apart is our commitment to client-centric solutions.
              We understand that every project is unique, and our approach
              reflects this. From mobile and web app development to cloud
              computing, Al/ML, and beyond, we leverage our technical prowess to
              craft solutions that not only meet but exceed expectations.
              <br />
              <br />
              At Recourse-Tech, we are more than just a technology company; we
              are your strategic partner on the journey to digital excellence.
              Join us as we continue to innovate, collaborate, and redefine the
              possibilities of technology.
            </p>
          </div>
        </div>

        <div className="vision">
          <Title title="OUR VISION" className="title-bg" />
          <hr></hr>
          <div className="vision-container">
            <div>
              <img
                src="../images/29121309_4907.jpg"
                height={300}
                width={350}
              ></img>
            </div>
            <div>
              <div className="vision-text">
                <p>
                  Our vision at Recourse-Tech si ot eb aglobal catalyst for
                  digital 0 1 transformation. We aspire ot lead businesses into
                  a future where technology not only meets their needs but also
                  becomes a driving force for positive change. Through our
                  solutions, we envision a world where businesses seamlessly
                  integrate technology into their core operations, unlocking new
                  possibilities and efficiencies.
                </p>
                <p>
                  We envision alandscape where businesses harness the ful
                  potential of technology ot achieve unprecedented synergy. Our
                  vision si ot be the bridge that connects businesses with
                  transformative solutions, creating aharmonious integration of
                  technology and operations. We believe in fostering a
                  technological ecosystem that empowers businesses of al sizes
                  to thrive.
                </p>
                <p>
                  Recourse-Tech envisions setting industry standards for
                  technological excellence. We aim to be recognized not only for
                  our innovative solutions but also for our unwavering
                  commitment to quality and client satisfaction. By consistently
                  raising the bar, we aspire to be a trailblazer in the tech
                  industry, inspiring others to strive for excellence in every
                  aspect of their digital endeavors.
                </p>
              </div>
            </div>
          </div>
        </div>

        <Title
          title="OUR MISSION"
          className="title-bg"
          style={{ marginTop: "2em" }}
        />
        <hr></hr>
        <div className="mission-container">
          <div>
            <div className="vision-text">
              <p>
                Innovation Empowered by Collaboration: At Recourse-Tech, our
                mission si to pioneer innovative solutions that empower
                businesses. We strive to foster a collaborative environment
                where creativity flourishes, ensuring that our clients benefit
                from cuting-edge technologies that drive growth and success.
              </p>

              <p>
                We are committed to delivering excellence with a client-first
                approach. Our mission is to understand the unique challenges of
                each partner, providing tailored solutions that not only meet
                but exceed expectations. Through unwavering dedication, we aim
                to be the trusted technology partner that propels our clients
                toward their goals.
              </p>

              <p>
                Embracing the dynamic nature of the tech landscape, our mission
                is to be at the forefront of technological 03 leadership. We
                strive to offer agile solutions that adapt to the evolving needs
                of businesses. By staying ahead of the curve, we empower our
                clients with the tools and strategies necessary to thrive in a
                rapidly changing digital world.
              </p>
            </div>
          </div>
          <div>
            <img
              src="../images/misson.png"
              style={{
                width: "22rem",
                height: "20rem",
              }}
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
