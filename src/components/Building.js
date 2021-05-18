import React from 'react';
import { WORLD_SIZE, TILE_RATIO} from '../constants/Constants';
import buildingImg from '.././img/buildingImg.png';
import { buildings } from '../constants/Buildings';

const Building = ({x, y, health}) => {
  const yOffset = ((100 / WORLD_SIZE) * (TILE_RATIO / 2.75));
  const yBase = y * yOffset + yOffset;
  const xBase = 50 - (100/22) * y;
  const yAbs = yBase + yOffset * x;
  const xAbs = xBase + (100/22) * x;
  const buildingZ = (x + y + 10);
    
  if (health === 3) {
  return (
    <img src={buildingImg}
      alt=''
      className='building'
      style={{
      left: `${xAbs}%`,
      top: `${yAbs}%`,
      zIndex: `${buildingZ}`
      }}
    ></img>
  )
} else if (health > 0) {
  return (
    <img src={null}
      alt=''
      className='building'
      style={{
      left: `${xAbs}%`,
      top: `${yAbs}%`,
      zIndex: `${buildingZ}`
      }}
    ></img>
  )

} else if (health <= 0) {
  return (
    <img src={buildingImg}
      alt=''
      className='building'
      style={{
      left: `${xAbs}%`,
      top: `${yAbs}%`,
      zIndex: `${buildingZ}`
      }}
    ></img>
  )

}

}
export default Building;
    
    
    
    
    
    // import React from 'react';
    // import { atom, constSelector, useRecoilState, useRecoilValue } from 'recoil';
    // import { buildingsAtom, singleBuildingAtom } from './Atoms';
    // // import damagedBuilding from '.././img/damagedBuilding.png';
    // // import destroyedBuilding from '.././img/destroyedBuilding.png';
    
    
    
    // const Building = (props) => {
      //   // const building = useRecoilValue(singleBuildingAtom(props.id));
      //   const buildings = useRecoilValue(buildingsAtom);
      
      //   return (
        //     <>
        //       {buildings.map((building) => {
          
          //         console.log(building);
          //     const yOffset = ((100 / WORLD_SIZE) * (TILE_RATIO / 2.75));
          //     const yBase = building.y * yOffset + yOffset;
          //     const xBase = 50 - (100/22) * building.y;
          //     const yAbs = yBase + yOffset * building.x;
          //     const xAbs = xBase + (100/22) * building.x;
          //     const buildingZ = (building.x + building.y + 10);
          
          
          //         <img src={buildingImg}
          //           alt=''
          //           className='building'
          //           style={{
            //             left: `${xAbs}%`,
            //             top: `${yAbs}%`,
            //             zIndex: `${buildingZ}`
            //           }}
            //         ></img>
            //         }
            
            //       )}
            //     </>    
            //       );
            //     }
            