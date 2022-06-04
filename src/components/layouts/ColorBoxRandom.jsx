import { useState, useEffect, useRef } from 'react';
import chroma from 'chroma-js';

function ColorBoxRandom({ color, shades }) {
  const [color1, setColor1] = useState(null);
  const [colorBg, setColorBg] = useState(null);
  const [colorName, setColorName] = useState('');

  const elementRef = useRef();

  function checkTextContrast(colorX) {
    const luminance = chroma(colorX).luminance();
    if (luminance > 0.5) {
      return chroma.mix(colorX, 'black', 0.6).darken(0.5);
    } else {
      return chroma.mix(colorX, 'white', 0.5).brighten(0.5);
    }
  }

  function generateHex() {
    const hexColor = chroma.random();
    return hexColor;
  }

  function randomColors() {
    const randomColor = generateHex();
    const text = checkTextContrast(randomColor);
    const chromaTest = JSON.stringify(randomColor);
    setColor1(text);
    setColorBg(randomColor);
    setColorName(chromaTest);
  }

  useEffect(() => {
    const divElement = elementRef.current;
    console.log(divElement.innerText);
    randomColors();
  }, []);

  return (
    <div>
      <div
        className="testtest"
        style={{ backgroundColor: colorBg, color: color1 }}
        ref={elementRef}>
        <h1>{colorName}</h1>
      </div>
    </div>
  );
}

export default ColorBoxRandom;
