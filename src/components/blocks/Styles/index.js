import styled from 'styled-components'

export const LimitWidth = styled.div`
  max-width: ${props => (props.maxWidth ? props.maxWidth : 1200)}px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`
export default {}
