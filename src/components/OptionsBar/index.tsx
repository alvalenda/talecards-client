import {
  Advantage,
  DiceHundredRoll,
  Modifier,
  RollCombatTestPayload,
  RollTestPayload,
} from '@/common/types/dice-roll'
import {
  diceHundredCombatTestHelper,
  diceHundredRoll,
  diceTestHelper,
} from '@/common/utils/helpers/dice.helper'
import { testDifficult, TestDifficult } from '@/common/utils/test-objects'
import { OptionButton, OptionsBarContainer } from './styled'

export function OptionsBar() {
  function handleRoll() {
    const roll: DiceHundredRoll = diceHundredRoll()

    console.table(roll)
  }

  function handleTest(
    target: string,
    difficult: TestDifficult = testDifficult[3],
    modifier: Modifier = 0
  ) {
    const roll: Required<RollTestPayload> = {
      ...diceHundredRoll(),
      ...{ target: parseInt(target), difficult, modifier },
    }

    const rollTest = diceTestHelper(roll)

    console.table(rollTest)
  }

  function handleCombatTest(
    target: string,
    modifier: string,
    advantage: string,
    difficult: TestDifficult = testDifficult[3]
  ) {
    const roll: RollCombatTestPayload = {
      ...diceHundredRoll(),
      ...{
        target: +target,
        modifier: +modifier as Modifier,
        advantage: parseInt(advantage) as Advantage,
        difficult,
      },
    }

    const rollTest = diceHundredCombatTestHelper(roll)

    console.table(rollTest)
  }

  return (
    <OptionsBarContainer>
      <OptionButton onClick={() => handleCombatTest('40', '0', '1')}>
        Combat Test
      </OptionButton>
      <OptionButton onClick={() => handleTest('50')}>Fazer Teste</OptionButton>
      <OptionButton onClick={handleRoll}>Rolar d100</OptionButton>
    </OptionsBarContainer>
  )
}
