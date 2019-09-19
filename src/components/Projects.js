import React from "react"
import ai from "../assets/ai.png"
import web from "../assets/web.png"
import ds from "../assets/ds.png"

const Projects = () => {
  return (
    <>
      <div className="row mt-5">
        <div className="col">
          <h2>Projects From Our Participants</h2>
          <div className="section-divider" />
          <p className="basicSection--sub">
            Have a look at these completed projects and get inspired!
          </p>
        </div>
      </div>
      <div className="row d-flex">
        <div className="col-md-4 py-5 justify-content-center align-self-center">
          <div className="card h-75 mt-5">
            <h3 className="text-center projects--heading">
              <span className="highlighted">Financial Planner</span>
            </h3>
            <div className="card-body">
              <div className="row">
                <p className="projects--text">
                  An application that basically keeps track of your entire
                  financial transactions.
                </p>
                <div className="row w-100">
                  <div className="col-2">
                    <img src={web} alt="" />
                  </div>
                  <div className="col-10">
                    <p>Web Development</p>
                  </div>
                </div>
                <div className="row w-100">
                  <div className="col-2">
                    <img src={ds} alt="" />
                  </div>
                  <div className="col-10">
                    <p>Data Science</p>
                  </div>
                </div>
              </div>
              <a
                className="btn btn-primary mt-5"
                href="https://medium.com/techlabsms/why-is-there-always-so-much-month-left-at-the-end-of-the-money-453ba6a5f256"
              >
                More information
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4 py-5 justify-content-center align-self-center">
          <div className="card h-100 mt-5">
            <h3 className="text-center projects--heading">
              <span className="highlighted">The zeb Project</span>
            </h3>
            <div className="card-body">
              <div className="row">
                <p className="projects--text">
                  An application that recognizes the brand and model of a car by
                  taking a picture and identifying key statistical features of
                  the used car.
                </p>
                <div className="row w-100">
                  <div className="col-2">
                    <img src={ai} alt="" />
                  </div>
                  <div className="col-10">
                    <p>Artificial Intelligence</p>
                  </div>
                </div>
                <div className="row w-100">
                  <div className="col-2">
                    <img src={web} alt="" />
                  </div>
                  <div className="col-10">
                    <p>Web Development</p>
                  </div>
                </div>
                <div className="row w-100">
                  <div className="col-2">
                    <img src={ds} alt="" />
                  </div>
                  <div className="col-10">
                    <p>Data Science</p>
                  </div>
                </div>
              </div>
              <a
                className="btn btn-primary mt-5"
                href="https://medium.com/techlabsms/zeb-project-f239ac0abc8c"
              >
                More information
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4 py-5 justify-content-center align-self-center">
          <div className="card h-75 mt-5">
            <h3 className="text-center projects--heading">
              <span className="highlighted">Smart-City</span>
            </h3>
            <div className="card-body">
              <div className="row">
                <p className="projects--text">
                  Analysis of the bicycle infrastructure in Münster to identify
                  bottlenecks which might slow down the traffic.
                </p>
                <div className="row w-100">
                  <div className="col-2">
                    <img src={ds} alt="" />
                  </div>
                  <div className="col-10">
                    <p>Data Science</p>
                  </div>
                </div>
              </div>
              <a
                className="btn btn-primary mt-5"
                href="https://medium.com/techlabsms/smart-city-visualizing-bike-traffic-in-m%C3%BCnster-af8445cca8db"
              >
                More information
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects
