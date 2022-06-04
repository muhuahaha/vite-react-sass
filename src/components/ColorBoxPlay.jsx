import { useState, useEffect } from 'react';
import chroma from 'chroma-js';

function ColorBoxPlay({ color }) {
  const [color1, setColor1] = useState(null);

  function checkTextContrast(colorX) {
    const luminance = chroma(colorX).luminance();
    if (luminance >= 0.5) {
      return chroma.mix(colorX, 'black', 0.6).darken(0.5);
    } else {
      return chroma.mix(colorX, 'white', 0.5).brighten(0.5);
    }
  }

  function textColors() {
    const colorChroma = color;
    const text = checkTextContrast(colorChroma);
    setColor1(text);
  }

  useEffect(() => {
    textColors();
  }, []);

  return (
    <div>
      <div className="colorBox" style={{ background: color, color: color1 }}>
        {color}
      </div>
    </div>
  );
}

export default ColorBoxPlay;
