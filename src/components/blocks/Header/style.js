import styled from 'styled-components'

export const Container = styled.div`
  background: rgba(11, 9, 9, 0.3);
  box-shadow: 1px 1px 5px 0px rgba(160, 160, 160, 0.49);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
`

export const LimitWidth = styled.div`
  max-width: 1200px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
`

export const Logo = styled.img`
  width: 35px;
  height: 35px;
`

export const MenuItems = styled.ul`
  padding: none;
  margin: 0;
`

export const MenuItem = styled.li`
  list-style: none;
  padding: 0;

  & a {
    padding: 5px 10px;
  }
`
