import styles from "./App.module.scss";
import Searh from './components/search/idex';
import Parameters from './components/parameters';
import Data from './components/data';
import { useEffect, useRef } from 'react';
import DataHour from "./components/dataHour";

function App() {
  const snowContainerRef = useRef(null);

  useEffect(() => {
    const snowContainer = snowContainerRef.current;

    function createSnowflake() {
      const snowflake = document.createElement('div');
      snowflake.classList.add(styles.snowflake);
      snowflake.textContent = '❄';

      // Случайное положение и параметры
      snowflake.style.left = `${Math.random() * 95}vw`; // Горизонтальное положение
      const duration = Math.random() * 3 + 2; // 2–5 секунд падения
      snowflake.style.animationDuration = `${duration}s`;
      snowflake.style.fontSize = `${Math.random() * 10 + 10}px`; // Размер 10–20px

      snowContainer.appendChild(snowflake);

      snowflake.addEventListener('animationend', () => {
        if (snowflake.parentElement) {
          snowflake.parentElement.removeChild(snowflake);
        }
      });
    }

    const interval = setInterval(createSnowflake, 20);

    return () => clearInterval(interval); // Очищаем таймер при размонтировании компонента
  }, []);

  return (
    <div className={styles.container}>
      <header className={styles.container_header}>
        <Searh />
        <Parameters />
        <DataHour/>
      </header>
      <main className={styles.container_main}>
        <Data />
      </main>
      <div ref={snowContainerRef} className={styles.snow_container}></div>
    </div>
  );
}

export default App;
