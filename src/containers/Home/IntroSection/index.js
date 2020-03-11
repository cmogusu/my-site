import React from 'react'
import { Row, Col } from 'antd'
import { Container, Title, ColoredText } from './style'

const IntroSection = () => (
  <Container>
    <Title className="title">
      Hi<ColoredText>.</ColoredText>
      <br />
      I&apos;m Clive - I love to code
      <hr />
    </Title>
    <Row>
      <Col span={8}>
        300<ColoredText>yrs</ColoredText>
        <hr />
        PROJECTS
      </Col>
      <Col span={8}>
        20<ColoredText>+</ColoredText>
        <hr />
        CLIENTS
      </Col>
      <Col span={8}>
        1000<ColoredText>+</ColoredText>
        <hr />
        IMAGES
      </Col>
    </Row>

    <div>
      I'm a passionate code - love to do things my way. Working on challenging
      projects with a team or with individuals.
    </div>
  </Container>
)

export default IntroSection
