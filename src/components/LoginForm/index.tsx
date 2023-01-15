import styled from 'styled-components'
import { FaHatWizard } from 'react-icons/fa'
import { MdLock, MdRemoveRedEye } from 'react-icons/md'
import { IoEyeOff } from 'react-icons/io5'
import { useState } from 'react'
import { StyledLoginSection } from './StyledLoginSection'
import { StyledLoginForm } from './StyledLoginForm'

type Props = {
  children?: React.ReactNode
}

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
