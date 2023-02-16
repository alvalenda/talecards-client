import { TalecardsContext } from '@/contexts/talecards/TalecardsContext'
import {
  TalecardsAction,
  TalecardsState,
} from '@/contexts/talecards/TalecardsReducer'
import React, { useContext } from 'react'
import { MdDarkMode, MdLightMode } from 'react-icons/md'
import { StyledDarkButton, StyledLightButton } from './StyledThemeButton'

type Props = {}

export function ThemeButton({}: Props) {
  const { darkMode, dispatch } = useContext<{
    darkMode: Partial<TalecardsState>
    dispatch: React.Dispatch<TalecardsAction>
  }>(TalecardsContext as any)

  const handleDarkMode = () => {
    dispatch({ type: 'darkMode', payload: !darkMode })
    console.log('Dark Mode: ', darkMode)
  }

  if (darkMode) {
    return (
      <StyledDarkButton onClick={handleDarkMode}>
        <MdDarkMode size={25} />
      </StyledDarkButton>
    )
  }

  return (
    <StyledLightButton onClick={handleDarkMode}>
      <MdLightMode size={25} />
    </StyledLightButton>
  )
}
