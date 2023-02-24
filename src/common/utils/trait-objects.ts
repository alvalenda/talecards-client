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
          ['S', +10],
          ['T', +10],
          ['Ag', -5],
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
    name: 'Brute',
    name_br: 'Bruto',
    attack: false,
    types: [
      [
        'TRANSFORM',
        [
          ['M', -1],
          ['Ag', -10],
          ['S', +10],
          ['T', +10],
        ],
      ],
    ],
    description:
      'The creature is heavy and brutish. It receives –1 Movement, –10 Agility, and +10 Strength and Toughness.',
  },
  {
    name: 'Champion',
    name_br: 'Campeão',
    attack: false,
    types: [],
    description:
      'If the creature wins an Opposed Test when defending in melee it causes Damage as if it were the attacker.',
  },
  {
    name: 'Chill Grasp',
    name_br: 'Toque Gélido',
    attack: true,
    types: [],
    description:
      'Cost: 2 Advantage. Action. Opposed WS vs Melee or Dodge. If it wins, its target loses 1d10 + SL Wounds with no TB or AP reduction. This attack is Magical.',
  },
  {
    name: 'Clever',
    name_br: 'Esperto',
    attack: false,
    types: [
      [
        'TRANSFORM',
        [
          ['I', +10],
          ['Int', +20],
        ],
      ],
    ],
    description: 'The creature receives +20 Intelligence and +10 Initiative.',
  },
  {
    name: 'Cold-blooded',
    name_br: 'Sangue Frio',
    attack: false,
    types: [],
    description: 'The creature can reverse all failed Willpower Tests.',
  },
  {
    name: 'Constrictor',
    name_br: 'Constritor',
    attack: true,
    types: [],
    description:
      'Any hit gives the target an Entangled Condition and the creature may Grapple.',
  },
  {
    name: 'Construct',
    name_br: 'Constructo',
    attack: false,
    types: [],
    description:
      "The creature is a construct of magic. It has no I, WP and Fel. If it has no controller and don't have Territorial Trait, it meanders mindlessly. For calculating its Wounds, it uses its SB whenever WB is required. All its attacks are Magical.",
  },
  {
    name: 'Corrosive Blood',
    name_br: 'Sangue Corrosivo',
    attack: true,
    types: [],
    description:
      'When the creature is Wounded all Engaged characters take 1d10 Wounds, reduced by TB and AP, minimum of 1.',
  },
  {
    name: 'Corruption',
    name_br: 'Corrupção',
    attack: false,
    types: [['Intensity', 'Minor']],
    description:
      'The creature is tainted by Chaos. The Strength of the Corruption is marked in brackets.',
  },
  {
    name: 'Cunning',
    name_br: 'Astuto',
    attack: false,
    types: [
      [
        'TRANSFORM',
        [
          ['I', +10],
          ['Int', +10],
          ['Fel', +10],
        ],
      ],
    ],
    description:
      'The creature receives +10 Fellowship, Intelligence, and Initiative.',
  },
  {
    name: 'Dark Vision',
    name_br: 'Visão Escura',
    attack: false,
    types: [],
    description: 'The creature can see in the dark as daylight.',
  },
  {
    name: 'Daemonic',
    name_br: 'Demoníaco',
    attack: false,
    types: [['Target', '']],
    description:
      'Does not require air, food, or water. All attacks are Magical. Roll 1d10 after any blow is received; if equal or higher than Target number, the blow is ignored, even if it is a critical. On zero wounds, the creature disappears.',
  },
  {
    name: 'Die Hard',
    name_br: 'Duro de Matar',
    attack: false,
    types: [],
    description:
      'If death occurs and all parts are in place, creature may attempt a Challenging (+0) Endurance Test requiring an 6 SL at the start of every round for TB Rounds. If successful, the creature revives with 1 Wound.',
  },
  {
    name: 'Disease',
    name_br: 'Doença',
    attack: false,
    types: [['Type', '']],
    description:
      'The creature carries a disease, and others will have to Test as appropriate for Contraction.',
  },
  {
    name: 'Distracting',
    name_br: 'Distrair',
    attack: false,
    types: [],
    description:
      'All living targets within TB yards suffer a penalty of –20 to Tests. Does not stack with other Distracting traits.',
  },
  {
    name: 'Elite',
    name_br: 'Elite',
    attack: false,
    types: [
      [
        'TRANSFORM',
        [
          ['WS', +20],
          ['BS', +20],
          ['WP', +20],
        ],
      ],
    ],
    description:
      'The creature receives +20 to Weapon Skill, Ballistic Skill, and Willpower.',
  },
  {
    name: 'Ethereal',
    name_br: 'Etéreo',
    attack: false,
    types: [],
    description:
      "The creature's form is insubstantial, may pass through solid objects, and can only be harmed by Magical attacks.",
  },
  {
    name: 'Fast',
    name_br: 'Rápido',
    attack: false,
    types: [
      [
        'TRANSFORM',
        [
          ['M', +1],
          ['Ag', +10],
        ],
      ],
    ],
    description: 'The creature receives +1 Movement and +10 Agility.',
  },
  {
    name: 'Fear',
    name_br: 'Medo',
    attack: false,
    types: [['Rating', 0]],
    description:
      'The creature causes supernatural Fear in other creatures, with a rating equal to its Rating.',
  },
  {
    name: 'Flight',
    name_br: 'Voo',
    attack: false,
    types: [['Rating', 0]],
    description:
      'Can fly as a Move up to Rating yards. It may use fly to Charge. If it starts its turn flying and is unable to still flying, the GM decides how far the creature falls. When targeting it increase range by 1 step. When flying the creature takes –20 to all ranged combat.',
  },
]

// ! Página 136 Imperial Zoo - Bestiário
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
