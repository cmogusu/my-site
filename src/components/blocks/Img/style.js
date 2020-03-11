import styled from 'styled-components'

export const Container = styled.div`
  border-radius: 6px;
  overflow: hidden;
  z-index: -1;
  background-image: url(${props => props.bgImgSrc});
  background-size: cover;
  background-position: center;
  transition: 0.5s all ease;

  img {
    width: 100%;
    height: auto;
    opacity: 0;
  }
`

export default {}
