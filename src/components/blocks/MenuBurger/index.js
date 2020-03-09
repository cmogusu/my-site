import React from 'react'
import { bool, func } from 'prop-types'
import { StyledBurger } from './style'

const MenuBurger = ({ isOpen, onToggleDrawer }) => (
  <StyledBurger className="burger" isOpen={isOpen} onClick={onToggleDrawer}>
    <span />
    <span />
    <span />
  </StyledBurger>
)

MenuBurger.propTypes = {
  isOpen: bool.isRequired,
  onToggleDrawer: func.isRequired,
}

export default MenuBurger
