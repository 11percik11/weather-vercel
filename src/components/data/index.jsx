import React from 'react'
import styles from "./index.module.scss";
import { useSelector } from 'react-redux';
import cloud  from '../../assets/cloud-white.svg'
import moment from 'moment';


function Data() {
    const currentDate = moment().format('h:mm-dddd,DMMMYY');
    const { data, error } = useSelector((state) => state.weather);

  if (error) {
    return <div className={styles.data}>Ошибка: {error}</div>;
  }

  if (!data) {
    return <div className={styles.data}>Введите название города для поиска</div>;
  }
  return (
    <div className={styles.data}>
        <div className={styles.data_temp}>
            {data.current.temp_c}°С
        </div>
        <div className={styles.data_date}>
            <div className={styles.data_location}>
                <div className={styles.data_locationName}>{data.location.name}</div>
                <div className={styles.data_locationDate}>{currentDate}</div>
            </div>
            <div>
                <img className={styles.data_img} src={cloud} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Data