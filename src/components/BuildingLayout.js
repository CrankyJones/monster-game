import React from 'react';
import Building from './Building';
import { useRecoilValue } from 'recoil';
import { buildingsAtom } from './Atoms';

const BuildingLayout = () => {
  const buildings = useRecoilValue(buildingsAtom);
  return (
    <>
    {console.log(buildings)}
      {Object.entries(buildings).map(([k, v]) => <Building key={k} x={v.value.x} y={v.value.y} health={v.value.health}/>)}
    </>
      );
    }


export default BuildingLayout;