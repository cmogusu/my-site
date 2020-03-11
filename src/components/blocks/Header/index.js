import React, { useState, useCallback } from 'react'
import snakeCase from 'lodash/snakeCase'
import { Drawer, Icon } from 'antd'
import MenuBurger from '~/components/blocks/MenuBurger'
import whiteLogo from '~/assets/images/logo-white.png'
import routes from '~/constants/routes'
import { Container, LimitWidth, Logo, MenuItems, MenuItem } from './style'

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
            {routes.map(route => (
              <MenuItem key={snakeCase(route.name)}>
                <a href={route.url}>
                  <Icon type={route.icon} />
                  {route.name}
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
