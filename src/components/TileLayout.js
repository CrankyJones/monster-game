import React from 'react';
import { TILE_RATIO, WORLD_SIZE } from '../constants/Constants';
import Tile from './Tile';
 import groundTile from '../img/background.png';

const TileLayout = () => {
  const tiles = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ]
  // for (var column = 0; column < map.columns; column++) {
  //   for (var row = 0; row < map.rows; row++) {
  //     var x = column * map.tileSize;
  //     var y = row * map.tileSize;
  //     return <Tile src={src} x={x} y={y} z={z}/>
  //   }
  // }
    const yOffset = (100/WORLD_SIZE) * (TILE_RATIO / 2.75);
  return (
    tiles.map((row, y) => {
      const yBase = y * yOffset;
      const xBase = 50 - (100/20) * y;
      return row.map((tile, x) => {
        const z = x + 50;
        const yAbs = yBase + yOffset * x;
        const xAbs = xBase + (100/20) * x;
        let src;
        if (tile === 1){
          src = groundTile;
        }
        return <Tile key={`${x}${y}`} src={src} x={xAbs} y={yAbs} z={z}/>
      })
    })
  )
  
}

export default React.memo(TileLayout);