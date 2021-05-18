import React from 'react';

import Building from './Building';
import { atom, constSelector, useRecoilState, useRecoilValue } from 'recoil';
import { buildingsAtom, singleBuildingAtom } from './Atoms';
import buildingImg from '.././img/buildingImg.png';
// import damagedBuilding from '.././img/damagedBuilding.png';
// import destroyedBuilding from '.././img/destroyedBuilding.png';



const BuildingLayout = () => {
  // const building = useRecoilValue(singleBuildingAtom(props.id));
  const buildings = useRecoilValue(buildingsAtom);
  return (
    <>
      {Object.entries(buildings).map(([k, v]) => <Building key={k} x={v.value.x} y={v.value.y}/>)}
    </>
      );
    }


export default BuildingLayout;