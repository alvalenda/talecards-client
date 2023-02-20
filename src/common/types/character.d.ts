export interface Character {
  id?: string
  name: string
  description: string
  attributes: Array<Attributes>
}

export interface Player extends Character {
  avatar: string
  skills: Skills
  talents: Talents
  weapons: Weapons
  armors: Armors
  trappings: Inventory
  inventory: Inventory
  notes: Notes
  history: History
}

export interface NPC extends Character {}

export interface Monster extends Character {
  skills?: Skills[]
  talents?: Talents[]
  traits: Traits[]
  optionalTraits?: OptionalTraits[]
  specialAbilities?: SpecialAbility[]
  weapons?: Weapons[]
  armors?: Armors
  description: string
}

export type Attributes = {
  [key in Attribute]: AttributeValue
}

export type AttributeValue = {
  baseValue: number
  advances?: number
  short: AttributeShortValue
}

export type Characteristics = {
  [key in Characteristic]: CharacteristicValue
}

export type CharacteristicValue = {
  baseValue: number
  advances: number
  short: CharacteristicShortValue
}

export type Characteristic = [
  'CombateArmado',
  'Balística',
  'Força',
  'Robustez',
  'Iniciativa',
  'Agilidade',
  'Dextreza',
  'Inteligência',
  'Vontade',
  'Carisma'
]

export type Attribute = [
  ...Characteristic,
  'Ferimentos',
  'Destino',
  'Sorte',
  'Resiliência',
  'Determinação',
  'Motivação',
  'Movimento'
]

type CharacteristicShortValue = [
  'WS',
  'BS',
  'S',
  'T',
  'I',
  'Ag',
  'Dex',
  'Int',
  'WP',
  'Fel'
]

type AttributeShortValue = [
  ...CharacteristicShortValue,
  'W',
  'Fate',
  'Luck',
  'Res',
  'Det',
  'Mot',
  'M'
]

export type Skills = {
  [key in Skill]: SkillValue
}

export type SkillValue = {
  keyAtribute: Attribute
  advances: number
  specialization?: string
}

export type Skill =
  | 'Armas À Distância'
  | 'Armas Brancas'
  | 'Abrir Fechaduras'
  | 'Apostar'
  | 'Armar Armadilhas'
  | 'Arte'
  | 'Atletismo'
  | 'Avaliar'
  | 'Canalizar'
  | 'Charme'
  | 'Comércio'
  | 'Conhecimento'
  | 'Consumir Álcool'
  | 'Curar'
  | 'Encantar Animais'
  | 'Entreter'
  | 'Escalar'
  | 'Esquivar'
  | 'Fofocar'
  | 'Frieza'
  | 'Furtividade'
  | 'Intimidar'
  | 'Intuição'
  | 'Lidar com Animais'
  | 'Liderança'
  | 'Linguagem'
  | 'Montaria'
  | 'Nadar'
  | 'Navegar'
  | 'Pechinchar'
  | 'Percepção'
  | 'Performar'
  | 'Pesquisa'
  | 'Prestidigitação'
  | 'Pilotar'
  | 'Rastrear'
  | 'Remar'
  | 'Resistência'
  | 'Rezar'
  | 'Sinais Secretos'
  | 'Sobrevivência'
  | 'Subornar'
  | 'Tocar'
  | 'Treinar Animais'
  | 'Velejar'

export type Talents = {
  [key in Talent]: TalentValue
}

export type TalentValue = {
  name: string
  max: number
  tests?: string[]
  description: string
}

export type Talent = 'Aparência' | 'Conhecimento' | 'Conhecimento Mágico'
