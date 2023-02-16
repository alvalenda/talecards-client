import { createContext, useReducer } from 'react'
import { talecardsReducer } from './TalecardsReducer'

export const TalecardsContext = createContext({})

export const TalecardsProvider = ({ children }: any) => {
  const initialState = {
    darkMode: true,
  }

  const [state, dispatch] = useReducer(talecardsReducer, initialState)

  return (
    <TalecardsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </TalecardsContext.Provider>
  )
}
