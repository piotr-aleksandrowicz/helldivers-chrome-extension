import { useState, useEffect } from 'react';

import arrowBlank from '../assets/arrow-blank.svg';
import arrowCompleted from '../assets/arrow-completed.svg';
import arrowFailed from '../assets/arrow-failed.svg';
import arrowBlankFailed from '../assets/arrow-blank-failed.svg';
import config from './config';

export const useKeyPress = (targetKey) => {
  const [keyPressed, setKeyPressed] = useState(false);

  useEffect(() => {
    const downHandler = ({ key }) => {
      if (key === targetKey) {
        setKeyPressed(true);
      }
    };

    const upHandler = ({ key }) => {
      if (key === targetKey) {
        setKeyPressed(false);
      }
    };

    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);

    return () => {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  }, [targetKey]);

  return keyPressed;
};

export function pickArrow(arrow) {
  if(arrow.completed && !arrow.failed) {
    return arrowCompleted;
  } else if(arrow.completed && arrow.failed) {
    return arrowFailed;
  } else if(!arrow.completed && !arrow.failed) {
    return arrowBlank;
  } else {
    return arrowBlankFailed;
  }
}

export function randomArrayElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

export function randomGameText(game, currentText = null) {
  let text;
  if(game == 'succesfull') {
    text = randomArrayElement(config.successTexts);
  } else if(game == 'failed') {
    text = randomArrayElement(config.failureTexts);
  }

  while(currentText == text) {
    text = randomGameText(game, currentText);
  }

  return text
}

export function seconds(time) {
  return Math.floor((time % 6000) / 100);
}

export function milliseconds(time) {
  return time % 100;
}

export function parseGameMode(currentGame) {
  return currentGame == 'random' ? 'Practice Random Stratagems' : 'Practice Selected Stratagems';
}
