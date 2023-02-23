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
import { MonsterSampleSheet } from '@/common/utils/monster-objects'

const defaultProps = {
  monster: MonsterSampleSheet,
}

export function MonsterSheet(props: Props) {
  const monster: Monster = props.monster ?? defaultProps.monster

  // console.log(props.monster)
  // console.log(defaultProps.monster)

  return (
    <>
      <MonsterSheetCard>
        <MonsterSheetCardName>Monster Sample</MonsterSheetCardName>

        <MonsterSheetCharacteristics>
          {monster?.attributes.map((attribute, i) => (
            <div className="monster-sheet-card__characteristics__item" key={i}>
              <span className="monster-sheet-card__characteristics__item__label">
                {attribute.short}
              </span>
              <span className="monster-sheet-card__characteristics__item__value">
                {attribute.baseValue}
              </span>
            </div>
          ))}
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

type Props = {
  monster?: Monster
}
