import styled from 'styled-components'

export const Container = styled.section`
  padding: 100px 10px;
  min-height: 700px;
`

export const Title = styled.h1`
  font-size: 50px;
  font-weight: 700;
  text-align: center;
`

export const ColoredText = styled.span`
  color: ${props => props.theme.yellow};
`
