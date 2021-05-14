import React, { useEffect, useCallback, useRef } from 'react';
import { atom, useRecoilState}  from 'recoil';

function Inputs() {
  const monsterState = atom ({
    key: "monsterState",
    default: { x:5, y:9, facing: 'down', dead: 'false'},
  });

  const [monster, setMonster] = useRecoilState(monsterState);
  
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
    if (!allowInput) {
      return;
    }
    console.log(e);
    console.log(allowInput);
    setAllowInput(false);
    movementTimer.current = setTimeout(() => {
      setAllowInput(true);
    }, 500);
    console.log(allowInput);
    if (e.keyCode === 37) {
      // left
      setMonster ({
        x: monster.x > 0 ? monster.x - 1 : 0,
        y: monster.y,
        facing: 'left'
      });
    }
    else if (e.keyCode === 39) {
      //right
      setMonster ({
        x: monster.x < 10  ? monster.x + 1 : 10,
        y: monster.y,
        facing: 'right'
      });
    }
    else if (e.keyCode === 38) {
      //up
      setMonster ({
        x: monster.x, 
        y: monster.y > 0 ? monster.y - 1 : 0,
        facing: 'up'
      });
    }
    else if (e.keyCode === 40) {
      //down
      setMonster ({
        x: monster.x,
        y: monster.y < 10 ? monster.y + 1 : 10,
        facing: 'down'
      });
    }
  },
  [monster, setMonster, allowInput, setAllowInput]
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