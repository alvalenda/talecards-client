import { Trait } from '../types/traits'

export const traits: Trait[] = [
  {
    name: 'Afraid',
    name_br: 'Medo',
    attack: false,
    types: [['Target', 'Chose One']],
    description: 'The creature gains Fear (0) to the Target.',
  },
  {
    name: 'Amphibious',
    name_br: 'Anfíbio',
    attack: false,
    types: [],
    description:
      'The creature adds its Agility Bonus to the SL of all Swim Tests and move at full Movement through water.',
  },
  {
    name: 'Arboreal',
    name_br: 'Arbóreo',
    attack: false,
    types: [],
    description:
      'The creature adds its Agility Bonus to the SL of all Climb and Stealth Tests.',
  },
  {
    name: 'Animosity',
    name_br: 'Animosidade',
    attack: false,
    types: [['Target', 'Chose One']],
    description: 'The creature dislikes the Target.',
  },
  {
    name: 'Armour',
    name_br: 'Armadura',
    attack: false,
    types: [
      ['Rating', 0],
      ['Including TB', 0],
    ],
    description:
      'The creature has Rating Armour Points on all Hit Locations. The number in brackets after the Rating is the creatures TB + Armour Points. Most damage is reduced by this number.',
  },
  {
    name: 'Belligerent',
    name_br: 'Beligerante',
    attack: false,
    types: [],
    description:
      'If the creature has more Advantage than its opponent, it is Immune to Psychology.',
  },
  {
    name: 'Bestial',
    name_br: 'Bestial',
    attack: false,
    types: [],
    description:
      'The creature fears fire and gains a Broken Condition if struck by it. It defends only with Dodge. If it loses more than half its Wounds, it will attempt to Flee. If protecting young or Territorial it enters Frenzy instead.',
  },
  {
    name: 'Big',
    name_br: 'Grande',
    attack: false,
    types: [
      [
        'TRANSFORM',
        [
          {
            short: 'S',
            value: +10,
          },
          {
            short: 'T',
            value: +10,
          },
          {
            short: 'Ag',
            value: -5,
          },
        ],
      ],
    ],
  },
  {
    name: 'Bite',
    name_br: 'Mordida',
    attack: true,
    types: [['Rating', 0]],
    description:
      'The creature may make a Free Attack by spending 1 Advantage, inflicting Rating damage.',
  },
  {
    name: 'Blessed',
    name_br: 'Abençoado',
    attack: false,
    types: [['Various', '']],
    description:
      'The creature is Blessed and can enact Blessings; the relevant deity is indicated in brackets.',
  },
  {
    name: 'Bounce',
    name_br: 'Ressalto',
    attack: false,
    types: [],
    description:
      'When Charging or Running, it doubles its Movement Characteristic and ignores all terrain.',
  },
  {
    name: 'Breath',
    name_br: 'Baforada',
    attack: true,
    types: [
      ['Rating', 0],
      ['Type', ''],
    ],
    description:
      'When Charging or Running, it doubles its Movement Characteristic and ignores all terrain.',
  },
  {
    name: 'Blessed',
    name_br: 'Abençoado',
    attack: false,
    types: [],
    description: '',
  },
]

// ! Página 135 Imperial Zoo
/* Traits
Afraid (Target)
Amphibious
Arboreal
Animosity (Target)
Armour (Rating)(Including TB)
Belligerent
Bestial
Big
Bite (Rating)
Blessed (Various)
Bounce
Breath (Rating)(Type)
Brute
Champion
Chill Grasp
Clever
Cold-blooded
Constrictor
Construct
Corrosive Blood
Corruption
Cunning
Dark Vision
Daemonic (Target)
Die Hard
Disease (Type)
Distracting
Elite
Ethereal
Fast
Fear (Rating)
Flight (Rating)
Frenzy
Fury
Ghostly Howl
Grim (Rating)
Hardy
Hatred (Target)
Horns (Rating)(Feature)
Hungry
Immunity (Type)
Immunity to
Psychology
Infected
Infestation
Leader
Magical
Miracles (various)
Night Vision
Painless
Petrifying Gaze
Prejudice (Target)
Ranged (Rating)
Rear
Regenerate
Skittish
Spellcaster
Stealthy
Size
Stride
Stupid
Swamp-strider
Swarm
Tail Attack (Rating)
# Tentacles (Rating)
Territorial
Terror (Rating)
Trained
Tongue Attack (Rating)(Range)
Tough
Tracker
Undead
Unstable
Vampiric
Venom (Difficulty)
Vomit
Ward (Rating)
Wall crawler
Weapon (Rating)
Web (Rating)
                        */
