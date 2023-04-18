import styles from "./List.module.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "./searchItem/SearchItem";

import sampleData from "../../data/hotels.json";

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);
  const [searchedItems, setSearchedItems] = useState(sampleData);

  // useEffect(() => {
  //   if (destination) {
  //     const requestBody = { destination, date, openDate, options };
  //     console.log(requestBody);
  //     console.log("FETCH POST SEARCH");
  //     fetch("http://localhost:5000/search", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(requestBody),
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setSearchedItems(data);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }
  // }, []);

  const searchClickHandler = () => {
    console.log("FETCH POST SEARCH");
    const requestBody = { destination, date, openDate, options };
    console.log(requestBody);
    fetch("http://localhost:5000/search", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    })
      .then((res) => res.json())
      .then((data) => {
        setSearchedItems(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const displaySearchedItems = () => {
    return searchedItems.map((searchedItem) => {
      return (
        <SearchItem
          key={searchedItem.name}
          hotelData={searchedItem}
          date={date}
        />
      );
    });
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className={styles.listContainer}>
        <div className={styles.listWrapper}>
          <div className={styles.listSearch}>
            <h1 className={styles.lsTitle}>Search</h1>
            <div className={styles.lsItem}>
              <label>Destination</label>
              <input
                placeholder={destination}
                type="text"
                onBlur={(e) => {
                  setDestination(e.target.value);
                }}
              />
            </div>
            <div className={styles.lsItem}>
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className={styles.lsItem}>
              <label>Options</label>
              <div className={styles.lsOptions}>
                <div className={styles.lsOptionItem}>
                  <span className={styles.lsOptionText}>
                    Min price <small>per night</small>
                  </span>
                  <input
                    type="number"
                    className={styles.lsOptionInput}
                    onBlur={(e) => {
                      setOptions((prevState) => {
                        return { ...prevState, minPrice: e.target.value };
                      });
                    }}
                  />
                </div>
                <div className={styles.lsOptionItem}>
                  <span className={styles.lsOptionText}>
                    Max price <small>per night</small>
                  </span>
                  <input
                    type="number"
                    className={styles.lsOptionInput}
                    onBlur={(e) => {
                      setOptions((prevState) => {
                        return { ...prevState, maxPrice: e.target.value };
                      });
                    }}
                  />
                </div>
                <div className={styles.lsOptionItem}>
                  <span className={styles.lsOptionText}>Adult</span>
                  <input
                    type="number"
                    min={1}
                    className={styles.lsOptionInput}
                    placeholder={options.adult}
                    onBlur={(e) => {
                      setOptions((prevState) => {
                        return { ...prevState, adult: e.target.value };
                      });
                    }}
                  />
                </div>
                <div className={styles.lsOptionItem}>
                  <span className={styles.lsOptionText}>Children</span>
                  <input
                    type="number"
                    min={0}
                    className={styles.lsOptionInput}
                    placeholder={options.children}
                    onBlur={(e) => {
                      setOptions((prevState) => {
                        return { ...prevState, children: e.target.value };
                      });
                    }}
                  />
                </div>
                <div className={styles.lsOptionItem}>
                  <span className={styles.lsOptionText}>Room</span>
                  <input
                    type="number"
                    min={1}
                    className={styles.lsOptionInput}
                    placeholder={options.room}
                    onBlur={(e) => {
                      setOptions((prevState) => {
                        return { ...prevState, room: e.target.value };
                      });
                    }}
                  />
                </div>
              </div>
            </div>
            <button onClick={searchClickHandler}>Search</button>
          </div>
          <div className={styles.listResult}>
            {searchedItems && displaySearchedItems()}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default List;
