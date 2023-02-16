import styled from 'styled-components'

export const OptionsBarContainer = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  padding-left: 50px;
  width: 100%;
  box-shadow: 0 0 5px 0 rgba(255, 255, 255, 0.2), 0 0 5px 0 rgba(0, 0, 0, 0.2);

  background-color: ${({ theme }) => theme.colors.backgroundVar};
`

export const OptionButton = styled.button`
  border: none;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.primary};
  outline: 1px solid ${({ theme }) => theme.colors.primary};
  padding: 10px 20px;
  margin: 10px;
  border-radius: 5px;
  font-weight: bold;

  &:hover {
    background-color: ${({ theme }) => theme.colors.interactive};
    color: var(--color-white);
  }
`
