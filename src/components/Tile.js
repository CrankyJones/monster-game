import React from 'react';

const Tile = ({src, x, y, z}) => {
  return (
    <img
    src={src}
    className='tile'
    style={{left: `${x}%`, top:`${y}%`, zIndex: z }}
    >
    </img>
  )
}