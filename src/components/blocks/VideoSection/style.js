import styled from 'styled-components'

export const Container = styled.section`
  height: 100vh;
  width: 100vw;
  background: #222;
  position: relative;
`

export const Overlay = styled.span`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 97;
  background: #444;
`

export const TextContainer = styled.h1`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Title = styled.h1`
  color: #fff;
  font-size: 40px;
  font-weight: 700;
  text-transform: uppercase;

  span {
    color: yellow;
  }
`

export default {}
