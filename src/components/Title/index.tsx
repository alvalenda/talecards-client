import styled from 'styled-components'

type Props = {}

const StyledTitle = styled.h1`
  font-size: 3.2em;
  line-height: 1.1;
  color: rgba(255, 255, 255, 0.8);
  background-color: rgba(0, 0, 0, 0.8);
`

export function Title({}: Props) {
  return (
    <div>
      <StyledTitle>Hello World of Styled Components!</StyledTitle>
    </div>
  )
}
