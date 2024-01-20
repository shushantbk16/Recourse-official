import React from "react";
import { Title } from "./common/Title";
import { brand } from "@/assets/data/dummydata";
import styled from "styled-components";
const Banner = ({ images, speed = 5000 }) => {
  return (
    <div className="inner-banner">
      <div className="wrapper-banner">
        <section style={{ "--speed": `${speed}ms` }} className="banner-section">
          {images.map((image) => (
            <div className="image" key={image.id}>
              <img
                src={image.cover}
                alt={image.id}
                className="banner-img"
                style={{ height: "10vh", width: "100%" }}
              />
            </div>
          ))}
        </section>
        <section style={{ "--speed": `${speed}ms` }} className="banner-section">
          {images.map((image) => (
            <div className="image" key={image.id}>
              <img
                src={image.cover}
                alt={image.id}
                className="banner-img"
                style={{ height: "10vh", width: "100%" }}
              />
            </div>
          ))}
        </section>
        <section style={{ "--speed": `${speed}ms` }} className="banner-section">
          {images.map((image) => (
            <div className="image" key={image.id}>
              <img
                src={image.cover}
                alt={image.id}
                className="banner-img"
                style={{ height: "10vh", width: "100%" }}
              />
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};
const Brand = () => {
  return (
    <>
      <section className="brand">
        <div className="brand-container">
          <div className="heading-title-brand ">
            <h1 style={{ color: "black", fontSize: "30px" }}>
              WE ARE PROUD TO WORK WITH THESE COMPANIES
            </h1>
          </div>
          <Banner images={brand} speed={5000} />

          {/* <div className="infintescroll-card">
            <div
              className="brand-content  py infinitescroll"
              style={{ display: "flex", width: "100%", overflow: "hidden" }}
            >
              {brand.map((item) => (
                <div className="client" key={item.id}>
                  <img
                    src={item.cover}
                    alt={item.id}
                    width="200px"
                    height="200px"
                  />
                </div>
              ))}
              {brand.map((item) => (
                <div className="client" key={item.id}>
                  <img
                    src={item.cover}
                    alt={item.id}
                    width="200px"
                    height="200px"
                  />
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </section>
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
