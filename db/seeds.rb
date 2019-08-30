# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
races = Race.create([
 { name: 'Dragonborn', img_url: 'https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/340/420/618/636272677995471928.png', speed: 30, bonus: 'Strength +2, Charisma +1', size: 'Medium' },
 { name: 'Dwarf', img_url: 'https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/254/420/618/636271781394265550.png', speed: 25, bonus: 'Constitution +2', size: 'Medium' },
 { name: 'Elf', img_url: 'https://media-waterdeep.cursecdn.com/avatars/thumbnails/7/639/420/618/636287075350739045.png', speed: 30, bonus: 'Dexterity +2', size: 'Medium' },
 { name: 'Gnome', img_url: 'https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/334/420/618/636272671553055253.png', speed: 25, bonus: 'Intelligence +2', size: 'Small' },
 { name: 'Half-Elf', img_url: 'https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/481/420/618/636274618102950794.png', speed: 30, bonus: 'Charisma +2, Any +1, Any +1', size: 'Medium' },
 { name: 'Halfling', img_url: 'https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/256/420/618/636271789409776659.png', speed: 25, bonus: 'Dexterity +2', size: 'Small' },
 { name: 'Half-Orc', img_url: 'https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/466/420/618/636274570630462055.png', speed: 30, bonus: 'Strength +2, Constitution +1', size: 'Medium' },
 { name: 'Human', img_url: 'https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/258/420/618/636271801914013762.png', speed: 30, bonus: '+1 All', size: 'Medium' },
 { name: 'Tiefling', img_url: 'https://media-waterdeep.cursecdn.com/avatars/thumbnails/7/641/420/618/636287076637981942.png', speed: 30, bonus: 'Charisma +2, Intelligence +1', size: 'Medium' }
 ])

 klasses = Klass.create([
  {name: 'Barbarian', img_url: 'http://i.imgur.com/GYY1nbt.png', hit_die: 12},
  {name: 'Bard', img_url: 'http://i.imgur.com/8T0L3xM.png', hit_die: 8},
  {name: 'Cleric', img_url: 'http://i.imgur.com/HbCCioo.png', hit_die: 8},
  {name: 'Druid', img_url: 'http://i.imgur.com/wRh8EMN.png', hit_die: 8},
  {name: 'Fighter', img_url: 'http://i.imgur.com/LkPQ7nU.png', hit_die: 10},
  {name: 'Monk', img_url: 'http://i.imgur.com/xUFoJ7g.png', hit_die: 8},
  {name: 'Paladin', img_url: 'http://i.imgur.com/HoP8Et3.png', hit_die: 10},
  {name: 'Ranger', img_url: 'http://i.imgur.com/dZOI1VM.png', hit_die: 10},
  {name: 'Rogue', img_url: 'http://i.imgur.com/lSdyPDJ.png', hit_die: 8},
  {name: 'Sorcerer', img_url: 'http://i.imgur.com/OYzZNjP.png', hit_die: 6},
  {name: 'Warlock', img_url: 'http://i.imgur.com/UII6jeX.png', hit_die: 8},
  {name: 'Wizard', img_url: 'http://i.imgur.com/w9k5n6j.png', hit_die: 6},
 ])
 
 weapons = Weapon.create([
  {name: 'Club', damage: '1d4', dmg_type: 'bludgeoning'},
  {name: 'Dagger', damage: '1d4', dmg_type: 'piercing'},
  {name: 'Greatclub', damage: '1d8', dmg_type: 'bludgeoning'},
  {name: 'Handaxe', damage: '1d6', dmg_type: 'slashing'},
  {name: 'Javelin', damage: '1d6', dmg_type: 'piercing'},
  {name: 'Light Hammer', damage: '1d4', dmg_type: 'bludgeoning'},
  {name: 'Mace', damage: '1d6', dmg_type: 'bludgeoning'},
  {name: 'Quarterstaff', damage: '1d6', dmg_type: 'bludgeoning'},
  {name: 'Sickle', damage: '1d4', dmg_type: 'slashing'},
  {name: 'Spear', damage: '1d6', dmg_type: 'piercing'},
  {name: 'Crossbow', damage: '1d8', dmg_type: 'piercing'},
  {name: 'Dart', damage: '1d4', dmg_type: 'piercing'},
  {name: 'Shortbow', damage: '1d6', dmg_type: 'piercing'},
  {name: 'Sling', damage: '1d4', dmg_type: 'bludgeoning'},
  {name: 'Battleaxe', damage: '1d8', dmg_type: 'slashing'},
  {name: 'Flail', damage: '1d8', dmg_type: 'bludgeoning'},
  {name: 'Glaive', damage: '1d10', dmg_type: 'slashing'},
  {name: 'Greataxe', damage: '1d12', dmg_type: 'slashing'},
  {name: 'Greatsword', damage: '2d6', dmg_type: 'slashing'},
  {name: 'Halberd', damage: '1d10', dmg_type: 'slashing'},
  {name: 'Lance', damage: '1d12', dmg_type: 'piercing'},
  {name: 'Longsword', damage: '1d8', dmg_type: 'slashing'},
  {name: 'Maul', damage: '2d6', dmg_type: 'bludgeoning'},
  {name: 'Morningstar', damage: '1d8', dmg_type: 'piercing'},
  {name: 'Pike', damage: '1d10', dmg_type: 'piercing'},
  {name: 'Rapier', damage: '1d8', dmg_type: 'piercing'},
  {name: 'Scimitar', damage: '1d6', dmg_type: 'slashing'},
  {name: 'Shortsword', damage: '1d6', dmg_type: 'piercing'},
  {name: 'Trident', damage: '1d6', dmg_type: 'piercing'},
  {name: 'War Pick', damage: '1d8', dmg_type: 'piercing'},
  {name: 'Warhammer', damage: '1d8', dmg_type: 'bludgeoning'},
  {name: 'Whip', damage: '1d4', dmg_type: 'slashing'},
  {name: 'Blowgun', damage: '1d4', dmg_type: 'piercing'},
  {name: 'Hand Crossbow', damage: '1d6', dmg_type: 'piercing'},
  {name: 'Heavy Crossbow', damage: '1d10', dmg_type: 'piercing'},
  {name: 'Longbow', damage: '1d8', dmg_type: 'piercing'},
 ])
