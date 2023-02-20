import {
  MonsterSheetCard,
  MonsterSheetCardName,
  MonsterSheetCharacteristics,
  MonsterSheetTraits,
  MonsterSheetTraitItem,
  MonsterSheetTraitLabel,
  MonsterSheetTraitValue,
  MonsterSheetSkills,
  MonsterSheetSkillLabel,
  MonsterSheetSkillValue,
  MonsterSheetTalents,
  MonsterSheetTalentLabel,
  MonsterSheetTalentValue,
  MonsterSheetDescription,
  MonsterSheetDescriptionLabel,
  MonsterSheetDescriptionValue,
} from './styled'
import { Monster } from '@/common/types/character'

export function MonsterSheet(monster: Monster = defaultMonster) {
  return (
    <>
      <MonsterSheetCard>
        <MonsterSheetCardName>Monster Sample</MonsterSheetCardName>

        <MonsterSheetCharacteristics>
          <div className="monster-sheet-card__characteristics__item">
            <span className="monster-sheet-card__characteristics__item__label">
              M
            </span>
            <span className="monster-sheet-card__characteristics__item__value">
              0
            </span>
          </div>
          <div className="monster-sheet-card__characteristics__item">
            <span className="monster-sheet-card__characteristics__item__label">
              WS
            </span>
            <span className="monster-sheet-card__characteristics__item__value">
              0
            </span>
          </div>
          <div className="monster-sheet-card__characteristics__item">
            <span className="monster-sheet-card__characteristics__item__label">
              BS
            </span>
            <span className="monster-sheet-card__characteristics__item__value">
              0
            </span>
          </div>
          <div className="monster-sheet-card__characteristics__item">
            <span className="monster-sheet-card__characteristics__item__label">
              S
            </span>
            <span className="monster-sheet-card__characteristics__item__value">
              0
            </span>
          </div>
          <div className="monster-sheet-card__characteristics__item">
            <span className="monster-sheet-card__characteristics__item__label">
              T
            </span>
            <span className="monster-sheet-card__characteristics__item__value">
              0
            </span>
          </div>

          <div className="monster-sheet-card__characteristics__item">
            <span className="monster-sheet-card__characteristics__item__label">
              Ag
            </span>
            <span className="monster-sheet-card__characteristics__item__value">
              0
            </span>
          </div>
          <div className="monster-sheet-card__characteristics__item">
            <span className="monster-sheet-card__characteristics__item__label">
              Int
            </span>
            <span className="monster-sheet-card__characteristics__item__value">
              0
            </span>
          </div>
          <div className="monster-sheet-card__characteristics__item">
            <span className="monster-sheet-card__characteristics__item__label">
              WP
            </span>
            <span className="monster-sheet-card__characteristics__item__value">
              0
            </span>
          </div>
          <div className="monster-sheet-card__characteristics__item">
            <span className="monster-sheet-card__characteristics__item__label">
              Fel
            </span>
            <span className="monster-sheet-card__characteristics__item__value">
              0
            </span>
          </div>

          <div className="monster-sheet-card__characteristics__item">
            <span className="monster-sheet-card__characteristics__item__label">
              A
            </span>
            <span className="monster-sheet-card__characteristics__item__value">
              0
            </span>
          </div>
          <div className="monster-sheet-card__characteristics__item">
            <span className="monster-sheet-card__characteristics__item__label">
              W
            </span>
            <span className="monster-sheet-card__characteristics__item__value">
              0
            </span>
          </div>
        </MonsterSheetCharacteristics>

        <MonsterSheetTraits>
          <MonsterSheetTraitItem>
            <MonsterSheetTraitLabel>Traços Ofensivos</MonsterSheetTraitLabel>
            <MonsterSheetTraitValue>Arma (Espada)</MonsterSheetTraitValue>
            <MonsterSheetTraitValue>Arma (Garra)</MonsterSheetTraitValue>
          </MonsterSheetTraitItem>

          <MonsterSheetTraitItem>
            <MonsterSheetTraitLabel>Traços</MonsterSheetTraitLabel>
            <MonsterSheetTraitValue>Armadura 1 (2)</MonsterSheetTraitValue>
            <MonsterSheetTraitValue>Territorial</MonsterSheetTraitValue>
            <MonsterSheetTraitValue>Morto-Vivo</MonsterSheetTraitValue>
          </MonsterSheetTraitItem>
        </MonsterSheetTraits>

        <MonsterSheetSkills>
          <MonsterSheetSkillLabel>Habilidades</MonsterSheetSkillLabel>
          <MonsterSheetSkillValue>Percepção +3</MonsterSheetSkillValue>
          <MonsterSheetSkillValue>Furtividade +5</MonsterSheetSkillValue>
          <MonsterSheetSkillValue>Intimidação +6</MonsterSheetSkillValue>
        </MonsterSheetSkills>

        <MonsterSheetTalents>
          <MonsterSheetTalentLabel>Talentos</MonsterSheetTalentLabel>
          <MonsterSheetTalentValue>Ataque Furtivo</MonsterSheetTalentValue>
          <MonsterSheetTalentValue>Ataque Surpresa</MonsterSheetTalentValue>
        </MonsterSheetTalents>

        <MonsterSheetDescription>
          <MonsterSheetDescriptionLabel>Descrição</MonsterSheetDescriptionLabel>
          <MonsterSheetDescriptionValue>
            Um monstro que vive na floresta
          </MonsterSheetDescriptionValue>
        </MonsterSheetDescription>
      </MonsterSheetCard>
    </>
  )
}

const defaultMonster: Monster = {
  name: 'Monster Sample',
  attributes: [
    { Movimento: { baseValue: 3, advances: 0, short: 'M' } },
    { CombateArmado: { baseValue: 32, advances: 0, short: 'WS' } },
    { Balística: { baseValue: 28, advances: 0, short: 'BS' } },
    { Força: { baseValue: 40, advances: 0, short: 'S' } },
    { Robustez: { baseValue: 42, advances: 0, short: 'T' } },
    { Iniciativa: { baseValue: 30, advances: 0, short: 'I' } },
    { Agilidade: { baseValue: 33, advances: 0, short: 'Ag' } },
    { Destreza: { baseValue: 40, advances: 0, short: 'Dex' } },
    { Inteligência: { baseValue: 30, advances: 0, short: 'Int' } },
    { Vontade: { baseValue: 30, advances: 0, short: 'WP' } },
    { Carisma: { baseValue: 30, advances: 0, short: 'Fel' } },
    { Ferimentos: { baseValue: 15, advances: 0, short: 'W' } },
  ],
  traits: [],
  skills: [],
  talents: [],
  description: 'Um monstro que vive na floresta',
}
