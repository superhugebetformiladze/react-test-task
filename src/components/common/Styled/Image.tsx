import styled from 'styled-components'

interface StylesProps {
  padding?: string
  margin?: string
  width?: string
  height?: string
  backgroundcolor?: string
  borderradius?: string
  objectfit?: string
}

const StyledImage = styled.img<StylesProps>`
  border-radius: ${(props) => props.borderradius || '0'};
  height: ${(props) => props.height || 'auto'};
  width: ${(props) => props.width || 'auto'};
  object-fit: ${(props) => props.objectfit || 'initial'};
  background-color: ${(props) => props.backgroundcolor || 'transparent'};
  margin: ${(props) => props.margin || '0'};
  padding: ${(props) => props.padding || '0'};
`

const Image = (props: any) => {
  return <StyledImage {...props} />
}

export default Image
