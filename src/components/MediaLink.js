import React from "react"
import { Card } from "react-bootstrap"

export default ({ title, author, link, image }) => {
  return (
    <Card>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{author}</Card.Subtitle>
      </Card.Body>
      <Card.Footer style={{ border: "none" }}>
        <Card.Link href={link}>IMDb</Card.Link>
      </Card.Footer>
    </Card>
  )
}
