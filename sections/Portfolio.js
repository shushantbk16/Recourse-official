import React from "react";
import { Title } from "../components/common/Title";
import { showcase, showcase2 } from "@/assets/data/dummydata";
import { Card } from "../components/common/Card";
import Link from "next/link";
import { HiOutlineArrowRight } from "react-icons/hi";
import { motion } from "framer-motion";
const Portfolio = () => {
  return (
    <>
      <section className="showcase portfolio">
        <div className="container">
          <div className="heading-title">
            <h1 style={{ fontSize: "4rem" }}>RECOURSETECH</h1>
            <h1 style={{ fontSize: "4rem" }}>COLLECTION</h1>
            <p>
              Our team has vast experience in design and development of custom
              innovative ecommerce solutions. Here are some of the projects
              we've successfully delivered to our clients.
            </p>
          </div>
          {/* <div className="hero-content grid-3 py">
            {showcase.map((item) => (
              <Card data={item} key={item.id} />
            ))}
          </div> */}
          <div className="marketPlaces-portfolio ">
            {showcase.map((item) => {
              return (
                <motion.div
                  whileInView="visible"
                  viewport={{ once: true }}
                  initial="hidden"
                  variants={{
                    visible: { opacity: 1, scale: 1, y: 0 },
                    hidden: { y: 60, opacity: 0, scale: 0.5 },
                  }}
                  transition={{
                    type: "spring",
                    duration: "1.5",
                    ease: "easeInOut",
                    // delay: "0.",
                  }}
                  style={{ top: "-22px" }}
                >
                  <div className="marketplace-portfolio">
                    <div className="image-portfolio ">
                      <img
                        src={item.cover}
                        alt="marketplace-portfolio "
                        style={{ width: "275px", height: "250px" }}
                      />
                    </div>
                    <div className="name-portfolio ">
                      <h4>{item.title}</h4>
                    </div>
                    {/* <h6 className="username-portfolio ">{item.catgeory}</h6> */}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

// const Section = styled.section`
//   display: flex;
//   flex-direction: column;
//   gap: 5rem;
//   margin: 0 6rem;
//   margin-bottom: 5rem;
//   .title {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     gap: 3rem;
//     flex-direction: column;
//     h2 {
//       font-size: 3rem;
//     }
//     p {
//       color: #7b7e86;
//     }
//   }
//   .marketPlaceTypes {
//     display: flex;
//     justify-content: center;
//     gap: 2rem;
//     button:not(.blue) {
//       color: black;
//       border-color: #7b7e86;
//     }
//   }
//   .marketPlaces {
//     display: grid;
//     grid-template-columns: repeat(5, 1fr);
//     gap: 2rem;
//     .marketplace {
//       ${'' /* height: */}
//       box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
//       padding: 0.5rem;
//       border-radius: 1rem;
//       width: max-content;
//       cursor: pointer;
//       transition: 0.5s ease-in-out;
//       &:hover {
//         box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
//           rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
//           rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
//       }
//       .image {
//         margin-bottom: 1rem;
//       }
//       .name {
//         display: flex;
//         color: #222222;
//         align-items: center;
//         justify-content: space-between;
//         padding: 0 1rem;
//         h4 {
//         }
//       }
//       .username {
//         color: #555555;
//         font-size: 0.8rem;
//         padding: 0 1rem;
//         margin-bottom: 0.5rem;
//       }
//       .price-container {
//         padding: 0 1rem;
//         display: flex;
//         justify-content: space-between;
//         color: #02204e;
//       }
//     }
//   }
//   @media screen and (min-width: 280px) and (max-width: 1080px) {
//     margin: 2rem;
//     .marketPlaceTypes {
//       display: grid;
//       grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
//     }
//     .marketPlaces {
//       display: flex;
//       flex-direction: column;
//       justify-content: center;
//       align-items: center;
//     }
//   }
// `;
export default Portfolio;
