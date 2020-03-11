import styled from 'styled-components'
import { Row } from 'antd'

export const Container = styled.div`
  background: #fff;
  .left {
    text-align: left;
  }

  .right {
    text-align: right;
  }
`

export const LimitWidth = styled.div`
  max-width: 1200px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 15px 0 30px;
`

export const NavSection = styled(Row)`
  margin-bottom: 30px;
`

export const AboutSection = styled(Row)`
  margin-bottom: 30px;
`

export const Logo = styled.img`
  width: 70px;
  height: 70px;
  opacity: 0.7;
  transform: translateY(10px);
`

export const Nav = styled.nav`
  display: flex;
  justify-content: right;
  margin-right: -10px;
`

export const MenuItem = styled.a`
  padding: 10px;
  text-transform: uppercase;
  color: ${props => props.theme.colors.link};
  transition: color 0.5s;

  &:hover {
    color: ${props => props.theme.colors.linkHover};
  }
`

export const SocialMediaAccounts = styled.nav`
  display: flex;
  justify-content: flex-end;
`

export const SocialMediaAccount = styled.a`
  height: 40px;
  width: 40px;
  display: block;
  border: 1px solid #333;
  border-radius: 50%;
  margin-left: 10px;
`
