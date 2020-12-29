import React from "react"
import Container from "react-bootstrap/Container"
import { PageLayout, PageTitle } from "../components"

import SEO from "../utils/seo"

export default ({ title, excerpt, html, subTitle, url }) => (
  <PageLayout>
    <SEO title={title} description={excerpt} />
    <Container className="text-center" fluid>
      <a href={url}>
        <PageTitle title={title} />
      </a>
      {subTitle}
      <Container className="text-justify">
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </Container>
    </Container>
  </PageLayout>
)
