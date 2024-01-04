import React from "react";
import styled from "styled-components";
import cl from "../public/images/output.png";
import Image from "next/image";
export default function Choose() {
  return (
    <div className="choose">
      <div className="image">
        <Image src={cl} alt="choose" width="500px" height="100px"/>
      </div>
      <div className="content">
        <h2 style={{color:"black",fontSize:"2rem"}}>Turning Visions into Success: Mastering Excellence at Recoursetch</h2>
        <p>
        Welcome to Recoursetch, where precision meets innovation. Our portfolio stands as a testament to our commitment to transforming concepts into tangible achievements. With a focus on strategic thinking and meticulous execution, we excel in navigating challenges and delivering solutions that redefine industry standards. Explore our curated collection of successful projects and discover how Recoursetch can elevate your business objectives. Contact us  to embark on a journey of corporate excellence.
        </p>
        {/* <Button text="Read More" blue /> */}
        <a>Visit our portfolio</a>
      </div>
    </div>
  );
}

// const Section = styled.section`
//   display: flex;
//   justify-content: center;
//   align-content: center;
//   margin: 0 9rem;
//   gap: 3rem;
//   margin-bottom: 5rem;
//   .image {
//   }
//   .content {
//     display: flex;
//     justify-content: center;
//     flex-direction: column;
//     gap: 3rem;
//     h2 {
//       font-size: 4rem;
//     }
//     p {
//       color: #7b7e86;
//       line-height: 2rem;
//     }
//   }
//   @media screen and (min-width: 280px) and (max-width: 1080px) {
//     flex-direction: column;
//     margin: 2rem;
//     .image {
//       display: flex;
//       justify-content: center;
//       align-items: center;
//       img {
//         height: 50vw;
//       }
//     }
//     .content {
//       gap: 1rem;
//       h2 {
//         font-size: 1rem;
//       }
//       p {
//         line-height: 1.3rem;
//         font-size: 0.9rem;
//       }
//     }
//   }
// `;