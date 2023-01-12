import styled from 'styled-components'

type Props = {}

const StyledTitle = styled.h1`
  font-size: ${(props) => props.theme.fontSizes.xlarge};
  line-height: 1.1;
  color: ${(props) => props.theme.colors.textPrimary};
  background-color: ${(props) => props.theme.colors.background};
  transition: all 0.66s ease-in-out;
`

export function Title({}: Props) {
  return (
    <div>
      <StyledTitle>Hello World of Styled Components!</StyledTitle>
    </div>
  )
}
