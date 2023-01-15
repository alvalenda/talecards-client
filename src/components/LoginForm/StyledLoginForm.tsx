import styled from 'styled-components'

export const StyledLoginForm = styled.form`
  display: flex;
  position: relative;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .form-wrapper {
    position: relative;
    display: flex;
    width: 21rem;
    align-items: center;
    justify-content: space-between;
    margin: 0.4rem 0;
    gap: 0.5rem;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 15rem;
    flex-direction: row;
  }

  svg {
    vertical-align: middle;
    margin-right: 0.2rem;
  }

  label {
    text-align: start;
    vertical-align: middle;
  }

  input {
    width: 12rem;
    height: 1.8rem;
    padding: 0.5rem;
    border-radius: 12px;
    flex-basis: 1rem;
    font-size: var(--font-size-md);

    border: 2px solid transparent;
    outline: 1px solid ${({ theme }) => theme.colors.secondary};

    background-color: ${({ theme }) => theme.colors.background};

    color: ${({ theme }) => theme.colors.secondary};

    transition: var(--transition), border-color 0.3s ease;
  }

  input:focus {
    outline: none;

    border-color: ${({ theme }) => theme.colors.interactive};
  }

  .form-input-password {
    position: absolute;
    right: 3px;
    cursor: pointer;
  }
`
