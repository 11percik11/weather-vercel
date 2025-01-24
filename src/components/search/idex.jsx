import React, { useState } from 'react';
import SVG_searc from '../../assets/search.svg';
import { useDispatch } from 'react-redux';
import { setWeatherData } from '../features/weatherSlice';
import styles from './index.module.scss';


import axios from 'axios';

function Searh() {
  const [data, setData] = useState();
  const [country, setCountry] = useState('');
  const dispatch = useDispatch();

  // console.log(import.meta.env.VITE_DATA_URL_KEY);
  
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/forecast.json?key=${import.meta.env.VITE_DATA_URL_KEY}&q=${country}&days=7&aqi=no&alerts=no`
      );
      dispatch(setWeatherData(response.data));
      setData(response.data);
    } catch (error) {
      console.error('Ошибка при получении данных:', error);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      fetchData();
    }
  };

  return (
    <div className={styles.search}>
      <input
        className={styles.search_input}
        onChange={(e) => setCountry(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Search Location"
        type="text"
      />
      <button className={styles.search_button} onClick={fetchData}>
        <img className={styles.search_svg} src={SVG_searc} alt="Search" />
      </button>
    </div>
  );
}

export default Searh;
