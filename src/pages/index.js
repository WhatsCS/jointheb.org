import React, { useContext } from "react"
import { graphql } from "gatsby"
import ThemeContext from "../utils/theme"
import { PageLayout } from "../components"
import { SEO } from "../utils"
import { Container, Image } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default ({ data }) => {
  const { unemployed, firstName, lastName, occupation } = data.site.siteMetadata
  const { dark } = useContext(ThemeContext)
  return (
    <PageLayout>
      <SEO title="Home" />
      <Container className="text-center pt-5 mt-5" fluid>
        <Image
          width="150"
          height="150"
          fluid
          src={
            dark
              ? `../../icons/borg-logo-fix.png`
              : `../../icons/star-fleet.png`
          }
          alt={dark ? "The Borg" : "Star Fleet"}
        />
        {unemployed && (
          <p className="mt-2">
            <b> Howdy! I'm currently looking for new opportunities!</b>
          </p>
        )}
        <Container className="py-0 my-0">
          <h1>
            <span className="first-name">{firstName}</span>&nbsp;
            <span className="last-name">{lastName}</span>
          </h1>
          <p>
            <i>
              {occupation} by day,&nbsp;
              {dark ? `Resistance is futile.` : `Fleet commander by night`}
            </i>
          </p>
        </Container>
        <hr className="my-3 w-25" />
        <div className="d-md-inline-flex icons-container">
          <a
            href="https://www.github.com/WhatsCS"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fab", "github"]}
              className="icons github"
              title="Github"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/evan-valmassoi-evalcode"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fab", "linkedin"]}
              className="icons linkedin"
              title="LinkedIn"
            />
          </a>
          <a
            href="mailto:evan.valmassoi@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fas", "envelope"]}
              className="icons mail"
              title="e-mail"
            />
          </a>
          <a href="../../resume.pdf" target="_blank" download>
            <FontAwesomeIcon
              icon={["fas", "file-alt"]}
              className="icons file"
              title="Resume"
            />
          </a>
        </div>
      </Container>
    </PageLayout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        unemployed
        firstName
        lastName
        occupation
      }
    }
  }
`
