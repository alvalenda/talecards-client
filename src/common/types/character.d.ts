export interface Character {
  id?: string
  name: string
  description: string
  attributes: Attributes
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
  attributes: Characteristics
  skills?: Skills[]
  talents?: Talents
  traits: Traits[]
  optionalTraits?: Traits[]
  specialAbilities?: string[]
  weapons?: Weapons[]
  armors?: Armors[]
}

// chave deve estar em Attribute
export type Attributes = AttributeValue[]

export type AttributeValue = {
  name: Attribute | Characteristic
  name_br: AttributeBR | CharacteristicBR
  baseValue: number
  advances?: number
  short: AttributeShort | CharacteristicShort
}

export type Characteristics = CharacteristicValue[]

export type CharacteristicValue = {
  name: Characteristic
  name_br: CharacteristicBR
  baseValue: number
  advances: number
  short: CharacteristicShort | 'M' | 'W'
}

export type Characteristic =
  | 'Weapon Skill'
  | 'Ballistic Skill'
  | 'Strength'
  | 'Toughness'
  | 'Iniciative'
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
  | 'Dextreza'
  | 'Inteligência'
  | 'Vontade'
  | 'Carisma'
  | 'Movimento'
  | 'Ferimentos'

export type Attribute =
  | 'Fate'
  | 'Fortune'
  | 'Resilience'
  | 'Resolve'
  | 'Motivation'

export type AttributeBR =
  | 'Destino'
  | 'Sorte'
  | 'Resiliência'
  | 'Determinação'
  | 'Motivação'

type CharacteristicShort =
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

type AttributeShort = 'W' | 'Fate' | 'For' | 'Res' | 'Det' | 'Mot' | 'M'

export type Skills = Skill[]

export type Skill = {
  name: SkillName | string
  name_br: SkillName | string
  keyAtribute: Omit<Characteristic, 'Movement' | 'Wounds'>
  advances: number
  specialization?: string
}

export type SkillName =
  | 'Animal Care'
  | 'Animal Training'
  | 'Athletics'
  | 'Art'
  | 'Bribery'
  | 'Channelling'
  | 'Charm'
  | 'Charm Animal'
  | 'Climb'
  | 'Consume Alcohol'
  | 'Cool'
  | 'Dodge'
  | 'Drive'
  | 'Endurance'
  | 'Entertain'
  | 'Evaluate'
  | 'Gamble'
  | 'Gossip'
  | 'Heal'
  | 'Haggle'
  | 'Intimidate'
  | 'Intuition'
  | 'Language'
  | 'Leadership'
  | 'Lore'
  | 'Melee'
  | 'Navigation'
  | 'Outdoor Survival'
  | 'Perception'
  | 'Perform'
  | 'Pick Lock'
  | 'Play'
  | 'Pray'
  | 'Ranged'
  | 'Research'
  | 'Ride'
  | 'Row'
  | 'Secret Signs'
  | 'Set Trap'
  | 'Sleight of Hand'
  | 'Stealth'
  | 'Swim'
  | 'Track'
  | 'Trade'
  | 'Sail'
  | 'Survival'

export type SkillNameBr =
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

export type Talents = Talent[]

export type Talent = {
  name: TalentName
  name_br: string
  max: number
  tests?: string[]
  description: string
}

export type TalentName =
  | 'Aparência'
  | 'Conhecimento'
  | 'Conhecimento Mágico'
  | 'Territorial'
  | 'Vigor'

type TalentNameBr =
  | 'Aparência'
  | 'Conhecimento'
  | 'Conhecimento Mágico'
  | 'Territorial'
  | 'Vigor'

export type Traits = Trait[]
export type Trait = {
  name: string
  name_br: string
  description: string
  characteristics_mod?: {
    name: Characteristic
    value: number
  }[]

  get name(): string
}

type Notes = string
type History = string
