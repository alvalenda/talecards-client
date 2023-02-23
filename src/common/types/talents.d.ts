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
