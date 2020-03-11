import styled from 'styled-components'
import { Row, Col } from 'antd'

export const Container = styled.section`
  padding: 100px 10px 0;
  min-height: 700px;
`

export const BoldText = styled.span`
  font-size: 50px;
  font-weight: 700;
  text-align: center;
`

export const Hr = styled.hr`
  width: 450px;
  border: none;
  border-bottom: 2px solid #000;
  margin-bottom: 80px;
`

export const ColoredText = styled.span`
  color: ${props => props.theme.colors.primary};
  font-size: 24px;
  font-weight: 700;
`

export const Text = styled.p``

export const Boxes = styled(Row)`
  margin-bottom: 120px;
`

export const Box = styled(Col)`
  display: flex;
  justify-content: center;
  text-align: left;

  hr {
    width: 100px;
    margin-left: 0;
  }
`
