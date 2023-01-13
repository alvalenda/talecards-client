import { prependOnceListener } from 'process'
import styled from 'styled-components'

type Props = {
  children?: React.ReactNode
  handleClick?: () => void
  style?: 'primary' | 'secondary'
}

const returnStyle = (bType: string) => {
  return styled.button`
    border-radius: 8px;
    padding: 0.3em 0.6em;
    font-size: ${(props) => props.theme.fontSizes.small};
    font-family: inherit;
    font-weight: 400;

    border: ${bType === 'primary' ? '2px solid transparent' : '2px solid'};

    background-color: ${bType === 'primary'
      ? (props) => props.theme.colors.buttonPrimary
      : (props) => props.theme.colors.buttonSecondary};

    color: ${bType === 'primary'
      ? (props) => props.theme.colors.buttonSecondary
      : (props) => props.theme.colors.buttonPrimary};

    cursor: pointer;
    transition: all 0.3s linear;

    &:hover,
    /* &:focus, */
    &:focus-visible {
      outline: none;
      border-color: ${(props) => props.theme.colors.interactive};

      background-color: ${bType === 'primary'
        ? (props) => props.theme.colors.interactive
        : ''};

      color: ${bType === 'secondary'
        ? (props) => props.theme.colors.interactive
        : ''};
    }
  `
}

export function Button({
  children = 'Button',
  handleClick = () => {
    console.log('Clicked')
  },
  style = 'primary',
}: Props) {
  const StyledButton = returnStyle(style)

  return <StyledButton onClick={handleClick}>{children}</StyledButton>
}
