import styles from '../styles/layouts/Home.module.scss';

function Home() {
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
    'emerald-test',
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

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Hallo from Home</h2>
      <h3 className="small-300 big-800">Hallo test small</h3>
      <h3 className="big-800">Hallo test big</h3>
      <div className="card">
        <h3 className="card-title">sass</h3>
      </div>
      <div className={styles.card}>
        <h3 className={styles.card_title}>modules</h3>
      </div>
      <div>
        {colors.map((color) =>
          shades.map((shade, i) => (
            <div key={i} className={`bg-${color}-${shade}`}>
              <p className={styles.title}>
                bg-{color}-{shade}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Home;
