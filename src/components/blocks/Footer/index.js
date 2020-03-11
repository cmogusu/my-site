import React from 'react'
import snakeCase from 'lodash/snakeCase'
import { Icon, Col } from 'antd'
import logo from '~/assets/images/logo.png'
import routes from '~/constants/routes'
import accounts from '~/constants/socialMediaAccounts'
import {
  Container,
  LimitWidth,
  Logo,
  Nav,
  NavSection,
  AboutSection,
  MenuItem,
  SocialMediaAccounts,
  SocialMediaAccount,
} from './style'

const Footer = () => (
  <Container>
    <LimitWidth>
      <NavSection align="top" justify="space-between">
        <Logo alt="logo" src={logo} />
        <div>
          <Nav>
            {routes.map(route => (
              <MenuItem href={route.href} key={snakeCase(route.url)}>
                {route.name}
              </MenuItem>
            ))}
          </Nav>
          <SocialMediaAccounts>
            {accounts.map(account => (
              <SocialMediaAccount
                href={account.href}
                key={snakeCase(account.name)}
              >
                <Icon type={account.type} />
              </SocialMediaAccount>
            ))}
          </SocialMediaAccounts>
        </div>
      </NavSection>
      <AboutSection align="top" justify="space-between">
        <Col className="left" span={12}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          <br />
          Quis nostrud exercitation ullamco laboris nisi ut aliquip ex.
          <br />
          Excepteur sint occaecat cupidatat non proident.
        </Col>
        <Col className="right" span={12}>
          <strong>Call (+254) 784 889177</strong>
          <br />
          <strong>Ut enim</strong> ad minim veniam, quis nostrud exercitation
          ullamco
          <br />
          <strong>Sed</strong> ut perspiciatis unde omnis iste natus error
          <br />
          <strong>Nemo</strong> enim ipsam voluptatem
        </Col>
      </AboutSection>
    </LimitWidth>
  </Container>
)

export default Footer
