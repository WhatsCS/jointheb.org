/*
    Design: on first visit, display a screen that has a standard linux kernel
            bootup screen. Interlay meme's and shit to make it fun.
    Cookie: add in a check for if the splashscreen has been seen, maybe add in a 
            timeout or a shutdown button.
*/

import React from "react"
import { Container, Row } from "react-bootstrap"

export default () => {
  return (
    <Container fluid>
      <Row>
        <p>test</p>
      </Row>
    </Container>
  )
}
