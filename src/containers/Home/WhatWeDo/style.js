import styled from 'styled-components'

export const Container = styled.section`
  padding: 100px 10px;
  min-height: 700px;
`

export const Title = styled.h3`
  font-size: 30px;
  margin-bottom: 80px;
  font-weight: 700;
`

export const Hr = styled.hr`
  width: 450px;
  border: none;
  border-bottom: 2px solid #000;
  margin-bottom: 80px;
`

export const Paragraph = styled.p`
  margin-bottom: 20px;
`

export const ColoredText = styled.span`
  color: ${props => props.theme.colors.primary};
`

export const Img = styled.img`
  width: 100%;
`

export const Images = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 100px;
`

export const ImageContainer = styled.span`
  display: block;
  margin-left: 5px;
  text-align: left;
`

export const ImgText = styled.span`
  display: block;
  margin-top: 10px;
`

export const ViewMore = styled.button`
  padding: 5px 20px;
  background: ${props => props.theme.colors.primary};
  color: #fff;
  font-weight: 777;
  border: 1px solid #eee;
  border-radius: ${props => props.theme.borderRadius};
`
