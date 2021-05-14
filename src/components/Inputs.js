import React, { useEffect, useCallback, useRef } from 'react';
import { atom, useRecoilState, useRecoilValue } from 'recoil';

function Inputs() {
  const monsterState = atom ({
    key: 'monsterState',
    default: { x:5, y:9, facing: 'up', dead: 'false'}
  })
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
    console.log("keypress");
    e.preventDefault();
    if (!allowInput) {
      return;
    }
    if (e.keycode === 37) {
      // left
      setMonster ({
        x: monster.x > 0 ? monster.x - 1 : monster.x,
        y: monster.y,
        facing: 'left'
      })
    }
    else if (e.keycode === 39) {
      //right
      setMonster ({
        x: monster.x < 10  ? monster.x + 1 : monster.x,
        y: monster.y,
        facing: 'right'
      })
    }
    else if (e.keycode === 38) {
      //up
      setMonster ({
        x: monster.x, 
        y: monster.y > 0 ? monster.y - 1 : monster.y,
        facing: 'up'
      })
    }
    else if (e.keycode === 40) {
      //down
      setMonster ({
        x: monster.x,
        y: monster.y < 10 ? monster.y + 1 : monster.y,
        facing: 'down'
      })
    }
    setAllowInput(false);
    movementTimer.current = setTimeout(() => {
      setAllowInput(true);
    }, 500);
    });

    
    useEffect(() =>{
      window.addEventListener('keydown', handleKeyPress);
      return() => {
        window.removeEventListener('keydown', handleKeyPress);
      };
    }, [handleKeyPress]);
    return '';
}

export default Inputs;