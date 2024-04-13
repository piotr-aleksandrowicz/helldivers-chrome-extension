import React, { useState, useEffect } from 'react';

import { availableStratagems } from './avaliableStratgems';
import {
  useKeyPress,
  pickArrow,
  randomGameText,
  seconds,
  milliseconds,
  randomArrayElement,
  parseGameMode
} from './helpers';
import config from './config';

function StratagemsGame(props) {
  // States
  // states to store time
  const [bestTime, setBestTime] = useState(0);
  const [time, setTime] = useState(0);
  const [timeToBeat, setTimeToBeat] = useState(config.timeToBeat);
  // dropdown state
  const [dropdownOpen, setDropdownOpen] = useState(false);
  // state to check stopwatch running or not
  const [isRunning, setIsRunning] = useState(false);
  // game states
  const [stratgem, setStratgem] = useState(availableStratagems[0]);
  const [arrows, setArrows] = useState(stratgem.arrows);
  const [gameText, setGameText] = useState('');
  const [game, setGame] = useState();
  const [bestCombo, setBestCombo] = useState(0);
  const [combo, setCombo] = useState(0);

  // Key presses configuration
  const arrowUpPressed = useKeyPress('ArrowUp');
  const wPressed = useKeyPress('w');
  const arrowDownPressed = useKeyPress('ArrowDown');
  const sPressed = useKeyPress('s');
  const arrowRightPressed = useKeyPress('ArrowRight');
  const dPressed = useKeyPress('d');
  const arrowLeftPressed = useKeyPress('ArrowLeft');
  const aPressed = useKeyPress('a');

  const randomMode = props.mode == 'random';

  useEffect(() => {
    let intervalId;
    if (isRunning) intervalId = setInterval(() => setTime(time + 1), 10);
    return () => clearInterval(intervalId);
  }, [isRunning, time]);

    // Timer methods
  const startTimer = () => { setIsRunning(true) };
  const stopTimer = () => { setIsRunning(false) };
  const resetTimer = () => { setTime(0) };

  const sleep = ms => new Promise(r => setTimeout(r, ms));

  const handleDropdownOpen = () => {
    if(!randomMode && time == 0) setDropdownOpen(!dropdownOpen);
  };

  function selectStratagem(value) {
    let newStratgem = availableStratagems.filter((stratgem) => stratgem.value === value)[0];
    setStratgem(newStratgem);
    setDropdownOpen(!dropdownOpen);
  }

  function randomStratagem() {
    let nextStratagem = randomArrayElement(availableStratagems);
    while(nextStratagem == stratgem) {
      nextStratagem = nextStratagem = randomArrayElement(availableStratagems);
    }
    return nextStratagem;
  }

  async function flashArrows(wait = 0, failed = false) {
    await sleep(wait);
    const blankArrows = arrows.map((arrow) => {
      return { id: arrow.id, class: arrow.class, active: false, completed: false, failed: false };
    });
    const completdArrows = arrows.map((arrow) => {
      return { id: arrow.id, class: arrow.class, active: false, completed: failed ? arrow.completed : true, failed: failed };
    });
    let interval = 0;
    let timeHolder = time;
    while(interval < 15) {
      if(interval % 2 == 0) {
        setArrows(blankArrows);
        if(randomMode) setTime(timeToBeat);
      } else {
        setArrows(completdArrows);
        if(randomMode) setTime(0);
      }
      interval +=1;

      await sleep(100);
    }
    if(randomMode) setTime(timeHolder);
  }

  async function checkArrow(arrowPressed) {
    let failedArrows = arrows.filter((arrow) => arrow.failed);
    if(failedArrows.length) return;

    let completedArrows = arrows.filter((arrow) => arrow.completed);
    if(completedArrows.length === arrows.length) return;

    let activeArrow = arrows.filter((arrow) => arrow.active)[0];
    if(activeArrow.class === arrowPressed) {
      if(completedArrows.length === 0) startTimer();
      const nextArrows = arrows.map((arrow) => {
        if (arrow.id === activeArrow.id) {
          return { id: arrow.id, class: arrow.class, active: false, completed: true, failed: arrow.failed };
        } else if (arrow.id === activeArrow.id + 1) {
          return { id: arrow.id, class: arrow.class, active: true, completed: arrow.completed, failed: arrow.failed };
        } else {
          return arrow;
        }
      });

      completedArrows = nextArrows.filter((arrow) => arrow.completed);
      if(completedArrows.length === arrows.length) {
        setGame('succesfull');
        stopTimer();
        if (bestTime == 0 || time < bestTime) setBestTime(time);
        setGameText(randomGameText('succesfull', gameText));
        await flashArrows();

        if(randomMode) {
          setStratgem(randomStratagem());
          startTimer();
          setTimeToBeat(timeToBeat + config.timeBonus + ( stratgem.arrows.length * 10 ));
          setCombo(combo + 1);
        } else {
          resetArrows()
        }
        setGame(null);
      } else {
        setArrows(nextArrows);
      }

    } else {
      stopTimer();
      const nextArrows = arrows.map((arrow) => {
        return { id: arrow.id, class: arrow.class, active: arrow.active, completed: arrow.completed, failed: true };
      });
      setArrows(nextArrows);
      setGame('failed');
      setGameText(randomGameText('failed', gameText));

      await flashArrows(500, true);
      setGame(null);
      resetArrows();
      setTimeToBeat(config.timeToBeat);
      if(randomMode) setCombo(0);
    }
  }

  function resetArrows() {
    setArrows(stratgem.arrows);
    resetTimer();
  }

  useEffect(() => {
    randomMode ? setStratgem(randomStratagem()) : setStratgem(availableStratagems[0])
  }, [props]);

  useEffect(() => {
    if(combo > bestCombo) setBestCombo(combo);
  }, [combo]);

  useEffect(() => {
    setArrows(stratgem.arrows);
  }, [stratgem]);

  useEffect(() => {
    if ((arrowUpPressed || wPressed) && !game) checkArrow('arrowUp');
  }, [arrowUpPressed, wPressed]);

  useEffect(() => {
    if ((arrowDownPressed || sPressed) && !game) checkArrow('arrowDown');
  }, [arrowDownPressed, sPressed]);

  useEffect(() => {
    if ((arrowRightPressed || dPressed) && !game) checkArrow('arrowRight');
  }, [arrowRightPressed, dPressed]);

  useEffect(() => {
    if ((arrowLeftPressed || aPressed) && !game) checkArrow('arrowLeft');
  }, [arrowLeftPressed, aPressed]);

  useEffect(() => {
    if (timeToBeat - time < 0) {
      checkArrow('nonExistentButton');
      setCombo(0);
    }
  }, [time]);

  return (
    <div>
      <button className='stratagemButton' onClick={handleDropdownOpen}>
        <img src={stratgem.logo} />
        { stratgem.label }
        <div className={ dropdownOpen && !randomMode ? 'stratagemDropown open' : 'stratagemDropown closed' }>
          {dropdownOpen && !randomMode ? (
            availableStratagems.map(s => (
              <button key={s.value} className='stratagemOption' onClick={ () => { selectStratagem(s.value)} }>{<img src={s.logo}/>}{s.label}</button>
            ))
          ) : null}
        </div>
      </button>
      <div className="stratgemGame">
        {arrows.map((arrow) => {
          return <img key={arrow.id} src={pickArrow(arrow)} className={`arrow ${arrow.class}`}/>
        })}
      </div>

      <div className="freedomSpeach">
        <p>{gameText}</p>
      </div>

      {props.mode == 'random' ? (
        <div>
          <div className="scores">
            <p>Combo: { combo }</p>
            <p>Best Combo: { bestCombo }</p>
          </div>

          <div className="progrss-bar-parent">
            <div className="progress-bar" style={{width: ` ${parseInt(100 - (time * 100) / timeToBeat)}%`}}></div>
          </div>
        </div>
      ) : (
        <div>
          <div className="scores">
            <p>Time: {seconds(time).toString().padStart(2, "0")}:{milliseconds(time).toString().padStart(2, "0")}</p>
            <p>Best Time: {seconds(bestTime).toString().padStart(2, "0")}:{milliseconds(bestTime).toString().padStart(2, "0")}</p>
          </div>
        </div>
      )}

      {!time ? (
        <div className="tips">
          <p>Press arrow to start game</p>
          <p>click {parseGameMode(props.mode)} button to change game mode</p>
        </div>
      ) : null }
    </div>
  );
}

export default StratagemsGame;
