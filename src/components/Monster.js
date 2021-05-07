import React from 'react';
import { atom, useRecoilValue } from 'recoil';
// import monster images

const Monster = () => {
  const monsterState = atom ({
    key: 'monsterState',
    default: { /*starting x,y coords*/ facing: 'up', dead: 'false'}
  })

  let monsterImg;
  if (monster.dead) {
    monsterImg = monsterDead;
  } else if (monster.facing === 'up') {
    monsterImg = monsterNE;
  } else if (monster.facing === 'right') {
    monsterImg = monsterSE;
  } else if (monster.facing === 'down') {
    monsterImg = monsterSW;
  } else if (monster.facing === 'left') {
    monsterImg = monsterNW;
  }
  
  return (
  <img src={monsterImg}
      // add positioning on grid
    ></img>
  )
    
}  

export default Monster;