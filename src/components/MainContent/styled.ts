import styled from 'styled-components'

export const MainContentContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.background};
  overflow: hidden;
  z-index: 0;

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
`

export const MainContentTitleContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 8rem;
  margin-top: 10px;
`

export const MainContentTitle = styled.h1`
  font-size: var(--font-size-xxxl);
  text-align: center;
  margin-top: 10px;
  color: ${({ theme }) => theme.colors.primary};
`
