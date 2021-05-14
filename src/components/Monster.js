import React from 'react';
import { WORLD_SIZE, TILE_RATIO} from '../constants/Constants';
import { atom, useRecoilValue } from 'recoil';
import monsterNE from '../img/monsterNE.png';
import monsterSE from '../img/monsterSE.png';
import monsterNW from '../img/monsterNW.png';
import monsterSW from '../img/monsterSW.png';

const Monster = () => {
  const monsterState = atom ({
    key: 'monsterState',
    default: { x:5, y:9, facing: 'up', dead: 'false'}
  })
  const monster = useRecoilValue(monsterState);

  const yOffset = ((100 / WORLD_SIZE) * (TILE_RATIO / 2.75))
  const yBase = monster.y * yOffset + yOffset;
  const xBase = 50 - (100/22) * monster.y;
  const z = 1000
  const yAbs = yBase + yOffset * monster.x;
  const xAbs = xBase + (100/22) * monster.x;

  let monsterImg;
  // if (monster.dead) {
  //   monsterImg = monsterDead;
  // } else 
  
  if (monster.facing === 'up') {
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
      alt=''
      className='monster'
      style={{
        left: `${xAbs}%`,
        top: `${yAbs}%`
      }}
    ></img>
  )
    
}  

export default Monster;