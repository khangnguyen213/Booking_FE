import styles from "./Featured.module.css";
import imgDN from "../../../data/image/DN.jpg";
import imgHN from "../../../data/image/HN.jpg";
import imgHCM from "../../../data/image/HCM.jpg";
import { Fragment, useEffect, useState } from "react";

const sampleData = {
  numberOfHotelInDN: 10,
  numberOfHotelInHCM: 10,
  numberOfHotelInHN: 10,
};

const Featured = () => {
  const [overviewData, setOverviewData] = useState(sampleData);
  // useEffect(() => {
  //   fetch("http://localhost:5000/overview")
  //     .then((res) => {
  //       if (!res.ok) {
  //         throw new Error(res.statusText);
  //       }
  //       return res.json();
  //     })
  //     .then((result) => setOverviewData(result))
  //     .catch((err) => console.log(err));
  // }, [setOverviewData]);
  return (
    <Fragment>
      {overviewData && (
        <div className={styles.featured}>
          <div className={styles.featuredItem}>
            <img src={imgDN} alt="" className={styles.featuredImg} />
            <div className={styles.featuredTitles}>
              <h1>Da Nang</h1>
              <h2>{overviewData.numberOfHotelInDN} properties</h2>
            </div>
          </div>

          <div className={styles.featuredItem}>
            <img src={imgHCM} alt="" className={styles.featuredImg} />
            <div className={styles.featuredTitles}>
              <h1>Ho Chi Minh</h1>
              <h2>{overviewData.numberOfHotelInHCM} properties</h2>
            </div>
          </div>
          <div className={styles.featuredItem}>
            <img src={imgHN} alt="" className={styles.featuredImg} />
            <div className={styles.featuredTitles}>
              <h1>Ha Noi</h1>
              <h2>{overviewData.numberOfHotelInHN} properties</h2>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Featured;
