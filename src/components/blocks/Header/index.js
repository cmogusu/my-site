import React, { useState, useCallback } from 'react'
import snakeCase from 'lodash/snakeCase'
import { Drawer, Icon } from 'antd'
import MenuBurger from '~/components/blocks/MenuBurger'
import whiteLogo from '~/assets/images/logo-white.png'
import { Container, LimitWidth, Logo, MenuItems, MenuItem } from './style'

const links = [
  {
    url: '/',
    name: 'Home',
    icon: 'loading',
  },
]

const Header = () => {
  const [showDrawer, toggleDrawer] = useState(false)
  const handleToggleDrawer = useCallback(() => toggleDrawer(!showDrawer), [showDrawer])

  return (
    <Container>
      <LimitWidth>
        <Logo alt="logo" src={whiteLogo} />
        <MenuBurger isOpen={showDrawer} onToggleDrawer={handleToggleDrawer} />
      </LimitWidth>
      <Drawer
        title="Menu"
        placement="right"
        onClose={handleToggleDrawer}
        visible={showDrawer}
      >
        <nav>
          <MenuItems>
            {links.map(link => (
              <MenuItem key={snakeCase(link.name)}>
                <a href={link.url}>
                  <Icon type={link.icon} />
                  {link.name}
                </a>
              </MenuItem>
            ))}
          </MenuItems>
        </nav>
      </Drawer>
    </Container>
  )
}

export default Header
