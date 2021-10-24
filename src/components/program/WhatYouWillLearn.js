import React from "react"

// plugins && external
import { FormattedMessage } from "gatsby-plugin-react-intl"

// components
import Heading from "../smallComponents/Heading"
import Container from "../smallComponents/Container"

const WhatYouWillLearn = ({ intro, first, second, third, fourth }) => {
  return (
    <Container>
      <Heading
        heading={<FormattedMessage id={"whatYouWillLearn.heading"} />}
        subheading={intro}
      />

      <div className="row">
        <div className="col">
          <div className="learn--card">
            <div className="row mt-3">
              <div className="col-1">
                <div className="learn--color" />
              </div>
              <div className="col-11 mt-3">
                <p>{first}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col">
          <div className="learn--card">
            <div className="row">
              <div className="col-1">
                <div className="learn--color" />
              </div>
              <div className="col-11 mt-3">
                <p>{second}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col">
          <div className="learn--card">
            <div className="row">
              <div className="col-1">
                <div className="learn--color" />
              </div>
              <div className="col-11 mt-3">
                <p>{third}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col">
          <div className="learn--card">
            <div className="row">
              <div className="col-1">
                <div className="learn--color" />
              </div>
              <div className="col-11 mt-3">
                <p>{fourth}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default WhatYouWillLearn
