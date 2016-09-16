const character = {
    Name: 'Adohand the Gatorslayer',
    Player: 'Avi',
    Age: 50,
    Hair: 'Black',
    Eyes: 'Red',
    Skin: 'Greenish',
    Height: '6ft',
    Weight: '220lbs',
    Size: 'Medium',
    Alignment: 'Chaotic Neutral',
    Faith: null,
    Level: 5,
    Race: 'Half-Orc',
    Gender: 'Male',
    AvatarSrc: 'http://www.tribality.com/wp-content/uploads/2015/01/half-orc.jpeg',
    ProficiencyBonus: 3,
    Initiative: 3,
    Inspiration: false,
    Ammunition: null,
    Background: 'Gladiator',
    Experience: {
        Current: 6500,
        Next: 14000
    },
    Lifestyle: {
        Style: 'Modest',
        Price: 1
    },
    Classes: [
        {
            Berserker: 5
        }
    ],
    Speed: {
        Normal: 40,
        Encumbered: {
            Speed: 30,
            Range: {
                Low: 96,
                High: 190
            }
        },
        HeavilyEncumbered: {
            Speed: 20,
            Range: {
                Low: 191,
                High: 285
            }
        },
        PushDragLift: {
            Speed: 5,
            Range: {
                Low: 286,
                High: 570
            }
        }
    },
    Inventory: {
        TotalWeight: 200,
        MagicItems: [
            {
                Name: 'Black Dragon Scale Mail',
                Bonus: 1,
                Description: 'Focus for Black Dragons 1/day; Resistance vs acid damage.',
                Attuned: true
            },
            {
                Name: 'Berserker\'s Morningstar',
                Bonus: 1,
                Description: '+1 hp/lvl; Berserker\'s Curse; disadvantage on attack rolls with weapons other than this one, unless no foe is within 60 feet that you can see or hear.',
                Attuned: true
            },
            {
                Name: 'Gatorskin Cloak',
                Bonus: 1,
                Description: 'Resistance vs Necrotic damage.',
                Attuned: true
            }
        ],
        NonMagicalItems: [
            {
                Name: 'Backpack',
                Quantity: 1,
                Weight: 5,
                Description: null
            },
            {
                Name: 'Bedroll',
                Quantity: 1,
                Weight: 7,
                Description: null
            },
            {
                Name: 'Mess kit',
                Quantity: 1,
                Weight: 1,
                Description: null
            },
            {
                Name: 'Tinderbox',
                Quantity: 1,
                Weight: 1,
                Description: null
            },
            {
                Name: 'Torches',
                Quantity: 10,
                Weight: 1,
                Description: null
            },
            {
                Name: 'Rations',
                Quantity: 5,
                Weight: 2,
                Description: null
            },
            {
                Name: 'Waterskin',
                Quantity: 1,
                Weight: 5,
                Description: 'filled with black goop'
            },
            {
                Name: 'Hemp Rope (ft)',
                Quantity: 50,
                Weight: 0.2,
                Description: null
            },
            {
                Name: 'Mercenary\'s pinky',
                Quantity: 1,
                Weight: 0.1,
                Description: null
            },
            {
                Name: 'Orrery',
                Quantity: 1,
                Weight: 0.5,
                Description: null
            }
        ],
        Wealth: {
            Platinum: 0,
            Gold: 344,
            Electrum: 0,
            Silver: 0,
            Copper: 0,
            Other: null
        }
    },
    Languages: [
        'Common',
        'Orc'
    ],
    Proficiencies: {
        Armor: {
            Light: true,
            Medium: true,
            Heavy: false,
            Shields: true,
            Other: null
        },
        Weapons: {
            Simple: true,
            Mertial: true,
            Other: null
        }
    },
    Traits: {
        PersonalityTraits: [
            'I love a good insult, even one directed at me.'
        ],
        Ideals: [
            'Creativity: The world is in need of new ideas and bold action. (chaotic)'
        ],
        Bonds: [
            'I idolize a hero of the old tales and measure my deeds against that person.'
        ],
        Flaws: [
            'I\'ll do anything to win fame and renown.'
        ]
    },
    Features: {
        Racial: [
            {
                Name: 'Relentless Endurance',
                Description: 'When I am reduced to 0 hit points but not killed outright, I can drop to 1 hit point instead. I can\'t use this feature again until I finish a long rest.'
            },
            {
                Name: 'Savage Attacks',
                Description: 'When I score a critical hit with a melee weapon attack, I can roll one of the weapon\'s damage dice one additional time and add it to the extra damage of the critical hit'
            }
        ],
        Class: [
            {
                Name: 'Rage',
                Source: 'Barbarian 1',
                Description: 'Start/end as bonus action; add damage to melee weapons that use Str; lasts 1 min; Advantage on STR checks/saves (not attacks); resistance to bludgeoning, piercing, and slashing; stops if i end turn without attacking or taking damage since last turn, or unconscious.'
            },
            {
                Name: 'Unarmored Defense',
                Source: 'Barbarian 1',
                Description: 'AC is 10 + DEX mod + CON mod + shield bonus'
            },
            {
                Name: 'Reckless Attack',
                Source: 'Barbarian 2',
                Description: 'Adv on melee weapon attacks on my turn, but attacks vs me Adv until next turn'
            },
            {
                Name: 'Danger Sense',
                Source: 'Barbarian 2',
                Description: 'Adv on DEX saves against seen effects (not blind/deaf/incapacitated)'
            },
            {
                Name: 'Frenzy',
                Source: 'Path of the Berserker 3',
                Description: 'Melee attack as bonus action each turn while raging; +1 level of exhaustion after rage'
            },
            {
                Name: 'Fast Movement',
                Source: 'Barbarian 5',
                Description: '+10ft speed when I\'m not wearing heavy armor'
            }
        ],
        Background: {
            Name: 'Are You Entertained?',
            Description: 'I can always find a place to perform where I receive free lodging and food of a modest or comfortable standard, as long as I perform each night. In addition, my performance makes me something of a local figure. When strangers recognize me in a town where I have performed, they typically take a liking to me.'
        },
        Feats: [
            {
                Name: 'Great Weapon Master',
                Description: 'If I score a critical hit or reduce a creature to zero hit points with a melee weapon on my turn, I can make one melee weapon attack as a bonus action. With a heavy melee weapon, I can choose to take a -5 penalty on the attack roll for +10 on the damage.'
            }
        ]
    },
    DeathSaves: {
        Die: 0,
        Live: 0
    },
    Attacks: {
        PerAction: 2,
        Attacks: [
            {
                Weapon: 'Glaive',
                Description: 'Heavy, Reach, Two-Handed',
                Proficiency: true,
                Range: 'Melee',
                ToHit: 8,
                Damage: '1d10+5',
                Type: 'Slashing'
            },
            {
                Weapon: '+1 Berserker\'s Morningstar',
                Description: 'Heavy, Two-Handed',                
                Proficiency: true,
                Range: 'Melee',
                ToHit: 9,
                Damage: '1d12+6',
                Type: 'Bludgeoning'
            }
        ]
    },
    HitPoints: {
        Max: 72,
        Current: 72,
        Temp: 0,
        HitDice: {
            Die: 12,
            Levels: 5,
            Used: 0
        }
    },
    Defense: {
        ArmorClass: {
            Total: 17,
            ArmorBonus: {
                'Black Dragon Scale Mail': 14
            },
            DexterityModifier: {
                MediumArmor: 2
            },
            MagicBonus: {
                'Gatorskin Cloak': 1
            },
            ShieldBonus: null,
            Misc1: null,
            Misc2: null
        },
        Resistances: [
            'Necrotic',
            'Acid',
            'Bludgeoning (in rage)',
            'Piercing (in rage)',
            'Slashing (in rage)'
        ]
    },
    Senses: {
        PassivePerception: 15,
        Misc: ['Darkvision 60ft']
    },
    SavingThrowModifiers: [
        'Advantage vs Dragonbreath and Frightful Presence',
        'Advantage on STR saves while raging',
        'Advantage on DEX saves against seen effects'
    ],
    LimitedFeatures: [
        {
            Name: 'Relentless Endurance',
            MaxUsages: 1,
            Recovery: 'LR',
            RemainingUsages: 1
        },
        {
            Name: 'Focus for Black Dragons',
            MaxUsages: 1,
            Recovery: 'Dawn',
            RemainingUsages: 1
        },
        {
            Name: 'Rage',
            MaxUsages: 3,
            Recovery: 'LR',
            RemainingUsages: 2
        }
    ],
    AbilityScores: {
        STR: {
            Score: 20,
            Modifier: 5,
            Save: 8,
            Proficiency: true
        },        
        DEX: {
            Score: 16,
            Modifier: 3,
            Save: 3,
            Proficiency: false
        },
        CON: {
            Score: 18,
            Modifier: 4,
            Save: 7,
            Proficiency: true
        },        
        INT: {
            Score: 8,
            Modifier: -1,
            Save: -1,
            Proficiency: false
        },        
        WIS: {
            Score: 15,
            Modifier: 2,
            Save: 2,
            Proficiency: false
        },
        CHA: {
            Score: 14,
            Modifier: 2,
            Save: 2,
            Proficiency: false
        }
    },
    Skills: {
        STR: {
            Athletics: {
                Bonus: 8,
                Advantage: 0,
                Proficiency: true,
                Expertise: false
            }
        },
        DEX: {
            Acrobatics: {
                Bonus: 6,
                Advantage: 0,
                Proficiency: true,
                Expertise: false
            },
            SleightOfHand: {
                Bonus: 3,
                Advantage: 0,
                Proficiency: false,
                Expertise: false
            },
            Stealth: {
                Bonus: 3,
                Advantage: -1,
                Proficiency: true,
                Expertise: false
            }
        },
        CON: {},
        INT: {
            Arcana: {
                Bonus: -1,
                Advantage: 0,
                Proficiency: false,
                Expertise: false
            },
            History: {
                Bonus: -1,
                Advantage: 0,
                Proficiency: false,
                Expertise: false
            },
            Investigation: {
                Bonus: -1,
                Advantage: 0,
                Proficiency: false,
                Expertise: false
            },
            Nature: {
                Bonus: -1,
                Advantage: 0,
                Proficiency: false,
                Expertise: false
            },
            Religion: {
                Bonus: -1,
                Advantage: 0,
                Proficiency: false,
                Expertise: false
            }
        },
        WIS: {
            AnimalHandling: {
                Bonus: 2,
                Advantage: 0,
                Proficiency: false,
                Expertise: false
            },
            Insight: {
                Bonus: 2,
                Advantage: 0,
                Proficiency: false,
                Expertise: false
            },
            Medicine: {
                Bonus: 2,
                Advantage: 0,
                Proficiency: false,
                Expertise: false
            },
            Perception: {
                Bonus: 5,
                Advantage: 0,
                Proficiency: true,
                Expertise: false
            },
            Survival: {
                Bonus: 2,
                Advantage: 0,
                Proficiency: false,
                Expertise: false
            }
        },
        CHA: {
            Deception: {
                Bonus: 2,
                Advantage: 0,
                Proficiency: false,
                Expertise: false
            },
            Intimidation: {
                Bonus: 5,
                Advantage: 0,
                Proficiency: true,
                Expertise: false
            },
            Performance: {
                Bonus: 5,
                Advantage: 0,
                Proficiency: true,
                Expertise: false
            },
            Persuasion: {
                Bonus: 2,
                Advantage: 0,
                Proficiency: false,
                Expertise: false
            }
        },
        Tool: {
            Bonus: 0,
            Advantage: 0,
            Proficiency: false,
            Expertise: false
        }
    }
};

export default character;