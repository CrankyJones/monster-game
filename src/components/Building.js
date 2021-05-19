import React from 'react';
import { WORLD_SIZE, TILE_RATIO} from '../constants/Constants';
import buildingImg from '.././img/buildingImg.png';
import damagedBuilding1 from '.././img/DamagedBuilding.png';
import damagedBuilding2 from '.././img/DamagedBuilding2.png';
import damagedBuilding3 from '.././img/DamagedBuilding3.png';
import MonsterHit from '.././audio/MonsterHit.wav';
import MonsterHit2 from '.././audio/MonsterHit2.wav';
import BuildingDestroyed from '.././audio/BuildingDestroyed.wav';
import ReactAudioPlayer from 'react-audio-player'

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
  } else if (health === 2) {
    return (
      <>
        <ReactAudioPlayer
          src={MonsterHit}
          autoPlay
        />  
        <img src={damagedBuilding1}
          alt=''
          className='building'
          style={{
          left: `${xAbs}%`,
          top: `${yAbs}%`,
          zIndex: `${buildingZ}`
          }}
        ></img>
      </>
    )
  } else if (health === 1) {
    return (
      <>
        <ReactAudioPlayer
          src={MonsterHit2}
          autoPlay
        /> 
        <img src={damagedBuilding2}
          alt=''
          className='building'
          style={{
          left: `${xAbs}%`,
          top: `${yAbs}%`,
          zIndex: `${buildingZ}`
          }}
        ></img>
      </>
    )
  } else if (health === 0) {
    return (
      <>
        <ReactAudioPlayer
          src={BuildingDestroyed}
          autoPlay
        /> 
      <img src={damagedBuilding3}
        alt=''
        className='building'
        style={{
        left: `${xAbs}%`,
        top: `${yAbs}%`,
        zIndex: `${buildingZ}`
        }}
      ></img>
      </>
    )
  } else if (health < 0) {
    return (
      <>
        <ReactAudioPlayer
          src={MonsterHit}
          autoPlay
        /> 
      <img src={damagedBuilding3}
        alt=''
        className='building'
        style={{
        left: `${xAbs}%`,
        top: `${yAbs}%`,
        zIndex: `${buildingZ}`
        }}
      ></img>
      </>
    )
  }
}
export default Building;