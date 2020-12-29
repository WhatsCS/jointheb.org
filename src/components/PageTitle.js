import React from "react"
import { Jumbotron } from "react-bootstrap"

export default ({ title, children, url }) => {
  let ititle
  if (url === null) {
    ititle = (
      <h1>
        {title}&nbsp;<span>{children}</span>&nbsp;
      </h1>
    )
  } else {
    ititle = (
      <h1>
        <a href={url}>{title}</a>&nbsp;<span>{children}</span>&nbsp;
      </h1>
    )
  }
  return <Jumbotron className="bg-none pt-4 mb-5 pb-0">{ititle}</Jumbotron>
}
