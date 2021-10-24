import React from "react"
import Container from "../smallComponents/Container"
import Heading from "../smallComponents/Heading"

const logoStyles = {
  width: "120px",
  height: "auto",
  marginLeft: "auto",
  marginRight: "auto",
}

const PartnerLogos = ({ heading, subheading, partners }) => {
  return (
    <Container>
      <Heading heading={heading} subheading={subheading}></Heading>
      <div className="row mt-4">
        {partners &&
          partners.map(partner => (
            <div className="col-md-3 mt-3" key={partner.name}>
              <a
                href={partner.partnerLink}
                target="_blank"
                rel="noopener noreferrer"
                className="aNone"
              >
                <div className="partner--card mb-4 h-100 d-flex justify-content-center">
                  <h6 className="mb-3">{partner.name}</h6>
                  {/* <Img
                    fluid={partner.logo.fluid}
                    alt={partner.logo.title}
                    style={logoStyles}
                  /> */}
                </div>
              </a>
            </div>
          ))}
      </div>
    </Container>
  )
}

export default PartnerLogos
