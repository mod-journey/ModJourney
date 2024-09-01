// priority: 0

/*
  Das Abbauen des Schaufelradbaggers wird primär, nach Priorität in der Hauptkonfiguration festgelegt. Hier ist die
  Priorität auf "alltheores,minecraft"
  Somit werden nur noch Erze aus diesen beiden Oberklassen gemint.
  Da es in der ATO-MOD auch weitere Erze aus z.B. dem Other gibt, welche bei uns keine Verwendung haben, werden diese Erze
  untaggt. Hirdurch ergibt sich, dass die Erze auch nicht mehr gemint werden, da diese den "forge:ores" verlieren.
*/

ServerEvents.tags('item', event => {
  let other_oreToUntag = [
  'aluminum',
  'lead',
  'nickel',
  'osmium',
  'platinum',
  'silver',
  'tin',
  'uranium',
  'zinc',
  'iridium',
  'emerald',
  'gold',
  'copper',
  'redstone',
  'iron',
  'coal'


  ]

  other_oreToUntag.forEach((other) => {
      event.removeAllTagsFrom(`alltheores:other_${other}_ore`)
      event.add(`remove:items`, `alltheores:other_${other}_ore`)
  })

})