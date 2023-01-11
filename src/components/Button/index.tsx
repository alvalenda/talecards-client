import styled from 'styled-components'

type Props = {}

const StyledButton = styled.button`
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: ${(props) => props.theme.colors.buttonPrimary};
  color: ${(props) => props.theme.colors.buttonPrimaryText};
  cursor: pointer;
  transition: border-color 0.25s;

  &:hover {
    border-color: ${(props) => props.theme.colors.primary};
  }

  &:focus,
  &:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }

  @media (prefers-color-scheme: light) {
    button {
      background-color: #f9f9f9;
    }
  }
`
export default function Button({}: Props) {
  return <StyledButton>Button</StyledButton>
}
