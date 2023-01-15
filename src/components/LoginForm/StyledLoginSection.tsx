import styled from 'styled-components'

export const StyledLoginSection = styled.section`
  position: relative;
  align-items: center;
  align-content: center;
  vertical-align: middle;
  border-radius: 12px;
  box-shadow: 0px 0px 3px 1px ${({ theme }) => theme.colors.secondary};
  margin: 12em auto 2em auto;
  padding: 2em 0 0 0;

  height: calc(35rem);
  width: var(--container-width-lg);
  max-width: 40em;

  background-color: ${({ theme }) => theme.colors.backgroundVar};
  color: ${({ theme }) => theme.colors.secondary};

  transition: --var(--transition);

  @media screen and (max-width: 1024px) {
    width: var(--container-width-md);
  }

  @media screen and (max-width: 768px) {
    width: var(--container-width-sm);
  }
`
