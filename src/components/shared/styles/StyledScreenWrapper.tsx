import styled from 'styled-components'

export const ScreenWrapper = styled.section`
  display: flex;
  border-radius: 16px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.primary};

  transition: background-color 0.4s linear;
`
