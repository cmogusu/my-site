import React from 'react'
import { Row, Col } from 'antd'
import { Container, Img, ColoredText } from './style'

const images = [
  {
    alt: 'image1',
    src: '/pic.jpg',
  },
  {
    alt: 'image2',
    src: '/pic2.jpg',
  },
  {
    alt: 'image3',
    src: '/pic3.jpg',
  },
  {
    alt: 'image4',
    src: '/pic4.jpg',
  },
]

const WorkSection = () => (
  <Container>
    <h2>
      What we Do<ColoredText>.</ColoredText>
    </h2>
    <hr />
    High quality content improves the value of your project. Through more sales,
    more excitement, more decisions and more truth. When you grow, I grow.
    <br />
    This is what I do.
    <Row>
      {images.map(image => (
        <Col key={image.src} span={6}>
          <Img alt={image.alt} src={image.src} />
        </Col>
      ))}
    </Row>
    <button type="button">View more</button>
  </Container>
)

export default WorkSection
