export const talecardsReducer = (
  state: TalecardsState,
  action: TalecardsAction
) => {
  switch (action.type) {
    case 'darkMode':
      return {
        ...state,
        darkMode: action.payload,
      }

    default:
      return state
  }
}

export type TalecardsState = {
  darkMode: boolean
}

export type TalecardsAction = {
  type: 'darkMode'
  payload: boolean
}
