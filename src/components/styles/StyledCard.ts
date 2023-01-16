import styled from 'styled-components'

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  width: calc(50%);
  height: 100%;
  min-width: 320px;
  min-height: 480px;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  margin: auto auto;
  z-index: 0;

  background-color: ${({ theme }) => theme.colors.backgroundVar};

  h1 {
    font-size: var(--font-size-xxl);
    font-weight: 600;
    margin-top: 1rem;
  }
`
