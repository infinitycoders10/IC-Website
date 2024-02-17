import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import styles from "../styles/about.module.css";
import Head from "next/head";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import styles1 from "../styles/events.module.css";
import CloseIcon from "@mui/icons-material/Close";

import { BsTrophy } from "react-icons/bs";
import { SiGithubsponsors } from "react-icons/si";
import events from "../data/events.json";

const PopupCard = ({ pic, event = [] }) => {
  return (
    <div className={styles1.flex_container}>
      <img src={pic}></img>
      <div className={styles1.flex_div_right}>
        <div className={styles1.top}>
          <h1 className={styles1.event_name}>{event.EventName}</h1>
          <h6 className={styles1.category_tag}>{event.Tag}</h6>
        </div>
        <div className="middle">
          <p className={styles1.description}>{event.Description}</p>
        </div>
        <div className="bottom">
          <h4 className={styles1.link}>Link: {event.Link}</h4>
          <h4 className={styles1.location}>Location: {event.Location}</h4>
          <h4 className={styles1.coordinator}>Coordinator: {event.Coordinator}</h4>
        </div>
      </div>
    </div>
  );
};

const EventCard = ({ pic, event = [] }) => {
  const [modal, setModal] = useState(false);
  const [tempImg, setTempImg] = useState("");

  const getImg = (img) => {
    setTempImg(img);
    setModal(true);
    document.body.style.overflow = "visible";
  };

  return (
    <>
      <div
        className={modal ? styles1.modal + " " + styles1.open : styles1.modal}
      >
        <PopupCard pic={tempImg} event={event} />
        <CloseIcon
          onClick={() => {
            setModal(false);
            document.body.style.overflow = "visible";
          }}
          className={styles1.CloseIcon}
        />
      </div>
      <div
        className={styles1.grid_item}
        onClick={() => {
          getImg(pic);
          document.body.style.overflow = "hidden";
        }}
      >
        <img src={pic} alt="Image"></img>
      </div>
    </>
  );
};

const Events = (props) => {
  const [isAppleDevice, setIsAppleDevice] = useState(false);

  useEffect(() => {
    setIsAppleDevice(/Firefox|iPhone|iPad|iPod/i.test(navigator.userAgent));
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Infinity Coders</title>
        <meta name="description" content="Official Rungta Coding Club Website" />
        <link rel="icon" href="/faviconn.ico" />

        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
        />
      </Head>
      <Navbar transfer={props.theme} setTheme={props.setTheme} />
      <main
        className={
          props.theme
            ? styles.about_main_container_light
            : styles.about_main_container
        }
      >
        {isAppleDevice ? (
          <div className={styles.appleHeader}>
            <h1>Events</h1>
          </div>
        ) : (
          <div className={styles.header}>
            <h1>Events</h1>
          </div>
        )}
        <div className={styles1.grid_container}>
          {events.map((event, i) => (
            <EventCard pic={event.Pic} key={i} event={event} />
          ))}
        </div>
      </main>
      <div className={styles.placeholder}>
        <Footer theme={props.theme} about={true} />
      </div>
    </div>
  );
};

export default Events;