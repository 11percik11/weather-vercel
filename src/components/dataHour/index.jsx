import React from "react";
import styles from "./index.module.scss";
import { useSelector } from "react-redux";

function DataHour() {
  const { data, error } = useSelector((state) => state.weather);

  if (error) {
    return <div className={styles.error}>Ошибка: {error}</div>;
  }

  if (!data) {
    return <></>;
  }
  console.log(data);

  return (
    <div className={styles.data_hour}>
      {data.forecast.forecastday[0].hour.map((e) => (
        <div className={styles.box_item}>
          <div>{e.time.split(" ")[1]}</div>
          <div>{e.temp_c}°С</div>
        </div>
      ))}
    </div>
  );
}

export default DataHour;
