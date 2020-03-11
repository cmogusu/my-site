import React from 'react'
import { LimitWidth } from '~/components/blocks/Styles'
import { Container, BoldText, ColoredText, Hr, Text, Boxes, Box } from './style'

const IntroSection = () => (
  <Container>
    <LimitWidth>
      <h1 className="title">
        <BoldText>Hi</BoldText>
        <ColoredText>.</ColoredText>
      </h1>
      <Hr />

      <Boxes>
        <Box span={8}>
          <div>
            <BoldText>300</BoldText>
            <ColoredText>yrs</ColoredText>
            <hr />
            PROJECTS
          </div>
        </Box>
        <Box span={8}>
          <div>
            <BoldText>
              20
              <ColoredText>+</ColoredText>
            </BoldText>
            <hr />
            CLIENTS
          </div>
        </Box>
        <Box span={8}>
          <div>
            <BoldText>1000</BoldText>
            <ColoredText>+</ColoredText>
            <hr />
            IMAGES
          </div>
        </Box>
      </Boxes>

      <LimitWidth maxWidth={500}>
        <Text>
          I&apos;m a passionate code - love to do things my way. Working on
          challenging projects with a team or with individuals.
        </Text>
      </LimitWidth>
    </LimitWidth>
  </Container>
)

export default IntroSection
