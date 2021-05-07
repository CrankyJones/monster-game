import React, { useEffect } from 'react';
import { atom, useRecoilState, useRecoilValue } from 'recoil';

function Inputs() {
  const monsterState = atom({
    key: 'monsterState',
    default: null /*} monster starting position */
  });
  const [monster, setMonster] = useRecoilState(monsterState);
  
  const allowInput = atom ({
    key: 'allowInput',
    default: true
  });
  const [allowInput, setAllowInput] = useRecoilState(allowInput);
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
    if (e.keycode === 37) {
      // left
      setMonsterState ({
        x: monster.x > 0 ? monster.x - 1 : monster.x,
        y: monster.y,
      })
    }
    else if (e.keycode === 39) {
      //right
      setMonsterState ({
        x: monster.x < 10  ? monster.x + 1 : monster.x,
        y: monster.y,
      })
    }
    else if (e.keycode === 38) {
      //up
      setMonsterState ({
        x: monster.x, 
        y: monster.y > 0 ? monster.y - 1 : monster.y,
      })
    }
    else if (e.keycode === 40) {
      //down
      setMonsterState ({
        x: monster.x,
        y: monster.y < 10 ? monster.y + 1 : monster.y,
      })
    }
    setAllowInput(false);
    TimeRanges.current = setTimeout(() => {
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