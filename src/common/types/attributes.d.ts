export type Attribute = {
  name: AttributeName | CharacteristicName
  name_br: AttributeBR | CharacteristicBR
  baseValue: number
  advances: number
  short: AttributeShort | CharacteristicShort
}

export type Characteristic = {
  name: CharacteristicName
  name_br: CharacteristicBR
  baseValue: number
  advances: number
  short: CharacteristicShort | 'M' | 'W'
}

export type CharacteristicName =
  | 'Weapon Skill'
  | 'Ballistic Skill'
  | 'Strength'
  | 'Toughness'
  | 'Initiative'
  | 'Agility'
  | 'Dexterity'
  | 'Intelligence'
  | 'Will Power'
  | 'Fellowship'
  | 'Movement'
  | 'Wounds'

export type CharacteristicBR =
  | 'Combate Armado'
  | 'Balística'
  | 'Força'
  | 'Robustez'
  | 'Iniciativa'
  | 'Agilidade'
  | 'Destreza'
  | 'Inteligência'
  | 'Vontade'
  | 'Carisma'
  | 'Movimento'
  | 'Ferimentos'

export type AttributeName = 'Fate' | 'Fortune' | 'Resilience' | 'Resolve'
// | 'Motivation'

export type AttributeBR = 'Destino' | 'Sorte' | 'Resiliência' | 'Determinação'
// | 'Motivação'

export type CharacteristicShort =
  | 'WS'
  | 'BS'
  | 'S'
  | 'T'
  | 'I'
  | 'Ag'
  | 'Dex'
  | 'Int'
  | 'WP'
  | 'Fel'

export type AttributeShort = 'W' | 'Fate' | 'For' | 'Res' | 'Det' | 'M'
