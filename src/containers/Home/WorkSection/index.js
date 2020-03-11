import React from 'react'
import { LimitWidth } from '~/components/blocks/Styles'
import Img from '~/components/blocks/Img'
import {
  Container,
  Title,
  Hr,
  Paragraph,
  Images,
  ImageContainer,
  ImgText,
  ColoredText,
  ViewMore,
} from './style'

const images = [
  {
    name: 'image1',
    src: '/pic.jpg',
  },
  {
    name: 'image2',
    src: '/pic2.jpg',
  },
  {
    name: 'image3',
    src: '/pic3.jpg',
  },
  {
    name: 'image4',
    src: '/pic4.jpg',
  },
]

const WorkSection = () => (
  <Container>
    <LimitWidth maxWidth={800}>
      <Title>
        What we Do<ColoredText>.</ColoredText>
      </Title>
      <Hr />
      <Paragraph>
        High quality content improves the value of your project. Through more
        sales, more excitement, more decisions and more truth. When you grow, I
        grow.
        <br />
      </Paragraph>
      <Paragraph>This is what I do.</Paragraph>
      <Images>
        {images.map(image => (
          <ImageContainer key={image.src}>
            <Img alt={image.name} src={image.src} />
            <ImgText>{image.name}</ImgText>
          </ImageContainer>
        ))}
      </Images>
      <ViewMore type="button">View more</ViewMore>
    </LimitWidth>
  </Container>
)

export default WorkSection
