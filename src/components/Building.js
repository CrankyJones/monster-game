import React from 'react';
import { WORLD_SIZE, TILE_RATIO} from '../constants/Constants';
import { atom, useRecoilState, useRecoilValue } from 'recoil';
import { buildingsAtom, singleBuildingAtom } from './Atoms';
import buildingImg from '.././img/buildingImg.png';
// import damagedBuilding from '.././img/damagedBuilding.png';
// import destroyedBuilding from '.././img/destroyedBuilding.png';




const Building = (props) => {
  const building = useRecoilValue(singleBuildingAtom(props.id));

  const [buildings, setBuildings] = useRecoilValue(buildingsAtom);


  // const building = useRecoilValue(buildingState);
  
  
  return (
    <>
      {buildings.map((building) => {

    const yOffset = ((100 / WORLD_SIZE) * (TILE_RATIO / 2.75));
    const yBase = building.y * yOffset + yOffset;
    const xBase = 50 - (100/22) * building.y;
    const yAbs = yBase + yOffset * building.x;
    const xAbs = xBase + (100/22) * building.x;
    const buildingZ = (building.x + building.y + 10);

        {(building.health === 3) &&
        <img src={buildingImg}
          alt=''
          className='building'
          style={{
            left: `${xAbs}%`,
            top: `${yAbs}%`,
            zIndex: `${buildingZ}`
          }}
        ></img>
        }
      
      })}
    </>    
      );
    }


export default Building;