import { expertise, skillset } from "@/assets/data/dummydata"
import { Card } from "@/components/common/Card"
import { Title, TitleSm } from "@/components/common/Title"
import { motion } from "framer-motion"
import React from "react"
import Portfolio from "./Portfolio"

const Services = () => {
  return (
    <>
      <section className='agency bg-top'>
        <div className='container'>
          <div className='heading-title'>
            {/* <TitleSm title='SERVICES' /> <br /> */}
            <br />
            <Title title='SERVICES' className='title-bg' />
          </div>
          <div >

            <div  className="services-list mobile-div">
              <img src="../images/mobile-app.png" className="mobile-div-image"></img>
              <div  className="mobile-div-text" >
                <h1>MOBILE APPLICATION DEVELOPMENT</h1>
                <p>Craft intuitive mobile applications with seamless UX/Ul, leveraging cutting-edge frameworks and agile methodologies for optimal performance and user satisfaction.</p>
              </div>
            </div>

            <div className="cloudy">
            <div  className="services-list web-div">
              <div  className="web-div-text">
                <h1>WEB APPLICATION DEVELOPMENT</h1>
                <p>Engineer scalable web applications using robust architectures, ensuring responsiveness and efficiency through strategic API integrations and meticulous coding practices.</p>
              </div>
              <img src="../images/web-app.png"  className="web-div-image"></img>
            </div>
            </div>
       
            <div  className="services-list mobile-div">
              <img src="../images/saas.png" className="mobile-div-image"></img>
              <div className="mobile-div-text">
                <h1>Saas Solutions</h1>
                <p>Optimize business processes with our Software as a Service (SaaS) offerings,providing scalable and modular solutions , backed by robust APIs and Cloud infrastructure for seamless integration and adaptability.</p>
              </div>
            </div>
            
            <div className="wave-3">
            
            <div className="services-list web-div">              
              <div  className="ecommerce-text">
                <h1>E-Commerce Support</h1>
               <p>Develop secure e-commerce platforms with PCI-compliant solutions,integrating payment gateways and implementing robust backend systems for efficient order processing and inventory management.</p>               
              </div>
              <img src="../images/ecommerce.png" className="mobile-div-image"></img>
            </div>
            </div>
            
            
            <div className="wavy">
            <div className="services-list mobile-div">
              <img src="../images/cloud-computing.png" className="mobile-div-image"></img>
              <div className="mobile-div-text">
                <h1>Cloud Computing</h1>
                <p>Implement cloud-native solutions for enhanced resource utilization, scalability, and reliability, utilizing microservices architecture and containerization for streamlined deployment.</p>
              </div>
            </div>
            </div>


            <div className="dashed-line"></div>

            <div className="cloudy">
            <div  className="services-list web-div">              
              <div  className="aws-text">
                <h1>AWS Consulting and Support</h1>
                <p>AWS Consulting and Support Navigate the complexities of cloud infrastructure with our AWS specialists, providing strategic architecture design, cost optimization, and continuous support for seamless scalability.</p>
              </div>
              <img src="../images/aws-removebg-preview.png"  className="aws-img"></img>
            </div>
            </div>


            <div className="services-list mobile-div">
              <img src="../images/ai.png" className="mobile-div-image"></img>
              <div className="mobile-div-text">
                <h1>AI/ML</h1>
                <p>AI/ML Harness the power of artificial intelligence and machine learning algorithms for predictive analytics, natural language processing, and data- driven insights, driving innovation and strategic decision-making.</p>
              </div>
            </div>

            <div className="wave-3">
            <div  className="services-list web-div">              
              <div  className="blockchain-text">
                <h1>Blockchain</h1>
                <p>Blockchain Implement decentralized ledger technology for transparent and secure transactions, utilizing cryptographic principles to ensure data integrity and trust ni digital interactions.</p>
              </div>
              <img src="../images/blockchain.png" className="mobile-div-image"></img>
            </div>            
            </div>
        </div>

          
        </div>
        <Portfolio/>
      </section>
    </>
  )
}

export default Services
