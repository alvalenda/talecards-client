import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { StyledCard } from '@/components/styles/StyledCard'
import { ScreenWrapper } from '@/components/styles/StyledScreenWrapper'

type Props = {}

export function AboutPage({}: Props) {
  return (
    <ScreenWrapper>
      <Header />
      <StyledCard>
        <h1>About Page</h1>
      </StyledCard>
      <Footer />
    </ScreenWrapper>
  )
}
