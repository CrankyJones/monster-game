import React, { useEffect, useCallback, useRef } from 'react';
import { atom, useRecoilState }  from 'recoil';
import { buildingState } from './Building';

function Inputs() {
  const monsterState = atom ({
    key: "monsterState",
    default: { x:5, y:10, facing: 'up', dead: 'false'},
  });

  const [monster, setMonster] = useRecoilState(monsterState);
  const [building, setBuilding] = useRecoilState(buildingState);
  
  const allowInputState = atom ({
    key: 'allowInput',
    default: true
  });
  const [allowInput, setAllowInput] = useRecoilState(allowInputState);
/* game Over condition here? */
  
  let movementTimer = useRef(false);
  useEffect(() => {
    return () => {
      clearTimeout(movementTimer.current);
    };
  }, [movementTimer]);
  
  const handleKeyPress = useCallback((e) => {
    e.preventDefault();
    if (!allowInput || monster.dead === true) {
      return;
    }
    console.log(e);
    setAllowInput(false);
    movementTimer.current = setTimeout(() => {
      setAllowInput(true);
    }, 500);

    if (e.keyCode === 65){
      let updatedHealth;
      if ((monster.x === building.x && monster.y -1  === building.y && monster.facing === 'up') ||
      (monster.x === building.x && monster.y +1 === building.y && monster.facing === 'down') ||
      (monster.x - 1 === building.x && monster.y === building.y && monster.facing === 'right') ||
      (monster.x + 1 === building.x && monster.y === building.y && monster.facing === 'left')) {
        updatedHealth = building.health - 1;
        setBuilding({
          x: building.x,
          y: building.y,
          health: updatedHealth})
      };
    }
    else if (e.keyCode === 37) {
      // left
      // buildings.map((building) => {})
      if (monster.x - 1 === building.x && monster.y === building.y) { 
        setMonster ({
          x: monster.x,
          y: monster.y,
          facing: 'left'
        });
      } else {
      setMonster ({
        x: monster.x > 0 ? monster.x - 1 : 0,
        y: monster.y,
        facing: 'left',
      })};
    }
    else if (e.keyCode === 39) {
      //right    
      if (monster.x + 1 === building.x && monster.y === building.y) { 
        setMonster ({
          x: monster.x,
          y: monster.y,
          facing: 'right'
        });
      } else {
      setMonster ({
        x: monster.x < 10  ? monster.x + 1 : 10,
        y: monster.y,
        facing: 'right',
      })};
    }
    else if (e.keyCode === 38) {
      //up    
      if (monster.x === building.x && monster.y - 1 === building.y) { 
        setMonster ({
          x: monster.x,
          y: monster.y,
          facing: 'up'
        });
      } else {
      setMonster ({
        x: monster.x, 
        y: monster.y > 0 ? monster.y - 1 : 0,
        facing: 'up',
      })};
    }
    else if (e.keyCode === 40) {
      //down    
      if (monster.x === building.x && monster.y + 1 === building.y) { 
        setMonster ({
          x: monster.x,
          y: monster.y,
          facing: 'down'
        });
      } else {
      setMonster ({
        x: monster.x,
        y: monster.y < 10 ? monster.y + 1 : 10,
        facing: 'down',
      })};
    }

    // Shift modifier?????
    // else if (e.keyCode === 16) {
    //   if (e.keyCode === 37) {
    //     //left
    //     setMonster({
    //       facing: 'left'
    //     });
    //   }
    //   else if (e.keyCode === 39) {
    //     //right
    //     setMonster({
    //       facing: 'right'
    //     });
    //   }
    //   else if (e.keyCode === 38) {
    //     //up
    //     setMonster({
    //       facing: 'up'
    //     });
    //   }
    //   else if (e.keyCode === 40) {
    //     //down
    //     setMonster({
    //       facing: 'down'
    //     });
    //   }
    // }
  },
  [monster, setMonster, allowInput, setAllowInput, building, setBuilding]
);    
useEffect(() =>{
  window.addEventListener('keydown', handleKeyPress);
  return() => {
    window.removeEventListener('keydown', handleKeyPress);
  };
}, [handleKeyPress]);
return '';
}

export default Inputs;