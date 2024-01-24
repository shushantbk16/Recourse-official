import React from "react";
import { Title } from "./common/Title";
import { brand } from "@/assets/data/dummydata";
import styled from "styled-components";
import { images } from "@/next.config";
import { IoPlayCircleSharp } from "react-icons/io5";

const Brand = () => {
  return (
    <>
      <section className="brand">
        <div className="brand-container">
          <div className="brand-title">
            <h1 className="company-heading font-bold">
              WORKING WITH THESE COMPANIES PROUDLY
            </h1>
          </div>
        </div>
      </section>
      <div class="logos">
        <div class="logos-slide">
          <img src="../images/l1.svg" alt="hi" />
          <img src="../images/l2.svg" alt="hi" />
          <img src="../images/l3.svg" alt="hi" />
          <img src="../images/l6.svg" alt="hi" />
          <img src="../images/l5.svg" alt="hi" />
        </div>

        <div class="logos-slide">
          <img src="../images/l1.svg" alt="hi" />
          <img src="../images/l2.svg" alt="hi" />
          <img src="../images/l3.svg" alt="hi" />
          <img src="../images/l6.svg" alt="hi" />
          <img src="../images/l5.svg" alt="hi" />
        </div>
      </div>
    </>
  );
};
const Section = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 0 2rem;
  margin-bottom: 5rem;
  background-color: black;
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    flex-direction: column;
    margin-bottom: 2rem;
  }
`;
export default Brand;
