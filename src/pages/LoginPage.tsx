import { LoginForm } from '@/components/LoginForm'
import { Button } from '@/components/shared/Button'
import { Header } from '@/components/Header'
import { ScreenWrapper } from '@/components/shared/styles/StyledScreenWrapper'
import styled from 'styled-components'

type Props = {}

export function LoginPage({}: Props) {
  return (
    <ScreenWrapper>
      <Header />
      <LoginForm>
        <ButtonsWrapper>
          <Button style="primary" text="Faço Nada" />
          <Button style="secondary" text="Faço Tudo" />
        </ButtonsWrapper>
      </LoginForm>
    </ScreenWrapper>
  )
}

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  place-items: center;
  margin: 2rem auto 0 auto;
  width: 16em;
`
