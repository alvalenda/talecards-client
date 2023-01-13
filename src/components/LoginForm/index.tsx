import styled from 'styled-components'

type Props = {
  children?: React.ReactNode
}

const StyledLoginSection = styled.section`
  position: relative;
  align-items: center;
  align-content: center;
  vertical-align: middle;
  border-radius: 8px;
  margin: 12em auto 2em auto;
  padding: 0;

  height: calc(35rem);
  width: calc(90vw - 4em);
  max-width: 40em;

  background-color: ${({ theme }) => theme.colors.backgroundVar};
  color: ${({ theme }) => theme.colors.secondary};

  transition: background-color 0.4s linear;
`

const StyledLoginForm = styled.form`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;

  .login-wrapper {
    position: absolute;
    width: 30rem;
    top: 5rem;
    left: calc(50% - 8rem);
  }

  label {
    text-align: start;
  }

  .password-wrapper {
    position: absolute;
    width: 30rem;
    top: 7rem;
    left: calc(50% - 10.3rem);
  }
`

export function LoginForm({ children }: Props) {
  return (
    <StyledLoginSection>
      <StyledLoginForm>
        <div className="login-wrapper">
          <label htmlFor="inputEmail">EMAIL</label>
          <input type="email" name="email" id="email" />
        </div>
        <div className="password-wrapper">
          <label htmlFor="inputPassword">PASSWORD</label>
          <input type="password" name="password" id="password" />
        </div>
      </StyledLoginForm>

      {children}
    </StyledLoginSection>
  )
}

// TODO - Add a button to show/hide password
// Criar um container para email e password, e seus labels. Dividir em duas colunas e duas linhas. Alinhas labels no começo e inputs no fim. Colocar um espaço entre eles. Colocar um espaço entre o container e o botão.
