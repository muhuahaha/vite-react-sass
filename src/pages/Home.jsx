import styles from '../styles/layouts/Home.module.scss';
import { useState, useEffect, useRef } from 'react';
import ColorBox from '../components/layouts/ColorBox';
import ColorBoxRandom from '../components/layouts/ColorBoxRandom';
import ColorBoxPlay from '../components/ColorBoxPlay';
import chroma from 'chroma-js';
import useWindowDimensions from '../hooks/windowDimensions';

import Points from '../components/Points';

function Home() {
  const [name, setName] = useState('');

  const { height, width } = useWindowDimensions();
  function generateHex() {
    const hexColor = chroma.random();
    return hexColor;
  }
  const colorsChroma = chroma.scale(['#fafa6e', '#2a4858']).mode('lch').colors(80);

  const renderCount = useRef(0);

  const colors = [
    'slate',
    'gray',
    'zinc',
    'neutral',
    'stone',
    'red',
    'orange',
    'amber',
    'yellow',
    'lime',
    'green',
    'emerald',
    'teal',
    'cyan',
    'sky',
    'blue',
    'indigo',
    'violet',
    'purple',
    'fuchsia',
    'pink',
    'rose'
  ];
  const shades = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'];

  function focus() {
    setColor1(generateHex());
  }

  let mystyle = {
    color: 'red',
    padding: '20px'
  };

  useEffect(() => {
    // divElement.style.backgroundColor = 'red';
  }, []);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  return (
    <div className={styles.container}>
      <input value={name} onChange={(e) => setName(e.target.value)}></input>
      <div>My name is {name}</div>{' '}
      <div>
        {width} - {height}
      </div>
      <div>I renderd {renderCount.current} time</div>
      <Points />
      <h2 className={styles.title}>Hallo from Home</h2>
      <h3 style={mystyle}>Hallo test small</h3>
      <div className="card">
        <h3 className="card-title">asdas</h3>
      </div>
      <h3 className={styles.card_title}>
        <button onClick={focus}>Test</button>
      </h3>
      <div className="card">
        {colors.map((color) =>
          shades.map((shade, index) => (
            <ColorBoxRandom key={index.toString()} color={color} shade={shade} />
          ))
        )}
      </div>
      <div className="card">
        {colors.map((color) =>
          shades.map((shade, i) => <ColorBox key={i.toString()} color={color} shade={shade} />)
        )}
      </div>
      <div className="card">
        {colorsChroma.map((color, i) => (
          <ColorBoxPlay key={i.toString()} color={color} />
        ))}
      </div>
    </div>
  );
}

export default Home;
