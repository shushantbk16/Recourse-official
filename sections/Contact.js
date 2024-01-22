import { Title, TitleSm } from "@/components/common/Title";
import React from "react";
import {
  AiFillBehanceCircle,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { BsFacebook } from "react-icons/bs";
import { FiHeadphones, FiHelpCircle } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";

const Contact = () => {
  return (
    <>
      <div className="contact-form">
        <div>
          <div>
            <h1
              style={{
                fontFamily: "sans-serif",
                lineHeight: "1.5",
                fontSize: "3rem",
                fontWeight: "600",
                color: "black",
                padding: "5% 0%",
              }}
            >
              GET IN TOUCH
            </h1>
            <p style={{ color: "black", paddingBottom: "5%" }}>
              Drop us a line, and we will come up with some well-fit options for
              your project.
            </p>
          </div>
          <div style={{ display: "flex" }}>
            <div className="spacing">
              <input
                type="text"
                maxLength={15}
                required
                placeholder="Name*"
                className="input-feild"
              ></input>
            </div>
            <div className="spacing">
              <input
                type="email"
                maxLength={15}
                required
                placeholder="Email*"
                className="input-feild"
              ></input>
            </div>
          </div>
          <div>
            <div className="spacing">
              <input
                type="text"
                maxLength={15}
                required
                placeholder="Company*"
                className="input-feild"
              ></input>
            </div>
          </div>
          <div style={{ padding: "2% 2% 0%" }}>
            <textarea
              className="input-feild"
              placeholder="Tell us about your project"
              style={{ width: "100%", height: "30vh" }}
            ></textarea>
            <div></div>
            <input type="checkbox" id="consent" name="consent"></input>
            <label
              style={{
                color: "black",
                fontSize: "0.875rem",
                paddingLeft: "2%",
              }}
              htmlFor="consent"
            >
              I give my consent to process my personal data in accordance with
              the Privacy Policy.
            </label>

            <div>
              <input type="checkbox" id="updates" name="updates"></input>
              <label
                style={{
                  color: "black",
                  fontSize: "0.875rem",
                  paddingLeft: "2%",
                }}
                htmlFor="updates"
              >
                I want to receive updates about ecommerce, tech and Grinteq. I
                know I can unsubscribe at any time.
              </label>
            </div>
          </div>
          <div style={{ paddingLeft: "2%" }}>
            <button className="contact-button">Send</button>
          </div>
        </div>
        <div>
          <img
            src="../images/20822858_NA_October_25.svg"
            style={{
              width: "20rem",
              height: "20rem",
              textAlign: "center",
              marginLeft: "0%",
              marginTop: "50%",
            }}
          ></img>
        </div>
      </div>
    </>
  );
};

export default Contact;

{
  /* <section className="contact bg-top">
<div className="container">
  <div className="heading-title">
    <TitleSm title="CONTACT" /> <br />
    <br />
    <Title title="Let's start right now!" className="title-bg" />
  </div>
  <div className="content py flex1">
    <div className="left w-30">
      <div className="contact-deatils">
        <div className="box">
          <FiHeadphones size={30} className="icons" />
          <h3>+91 8088062701</h3>
          <span>Reach us 24x7 support</span>
        </div>
        <div className="box">
          <IoLocationOutline size={30} className="icons" />
          <h3>Bengaluru</h3>
          <span>
            Banashankari Stage II, Banashankari, Bengaluru, Karnataka
            560070
          </span>
        </div>
        <div className="box">
         <div>
         <FiHelpCircle size={30} className="icons" />
         </div>
         <div>
          
          <h3>bhuvankoulagi@recoursetech.com</h3>
          <span>Drop us a line anytime!</span>
          </div>
        </div>
        <div className="box">
          <BiUserCircle size={30} className="icons" />
          <h3>abhay@recoursetech.com</h3>
          <span>Career at RecourseTech</span>
        </div>
      </div>
      <ul>
        <li className="icon">
          <BsFacebook size={25} />
        </li>
        <li className="icon">
          <AiFillBehanceCircle size={25} />
        </li>
        <li className="icon">
          <AiFillInstagram size={25} />
        </li>
        <li className="icon">
          <AiFillLinkedin size={25} />
        </li>
      </ul>
    </div>
    <div className="right w-70">
      <TitleSm title="Make an online enquiry" />
      <p className="desc-p">
        Got questions? Ideas? Fill out the form below to get our
        proposal.{" "}
      </p>

      <form>
        <div className="grid-2">
          <div className="inputs">
            <span>Name</span>
            <input type="text" />
          </div>
          <div className="inputs">
            <span>Email</span>
            <input type="text" />
          </div>
        </div>
        <div className="grid-2">
          <div className="inputs">
            <span>your budget</span>
            <input type="text" />
          </div>
          <div className="inputs">
            <span>timeframe</span>
            <input type="text" />
          </div>
        </div>
        <div className="inputs">
          <span>TELL US A BIT ABOUT YOUR PROJECT*</span>
          <textarea cols="30" rows="10"></textarea>
        </div>
        <button className="button-primary">Submit</button>
      </form>
    </div>
  </div>
</div>
</section> */
}
