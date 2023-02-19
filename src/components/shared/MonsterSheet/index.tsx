import React from 'react'
import { MonsterSheetCard } from './styled'

export function MonsterSheet({}: Props) {
  // component for MonsterSheet in WFRP 4e system

  /*
  Melhor forma de mostrar as características por aqui. Dentro deste card terá um grid com as siglas das características e seus valores abaixo das siglas. Em seguida, um espaço para as Traits e Skills. E por fim, um espaço para descrição. Armadura é apresentada em Traits e as Armas em Traits Ofensivos, uma categoria separada contendo traits que são ataques. No final, pode haver uma área para Traits sugeridos para o monstro, como "Ferocious" ou "Fearless" ou "Frenzy" ou "Regeneration" ou "Tough" ou "Vulnerable to Magic" ou "Vulnerable to Fire" ou "Vulnerable to Cold" ou "Vulnerable to Poison" ou "Vulnerable to Disease" ou "Vulnerable to Light" ou "Vulnerable to Darkness" ou "Vulnerable to Sound" ou "Vulnerable to Light".
  */
  return (
    <>
      <MonsterSheetCard>
        <h2>Monster Name</h2>

        <div className="monster-sheet-card__characteristics">
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
        </div>

        {/* traits agora */}
      </MonsterSheetCard>
    </>
  )
}

type Props = {}
