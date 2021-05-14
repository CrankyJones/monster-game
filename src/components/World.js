import TileLayout from './TileLayout';
import Monster from './Monster';
import Building from './Building';

const World = () => {
  return (
    <div className='world'>
      <Monster/>
      <TileLayout/>
      <Building/>
    </div>
  )
}

export default World;