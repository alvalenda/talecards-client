import { RollTestPayload } from '@/common/types/dice-roll'
import { diceHundredRoll, diceTestHelper } from '@/common/utils/dice.helper'
import { OptionButton, OptionsBarContainer } from './styled'

export function OptionsBar() {
  function handleRoll(target: string) {
    const roll: Required<RollTestPayload> = {
      ...diceHundredRoll(),
      ...{ target: parseInt(target) || 0 },
    }

    const rollTest = diceTestHelper(roll)

    console.table(rollTest)
  }

  return (
    <OptionsBarContainer>
      <OptionButton>Option 1</OptionButton>
      <OptionButton>Option 2</OptionButton>
      <OptionButton onClick={() => handleRoll('50')}>Rolar d100</OptionButton>
    </OptionsBarContainer>
  )
}
