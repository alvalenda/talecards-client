import styled from 'styled-components'

type Props = {}

const StyledTitle = styled.h1`
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.primary};
  font-size: ${(props) => props.theme.fontSizes.xlarge};
  line-height: 1.1;
  text-align: center;
  transition: all 0.8s ease-in;
`

export function Title({}: Props) {
  return (
    <div>
      <StyledTitle>Hello World of Styled Components!</StyledTitle>
    </div>
  )
}
