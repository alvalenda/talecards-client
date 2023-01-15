import styled from 'styled-components'

export const StyledFooter = styled.section`
  width: 100vw;
  height: 6rem;
  background-color: ${({ theme }) => theme.colors.background};
  z-index: 1;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

  img {
    margin-top: 0.8rem;
    width: 4rem;
  }
`
