import React from 'react';
import { WORLD_SIZE, TILE_RATIO} from '../constants/Constants';
import { atom, useRecoilValue } from 'recoil';
import buildingImg from '.././img/buildingImg.png'
// import damagedBuilding from '.././img/damagedBuilding.png';
// import destroyedBuilding from '.././img/destroyedBuilding.png';

const buildingState = atom ({
  key: 'buildingState',
  default: {x:5, y:3, health:3}
})

const Building = () => {
  // for(let i=0; i<5; i++){
  //   let x= Math.random(1,10);
  //   let y = Math.randome(1,10);
  // }

// Create 6 buildings with random coords? loop thruogh underneath?

  const building = useRecoilValue(buildingState);

  const yOffset = ((100 / WORLD_SIZE) * (TILE_RATIO / 2.75))
  const yBase = building.y * yOffset + yOffset;
  const xBase = 50 - (100/22) * building.y;
  const yAbs = yBase + yOffset * building.x;
  const xAbs = xBase + (100/22) * building.x;
  const buildingZ = (building.x + building.y + 10);
  console.log(buildingZ);

return (
  <img src={buildingImg}
      alt=''
      className='building'
      style={{
        left: `${xAbs}%`,
        top: `${yAbs}%`,
        zIndex: `${Math.trunc(buildingZ)}`
      }}
    ></img>
  )
}


export default Building;