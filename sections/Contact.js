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
          <div style={{ marginLeft: "0em" }}>
            <h1 style={{ color: "black", marginTop: "1em" }}>GET IN TOUCH</h1>
            <p style={{ color: "black", paddingBottom: "5%" }}>
              Drop us a line, and we will come up with some well-fit options for
              your project.
            </p>
          </div>
          <div>
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
          <div>
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
                }}
                htmlFor="updates"
              >
                I want to receive updates about ecommerce, tech and Grinteq. I
                know I can unsubscribe at any time.
              </label>
            </div>
          </div>
          <div>
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
            }}
          ></img>
        </div>
      </div>
    </>
  );
};

export default Contact;
