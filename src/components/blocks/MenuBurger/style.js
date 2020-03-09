import styled from 'styled-components'

export const StyledBurger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 24px;
  height: 21px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;

  &:focus {
    outline: none;
  }

  span {
    display: block;
    width: 22px;
    height: 2px;
    background: #fff;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${props => (props.isOpen ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${props => (props.isOpen ? '0' : '1')};
      transform: ${props =>
        props.isOpen ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${props => (props.isOpen ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`

export default {}
