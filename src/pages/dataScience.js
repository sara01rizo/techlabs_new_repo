import React, { Component } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import ProgrammHero from "../components/ProgrammHero"
import WhatYouWillLearn from "../components/WhatYouWillLearn"
import RightImageSection from "../components/RightImageSection"
import LeftImageSection from "../components/LeftImageSection"
import Partners from "../components/Partners"
import Projects from "../components/Projects"
import CallToAction from "../components/CallToAction"
import FirstImpression from "../components/FirstImpression"
import FaqQuestion from "../components/FaqQuestion"
import graph from "../assets/graphs.png"
import david from "../assets/david.png"
import dashboard from "../assets/dashboard.png"
import accenture from "../assets/accenture.png"

class dataScience extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="container-fluid">
          <ProgrammHero headingFirst="Data" headingSecond=" Science" />
        </div>
        <div className="container">
          <WhatYouWillLearn
            intro="Data Science is a multidisciplinary domain which is in it’s core the task of finding valuable insights from data"
            first="How to apply machine learning models to solve problems like churn prediction or customer segmentation"
            second="Exploration of raw data to gain useful insights"
            third="General programming knowledge in R or Python"
            fourth="How to present your results in a structured and visually appealing way"
          />
          <RightImageSection
            heading="Why Data Science?"
            subheading="Data Scientist - The most in demand job in the 21th Century"
            text="“Data is the new oil” - a catchy phrase already said in 2006, which becomes more important during time. What makes companies like Google, Baidu or Amazon so powerful? It´s the data they possess AND the employers that are able to analyze it. 
                  The data volume that is created every year and the number of companies that want to use this growth exponentially Hence the demand for data scientists is also increasing. 
                  Data Science is a pretty versatile. Data Scientist are demanded in HealthCare, Banking, Logistics, E-Commerce and several other domains. Hence, as a data scientist you are able to explore a lot of different problems and gain important business knowledge."
            image={graph}
          />
          <LeftImageSection
            heading="What is Data Science"
            subheading="Text Text Text Text"
            text="The Data Science Programm is available either as a hands-on or a theoretical track. Both tracks include basic programming exercises at first to get to know the chosen programming language R or Python. The hands-on track is made for people who want to learn how to quickly apply machine learning algorithms to solve problems without a dive into the mathematical background. The theory track includes materials and exercises which covers the theoretical (mathematical) background of several algorithms like linear and logistic regression, neural networks or dimensionality reduction."
            image={david}
          />
          <RightImageSection
            heading="What is Data Science"
            subheading="Text Text Text Text"
            text="TechLabs is the community that enables you to become a Digital Entrepreneur. Exciting meetups, talks, hackathons, social events, workshops and much more await you. Discover TechLabs now. TechLabs is the community that enables you to become a Digital Entrepreneur. Exciting meetups, talks, hackathons, social events, workshops and much more await you. Discover TechLabs now. TechLabs is the community that enables you to become a Digital Entrepreneur. "
            image={dashboard}
          />
          <Partners
            heading="What our partners say"
            subheading="Text text text"
            quoteText="To start with pogramming is hard when done by yourself, but TechLabs is able to accelerate your learning curve by multiples."
            quoteName="Hans Schneider"
            quoteRole="Data Scientist"
            quoteCompanyLogo={accenture}
          />
          <Projects />
          <CallToAction />
          <FirstImpression />
          <div className="row mt-5">
            <div className="col">
              <h2>FAQ</h2>
              <div className="section-divider" />
              <p>Do you have more questions?</p>
              <FaqQuestion
                question="How can I apply for the Digital Shaper Program?"
                answer="sdjhfasölfdh"
              />
              <FaqQuestion
                question="What makes me a qualified Applicant?"
                answer="sdjhfasölfdh"
              />
              <FaqQuestion
                question="How does the application process look like?"
                answer="sdjhfasölfdh"
              />
              <FaqQuestion
                question="What are the costs for Participants?"
                answer="sdjhfasölfdh"
              />
              <FaqQuestion
                question="When is the next Application Deadline?"
                answer="sdjhfasölfdh"
              />
              <FaqQuestion
                question="How can I apply for the Digital Shaper Program?"
                answer="sdjhfasölfdh"
              />
              <FaqQuestion
                question="Who can I contact if I have any Questions?"
                answer="sdjhfasölfdh"
              />
              <div className="text-center mt-5">
                <button className="btn btn-primary">More questions?</button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    )
  }
}

export default dataScience