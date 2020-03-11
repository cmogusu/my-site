import styled from 'styled-components'

export const Container = styled.section`
  padding: 100px 10px;
  min-height: 700px;
`

export const ColoredText = styled.span`
  color: ${props => props.theme.yellow};
`

export const Img = styled.img`
  width: 100%;
`

export const CallToAction = styled.section`
  padding: 20px 10px;
  background: ${props => props.theme.yellow};
`
