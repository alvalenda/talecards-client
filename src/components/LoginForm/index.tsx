import styled from 'styled-components'
import { FaHatWizard } from 'react-icons/fa'
import { MdLock, MdRemoveRedEye } from 'react-icons/md'
import { IoEyeOff } from 'react-icons/io5'
import { useState } from 'react'

type Props = {
  children?: React.ReactNode
}

const StyledLoginSection = styled.section`
  position: relative;
  align-items: center;
  align-content: center;
  vertical-align: middle;
  border-radius: 12px;
  box-shadow: 0px 0px 3px 1px ${({ theme }) => theme.colors.secondary};
  margin: 12em auto 2em auto;
  padding: 2em 0 0 0;

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
    font-size: ${({ theme }) => theme.fontSizes.small};

    border: 2px solid transparent;
    outline: 1px solid ${({ theme }) => theme.colors.secondary};

    background-color: ${({ theme }) => theme.colors.background};

    color: ${({ theme }) => theme.colors.secondary};

    transition: background-color 0.4s linear, border-color 0.3s ease;
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

export function LoginForm({ children }: Props) {
  const [showPassword, setShowPassword] = useState(false)

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <StyledLoginSection>
      <StyledLoginForm>
        <div className="form-wrapper">
          <div>
            <FaHatWizard size={24} />
            <label htmlFor="inputEmail">EMAIL</label>
          </div>
          <input type="email" name="email" id="email" />
        </div>
        <div className="form-wrapper">
          <div>
            <MdLock size={24} />
            <label htmlFor="inputPassword">PASSWORD</label>
          </div>
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            id="password"
          />

          {showPassword ? (
            <IoEyeOff
              size={22}
              className={'form-input-password'}
              onClick={handleShowPassword}
            />
          ) : (
            <MdRemoveRedEye
              size={22}
              className={'form-input-password'}
              onClick={handleShowPassword}
            />
          )}
        </div>
      </StyledLoginForm>

      {children}
    </StyledLoginSection>
  )
}
