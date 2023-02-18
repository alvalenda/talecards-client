import {
  DiceHundredRoll,
  Modifier,
  RollTestPayload,
  RollTestResult,
} from '../types/dice-roll'
import {
  testFailureOutcomes,
  TestOutcome,
  testSuccessOutcomes,
} from './tests-variables'

export const diceTestHelper = (
  diceRoll: Required<RollTestPayload>,
  modifier: Modifier = 0
): RollTestResult => {
  let testResult: RollTestResult = {
    ...diceRoll,
    modifier,
    outcome: '',
    sl: 0,
  }

  testResult.target += testResult.modifier
  testResult.sl = (testResult.target - testResult.result) / 10

  testResult = { ...testResult, ...testOutcomeHelper(testResult.sl) }

  if (testResult.sl < 0 && testResult.result < 6) {
    testResult.outcome = 'Sucesso Automático'
  }

  if (testResult.sl > 0 && testResult.result > 95) {
    testResult.outcome = 'Falha Automática'
  }

  if (testResult.dices.tens === testResult.dices.ones) {
    testResult.outcome.substring(0, 5) === 'Falha'
      ? (testResult.outcome += ' Crítica')
      : (testResult.outcome += ' Crítico')
  }

  return testResult
}

export const diceHundredRoll = (): DiceHundredRoll => {
  const diceRoll: DiceHundredRoll = {
    dices: {
      tens: Math.floor(Math.random() * 10),
      ones: Math.floor(Math.random() * 10),
    },

    result: 0,
  }

  if (diceRoll.dices.tens === 0 && diceRoll.dices.ones === 0) {
    diceRoll.dices.tens = 10
  }

  diceRoll.result = diceRoll.dices.tens * 10 + diceRoll.dices.ones

  return diceRoll
}

export const testOutcomeHelper = (sl: number): TestOutcome => {
  let data: TestOutcome

  const realSl = sl > 6 ? 6 : sl < -6 ? -6 : parseInt(`${sl}`.split('.')[0])

  if (sl > 0) {
    data = testSuccessOutcomes[realSl]
  } else {
    data = testFailureOutcomes[Math.abs(realSl)]
  }
  data.sl = realSl

  return data
}
