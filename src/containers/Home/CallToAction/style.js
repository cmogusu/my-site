import styled from 'styled-components'

export const Container = styled.section`
  background: ${props => props.theme.colors.primary};
  padding: 70px 10px;
  text-align: center;
  color: #fff;
`

export const Title = styled.span`
  display: block;
`

export const Action = styled.span`
  font-size: 3em;
  font-weight: 600;
`
