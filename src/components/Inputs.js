import { useEffect, useCallback, useRef } from 'react';
import { atom, useRecoilState }  from 'recoil';
import { buildingsAtom } from './Atoms';

function Inputs() {
  const monsterState = atom ({
    key: "monsterState",
    default: { x:5, y:10, facing: 'up', dead: 'false'},
  });
  const [monster, setMonster] = useRecoilState(monsterState);
  const [buildings, setBuildings] = useRecoilState(buildingsAtom);
  
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
    let buildingCheckBool;
    if (!allowInput || monster.dead === true) {
      return;
    }
    function checkBuilding(e) {
      buildings.forEach((building) => {
        if (e.keyCode === 37) {
          // left
          if (monster.x - 1 === building.value.x && monster.y === building.value.y) { 
            setMonster ({
              x: monster.x,
              y: monster.y,
              facing: 'left'
            });
            buildingCheckBool = true;
          } else {
            buildingCheckBool = false;
          }
        }
        else if (e.keyCode === 39) {
          //right    
          if (monster.x + 1 === building.value.x && monster.y === building.value.y) { 
            setMonster ({
              x: monster.x,
              y: monster.y,
              facing: 'right'
            })
            buildingCheckBool = true;
          } else {
            buildingCheckBool = false;
          }
        }
        else if (e.keyCode === 38) {
          //up    
          if (monster.x === building.value.x && monster.y - 1 === building.value.y) { 
            setMonster ({
              x: monster.x,
              y: monster.y,
              facing: 'up'
            })
            buildingCheckBool = true;
          } else {
            buildingCheckBool = false;
          }
        }
        else if (e.keyCode === 40) {
          //down    
          if (monster.x === building.value.x && monster.y + 1 === building.value.y) { 
            setMonster ({
              x: monster.x,
              y: monster.y,
              facing: 'down'
            })
            buildingCheckBool = true;
          } else {
            buildingCheckBool = false;
          }
        }
      })
    };
    function moveMonster(e) {
      if (e.keyCode === 37){
        setMonster ({
          x: monster.x > 0 ? monster.x - 1 : 0,
          y: monster.y,
          facing: 'left',
        });
      }
      else if (e.keyCode === 39) {
        setMonster ({
          x: monster.x < 10  ? monster.x + 1 : 10,
          y: monster.y,
          facing: 'right',
        });
      }  
      else if (e.keyCode === 38) {
        setMonster ({
          x: monster.x, 
          y: monster.y > 1 ? monster.y - 1 : 1,
          facing: 'up',
        });
      }
      else if (e.keyCode === 40) {
        setMonster ({
          x: monster.x,
          y: monster.y < 10 ? monster.y + 1 : 10,
          facing: 'down',
        });
      }
    };
    function monsterAttack(e){
      const newBuildings = buildings.map((building) => {
        if (e.keyCode === 65){
          if ((monster.x === building.value.x && monster.y -1  === building.value.y && monster.facing === 'up') ||
          (monster.x === building.value.x && monster.y + 1 === building.value.y && monster.facing === 'down') ||
          (monster.x - 1 === building.value.x && monster.y === building.value.y && monster.facing === 'left') ||
          (monster.x + 1 === building.value.x && monster.y === building.value.y && monster.facing === 'right')) {
            const updatedHealth = building.value.health - 1;
              const updateHealth = () => {
                const updatedStuff = ({...building, value:{...building.value, ['health']: updatedHealth}});
                return updatedStuff;
              }
              return updateHealth();
            } else {
              return building;
            }
          } else {
            return building;
          }          
        });
        setBuildings(newBuildings);
    }

    checkBuilding(e);
    if (buildingCheckBool === false) {
      moveMonster(e);
    } else {
      monsterAttack(e);
    };    
    checkBuilding(e);
    setAllowInput(false);
    movementTimer.current = setTimeout(() => {
      setAllowInput(true);
    }, 500);
  },
  [monster, setMonster, buildings, setBuildings, allowInput, setAllowInput]
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