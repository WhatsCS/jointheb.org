import React, { useContext } from "react"
import { PageLayout, PageTitle, MediaLink } from "../components"
import { Container, CardGroup, Image } from "react-bootstrap"
import { Link, graphql } from "gatsby"
import { ThemeContext, SEO } from "../utils"

export default ({ data }) => {
  const {
    author,
    email,
    occupation,
    showsList,
    moviesList,
    designations,
    unemployed,
  } = data.site.siteMetadata
  const { toString } = useContext(ThemeContext)

  const showLinks = showsList.map(show => MediaLink(show))
  const movieLinks = moviesList.map(movie => MediaLink(movie))

  return (
    <PageLayout>
      <SEO title="About Me" />
      <PageTitle title="About Me" />
      <Container>
        <Image
          rounded
          width="140"
          height="140"
          src={`../../icons/luke-${toString()}.png`}
          alt={author}
        />
        <article className="w-75 m-auto pt-2 text-justify">
          <p className="text-center">
            {designations.map((attr, i) => (
              <span key={attr}>
                &nbsp;<b>{attr}</b>&nbsp;
                {i < designations.length - 1 && <>||</>}
              </span>
            ))}
          </p>
          <p className="i-5 mt-4 pt-2">
            Hello there! My name is <b>{`${author}`}</b>. I am a&nbsp;
            <b>{occupation}</b> traveling through the world of programming,
            learning all I can.
          </p>
          <p className="i-5">
            I like to spend my spare time working on random personal programming
            projects, playing guitar, building computers and flying around in a
            F-15C in DCS.
          </p>
          <p className="i-5">
            Check out my <Link to="/projects">projects</Link> to see what I've
            been up to!
          </p>
        </article>
        <article className="w-75 m-auto">
          {unemployed && (
            <>
              <hr />
              <p className="unemployed">
                <small>
                  I am <b>currently looking for new opportunities</b>! If you
                  like what you <Link to="/resume">see</Link>, let's get
                  in&nbsp;
                  <a
                    href={`mailto:${email}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    touch
                  </a>
                  !
                </small>
              </p>
            </>
          )}
          <hr />
          <h5 className="watch-list-title pt-4">
            Here are a couple of my favorite movies:
          </h5>
          <CardGroup className="card-container" style={{ fontSize: "0.9rem" }}>
            {movieLinks}
          </CardGroup>
          <h5 className="watch-list-title pt-4">
            Here are a couple of my favorite shows:
          </h5>
          <CardGroup className="card-container" style={{ fontSize: "0.9rem" }}>
            {showLinks}
          </CardGroup>
        </article>
      </Container>
    </PageLayout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        unemployed
        occupation
        author
        email
        designations
        moviesList {
          title
          author
          link
          image
        }
        showsList {
          title
          author
          link
          image
        }
      }
    }
  }
`
