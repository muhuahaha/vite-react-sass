import { useState, useEffect, useRef } from 'react';
import chroma from 'chroma-js';

function ColorBox({ color, shade }) {
  const [color1, setColor1] = useState(shade);
  const elementRef = useRef();

  function checkTextContrast(color) {
    const luminance = chroma(color).luminance();
    if (luminance > 0.5) {
      return chroma.mix(color, 'black', 0.6).darken(0.5);
    } else {
      return chroma.mix(color, 'white', 0.5).brighten(0.5);
    }
  }

  const testValue = (test) => {
    if (test > 50) {
      return Math.abs(test - 1000);
    }
    if (test === '500') {
      console.log(test, 'tttttt');
      return color1;
    }
    return 900;
  };

  function generateHex() {
    const hexColor = chroma.random();
    return hexColor;
  }

  useEffect(() => {
    // console.log(elementRef.current.innerHTML === `${color}-500`, 'current');
    if (color1 === '500') {
      setColor1(900);
    }
  });

  return (
    <div className={`bg-${color}-${shade} text-${color}-${testValue(color1)}`}>
      <div ref={elementRef} className="testtest">
        {color}-{shade}
      </div>
    </div>
  );
}

export default ColorBox;
