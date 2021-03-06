import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  background: #eee;
  text-align: center;
`

export const Title = styled.h1`
  font-size: 50px;
  font-weight: 700;
  text-align: center;
`

export const ColoredText = styled.span`
  color: ${props => props.theme.yellow};
`
