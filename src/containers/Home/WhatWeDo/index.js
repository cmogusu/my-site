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
    name: 'image3',
    src: '/pic3.jpg',
  },
  {
    name: 'image4',
    src: '/pic4.jpg',
  },
]

const WhatWeDo = () => (
  <Container>
    <LimitWidth maxWidth={800}>
      <Title>
        Our Work<ColoredText>.</ColoredText>
      </Title>
      <Hr />
      <Paragraph>
        Sed ut perspiciatis unde omnis iste natus <strong>error</strong> sit
        voluptatem accusantium doloremque laudantium, totam rem aperiam.
        <br />
        Illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo.
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

export default WhatWeDo
