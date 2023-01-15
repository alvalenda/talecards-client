import styled from 'styled-components'

export const HeaderSection = styled.header`
  position: fixed;
  top: 0.5em;
  left: 0.5em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  border-radius: 16px 16px 0 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary};

  height: 4em;
  width: calc(100% - 1em);
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.primary};

  h1 {
    font-size: var(--font-size-xxxl);
    font-weight: 300;
  }

  .theme {
    position: absolute;
    top: 1rem;
    right: calc(50% - 12em);
  }

  transition: var(--transition);
`
