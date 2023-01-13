import { useContext } from 'react'
import { MdDarkMode, MdLightMode } from 'react-icons/md'
import styled from 'styled-components'
import { TalespireContext } from '@/contexts/talespire/TalespireContext'
import { TalespireAction } from '@/contexts/talespire/TalespireReducer'

type Props = {}

const getStyle = (darkMode: boolean) => {
  return styled.button`
    border-radius: 50%;
    border: 2px solid transparent;
    padding: 0;
    width: 2.4em;
    height: 2.4em;
    font-size: ${(props) => props.theme.fontSizes.xsmall};
    background-color: ${(props) => props.theme.colors.buttonPrimary};
    color: ${(props) => props.theme.colors.background};
    cursor: pointer;
    transition: all 0.3s linear;

    svg {
      vertical-align: middle;
      align-self: center;
    }

    &:hover,
    &:focus-visible {
      outline: none;

      border-color: ${(props) => props.theme.colors.interactive};

      background-color: ${!darkMode
        ? (props) => props.theme.colors.interactive
        : ''};

      /* color: ${darkMode ? (props) => props.theme.colors.interactive : ''}; */
    }
  `
}

export function ThemeButton({}: Props) {
  const { darkMode, dispatch } = useContext<{
    darkMode: boolean
    dispatch: React.Dispatch<TalespireAction>
  }>(TalespireContext as any)

  const StyledThemeButton = getStyle(darkMode)

  const handleDarkMode = () => {
    dispatch({ type: 'darkMode', payload: !darkMode })
    console.log('Dark Mode: ', darkMode)
  }

  return (
    <StyledThemeButton onClick={handleDarkMode}>
      {darkMode ? <MdLightMode size={25} /> : <MdDarkMode size={25} />}
    </StyledThemeButton>
  )
}
