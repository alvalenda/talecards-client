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
  const testResult: RollTestResult = {
    ...diceRoll,
    modifier,
    outcome: '',
    sl: 0,
  }

  testResult.target = 50 + testResult.modifier
  testResult.sl = (testResult.target - testResult.result) / 10

  testResult.outcome = testOutcomeHelper(testResult.sl).outcome

  if (
    testResult.sl < 0 &&
    testResult.dices.tens === 0 &&
    testResult.dices.ones <= 5
  ) {
    testResult.outcome = 'SUCESSO'
  }

  if (
    testResult.sl >= 0 &&
    testResult.dices.tens === 9 &&
    testResult.dices.ones >= 6
  ) {
    testResult.outcome = 'FALHA'
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
  const realSl =
    Math.floor(sl) > 6 ? 6 : Math.floor(sl) < -6 ? -6 : Math.floor(sl)

  console.log(realSl)

  if (sl > 0) {
    const data = testSuccessOutcomes.find((outcome) => {
      return outcome.sl.includes(realSl)
    })

    if (!data) {
      console.error('Test outcome not found')
      return { sl: [0], outcome: 'Sucesso' }
    }

    return data
  }

  const data = testFailureOutcomes.find((outcome) => {
    return outcome.sl.includes(realSl)
  })

  if (!data) {
    console.error('Test outcome not found')
    return { sl: [0], outcome: 'Falha' }
  }

  return data
}
