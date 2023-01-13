import { prependOnceListener } from 'process'
import styled from 'styled-components'

type Props = {
  children?: React.ReactNode
  handleClick?: () => void
  style?: 'primary' | 'secondary'
}

const returnStyle = (style: string) => {
  return styled.button`
    border-radius: 8px;
    padding: 0.3em 0.6em;
    font-size: ${(props) => props.theme.fontSizes.small};
    font-family: inherit;
    font-weight: 400;

    border: ${style === 'primary' ? '2px solid transparent' : '2px solid'};

    background-color: ${style === 'primary'
      ? (props) => props.theme.colors.buttonPrimary
      : (props) => props.theme.colors.buttonSecondary};

    color: ${style === 'primary'
      ? (props) => props.theme.colors.buttonSecondary
      : (props) => props.theme.colors.buttonPrimary};

    cursor: pointer;
    transition: all 0.8s ease-in, border-color 0.4s ease-in, color 0.4s ease-in;

    &:hover {
      border-color: ${(props) => props.theme.colors.interactive};

      color: ${(props) => props.theme.colors.interactive};
    }

    &:focus,
    &:focus-visible {
      border-color: ${(props) => props.theme.colors.interactive};

      color: ${(props) => props.theme.colors.interactive};
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
