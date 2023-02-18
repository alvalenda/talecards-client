import { DiceHundredRoll, RollTestPayload } from '@/common/types/dice-roll'
import { diceHundredRoll, diceTestHelper } from '@/common/utils/dice.helper'
import { OptionButton, OptionsBarContainer } from './styled'

export function OptionsBar() {
  function handleRoll() {
    const roll: DiceHundredRoll = diceHundredRoll()

    console.table(roll)
  }

  function handleTest(target: string) {
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
      <OptionButton onClick={handleRoll}>Rolar d100</OptionButton>
      <OptionButton onClick={() => handleTest('35')}>Fazer Teste</OptionButton>
    </OptionsBarContainer>
  )
}
