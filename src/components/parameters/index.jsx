import React from 'react'
import styles from "./index.module.scss";
import temp_max  from '../../assets/temp-max.svg'
import temp_min  from '../../assets/temp-min.svg'
import drop  from '../../assets/drop.svg'
import cloud  from '../../assets/cloud.svg'
import wind  from '../../assets/wind.svg'
import { useSelector } from 'react-redux';

function Parameters() {
    const { data, error } = useSelector((state) => state.weather);

  if (error) {
    return <div className={styles.error}>Ошибка: {error}</div>;
  }

  if (!data) {
    return <div className={styles.placeholder}>Введите название города для поиска</div>;
  }
  console.log(data);
  
  

  return (
    <div className={styles.parameters}>
        <h3 className={styles.parameters_h3}></h3>
        <div className={styles.parameters_box}>
            <p className={styles.parameters_item}>Temp max</p>
            <p>{data.forecast.forecastday[0].day.maxtemp_c}°С</p>
            <img src={temp_max} alt="" />
        </div>
        <div className={styles.parameters_box}>
            <p className={styles.parameters_item}>Temp min</p>
            <p>{data.forecast.forecastday[0].day.mintemp_c}°С</p>
            <img src={temp_min} alt="" />
        </div>
        <div className={styles.parameters_box}>
            <p className={styles.parameters_item}>Humandity</p>
            <p>{data.forecast.forecastday[0].day.avghumidity}%</p>
            <img src={drop} alt="" />
        </div>
        <div className={styles.parameters_box}>
            <p className={styles.parameters_item}>Cloude</p>
            <p>86%</p>
            <img src={cloud} alt="" />
        </div>
        <div className={styles.parameters_box}>
            <p className={styles.parameters_item}>Wind</p>
            <p>{data.current.wind_kph}km/h</p>
            <img src={wind} alt="" />
        </div>
    </div>
  )
}

export default Parameters