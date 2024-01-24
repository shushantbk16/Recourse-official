import React from "react";
import Portfolio from "./Portfolio";

const Services = () => {
  return (
    <>
      <section
        className="agency bg-top appearance-none"
        style={{
          backgroundColor: "#f2f2f2",
          marginTop: "-4%",
          paddingTop: "4%",
        }}
      >
        <div className="container">
          <div className="heading-title">
            <br />
            <img src="../images/saas.png" style={{ width: "15%" }}></img>
            <h1 style={{ fontSize: "2rem" }}>Development Services</h1>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(1,1fr)",
              gridRowGap: "6rem",
              paddingTop: "8%",
            }}
          >
            <div className="service-card">
              <div>
                <img src="../images/mob.png" className="service-logo"></img>
              </div>
              <div>
                <div>
                  <h1 className="service-title">Mobile Development</h1>
                </div>
                <div>
                  <p className="service-description">
                    Craft intuitive mobile applications with seamless UX/Ul,
                    leveraging cutting-edge frameworks and agile methodologies
                    for optimal performance and user satisfaction.
                  </p>
                </div>
              </div>
            </div>

            <div className="service-card">
              <div>
                <img src="../images/web.png" className="service-logo"></img>
              </div>
              <div>
                <div>
                  <h1 className="service-title">Web Development</h1>
                </div>
                <div>
                  <p className="service-description">
                    Engineer scalable web applications using robust
                    architectures, ensuring responsiveness and efficiency
                    through strategic API integrations and meticulous coding
                    practices.
                  </p>
                </div>
              </div>
            </div>

            <div className="service-card">
              <div>
                <img src="../images/sa.png" className="service-logo"></img>
              </div>
              <div>
                <div>
                  <h1 className="service-title">Saas Solutions</h1>
                </div>
                <div>
                  <p className="service-description">
                    Optimize business processes with our Software as a Service
                    (SaaS) offerings,providing scalable and modular solutions ,
                    backed by robust APIs and Cloud infrastructure for seamless
                    integration and adaptability.
                  </p>
                </div>
              </div>
            </div>

            <div className="service-card">
              <div>
                <img src="../images/cc.png" className="service-logo"></img>
              </div>
              <div>
                <div>
                  <h1 className="service-title">Cloud Computing</h1>
                </div>
                <div>
                  <p className="service-description">
                    Implement cloud-native solutions for enhanced resource
                    utilization, scalability, and reliability, utilizing
                    microservices architecture and containerization for
                    streamlined deployment.
                  </p>
                </div>
              </div>
            </div>

            <div className="service-card">
              <div>
                <img src="../images/ec.png" className="service-logo"></img>
              </div>
              <div>
                <div>
                  <h1 className="service-title">E-Commerce support</h1>
                </div>
                <div>
                  <p className="service-description">
                    Develop secure e-commerce platforms with PCI-compliant
                    solutions,integrating payment gateways and implementing
                    robust backend systems for efficient order processing and
                    inventory management.
                  </p>
                </div>
              </div>
            </div>

            <div className="service-card">
              <div>
                <img src="../images/bc.png" className="service-logo"></img>
              </div>
              <div>
                <div>
                  <h1 className="service-title">Blockchain</h1>
                </div>
                <div>
                  <p className="service-description">
                    Blockchain Implement decentralized ledger technology for
                    transparent and secure transactions, utilizing cryptographic
                    principles to ensure data integrity and trust ni digital
                    interactions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Portfolio />
      </section>
    </>
  );
};

export default Services;
