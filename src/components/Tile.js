import React from 'react';

const Tile = ({src, x, y, z}) => {
  return (
    <img
    alt=''
    src={src}
    className='tile'
    style={{left: `${x}%`, top:`${y}%`, zIndex: z }}
    >
    </img>
  )
}

export default Tile;