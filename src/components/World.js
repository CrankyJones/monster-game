import TileLayout from './TileLayout';
import Monster from './Monster';
import BuildingLayout from './BuildingLayout';

const World = () => {
  return (
    <div className='world'>
      <Monster/>
      <TileLayout/>
      <BuildingLayout/>
    </div>
  )
}

export default World;