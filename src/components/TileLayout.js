import React from 'react';
import { TILE_RATIO, WORLD_SIZE } from '../constants/Constants';
import Tile from './Tile';
import groundTile from '../img/background.png';

const TileLayout = () => {
  const tiles = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ]
    const yOffset = (100/WORLD_SIZE) * (TILE_RATIO / 2.65);
  return (
    tiles.map((row, y) => {
      const yBase = y * yOffset;
      const xBase = 50 - (100/22) * y;
      return row.map((tile, x) => {
        const z = x + 50;
        const yAbs = yBase + yOffset * x;
        const xAbs = xBase + (100/22) * x;
        let src;
        if (tile === 1){
          src = groundTile;
        }
        return <Tile key={`${x}${y}`} src={src} x={xAbs} y={yAbs} z={z}/>
      })
    })
  )
}
export default TileLayout;