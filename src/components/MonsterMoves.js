export const monsterAttack = (monster, building) => {
  if (monster.x === building.x && monster.y === building.y - 1) ||
  (monster.x === building.x && monster.y === building.y + 1) ||
  (monster.x === building.x && monster.y - 1 === building.y) ||
  (monster.x === building.x && monster.y +1 === building.y) || {
    updatedHealth = building.health - 1
  };
  setBuilding({health: (updatedHealth)});
} 

export const monsterSpecial = (monster, building) => {

  
}