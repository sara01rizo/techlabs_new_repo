import React from "react"
import locationsImg from "../assets/locations.png"

const Requirements = ({ heading, subheading, link, isOpen }) => {
  return (
    <div className="requirements my-5 py-5">
      <div className="container ">
        <div className="row">
          <div className="col">
            <h2>{heading}</h2>
            <div className="section-divider" />
            <p className="basicSection--sub">{subheading}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-5 pt-5 order-2 order-md-1">
            <ol className="requirements--list">
              <li className="requirements--list_item py-2">
                <span className="highlighted requirements--text_first">
                  Motivation
                </span>{" "}
                - Are you motivated to learn tech skills online? <br />
                The online learning program requires you to learn independently!
              </li>
              <li className="requirements--list_item py-2">
                <span className="highlighted requirements--text_first">
                  Drive
                </span>{" "}
                - Do you have the drive to push and finish a group project
                during your semester? <br />
                During the project phase, you need to work efficiently within a
                small team to apply your knowledge!
              </li>
              <li className="requirements--list_item py-2">
                <span className="highlighted requirements--text_first">
                  Community
                </span>{" "}
                - Do you enjoy connecting with our community during events or
                within our slack? <br />
                We offer local events that live from active participation to
                create a unique network
              </li>
              <li className="requirements--list_item py-2">
                <span className="highlighted requirements--text_first">
                  English
                </span>{" "}
                - Are your english skills sufficient? <br />
                To have a great learning experience you should also be able to
                understand English materials!
              </li>
              <li className="requirements--list_item py-2">
                <span className="highlighted requirements--text_first">
                  Time-Management
                </span>{" "}
                - Are you committed to spend enough time to participate in our program? <br />
                To become a Digital Shaper you should invest 50+ hours online and offline!
              </li>
            </ol>
            {isOpen ? (
              <button className="btn btn-primary mt-4">
                <a href={link} className="a-white">
                  Apply now
                </a>
              </button>
            ) : (
              <button className="btn btn-primary mt-4" disabled>
                Application currently closed
              </button>
            )}
          </div>
          <div className="col-md-7 text-center order-1 order-md-2 d-flex align-items-center justify-content-center">
            <img src={locationsImg} alt="" className="w-75" />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Requirements
