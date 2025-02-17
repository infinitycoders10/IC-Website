import React, { useEffect, useState } from "react";
import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";
import styles from "../../styles/Footer.module.css";

const Footer = (props) => {
  const [isAppleDevice, setIsAppleDevice] = useState(false);
  useEffect(() => {
    setIsAppleDevice(/Firefox|iPhone|iPad|iPod/i.test(navigator.userAgent));
  }, []);

  return (
    <footer
      className={
        props.theme ? styles.footerContainer_light : styles.footerContainer
      }
    >
      <div className={styles.footer}>
        <div
          className={isAppleDevice ? styles.appleFooterText : styles.footerText}
        >
          <h1>Join us today!</h1>
          <h2>Try! Catch! Show!</h2>
        </div>
        <div className={styles.social_media}>
          <a
            href="https://www.linkedin.com/company/infinity-coders/"
            className={styles.linkedin}
            target="_blank"
          >
            <FaLinkedin
              className={
                props.theme ? styles.social_icon_light : styles.social_icon
              }
            />
          </a>
          <a
            href="https://github.com/"
            className={styles.github}
            target="_blank"
          >
            <FaGithub
              className={
                props.theme ? styles.social_icon_light : styles.social_icon
              }
            />
          </a>
          {props.about ? (
            <a
              href="https://www.instagram.com/rsdc_ic/"
              target="_blank"
              rel="noreferrer"
              className={`fab fa-instagram ${props.theme
                  ? styles.insta + " " + styles.insta_light
                  : styles.social_icon + " " + styles.insta
                }`}
            ></a>
          ) : (
            <a
              href="https://www.instagram.com/rsdc_ic/"
              target="_blank"
              rel="noreferrer"
              className={`fa fa-instagram ${props.theme
                  ? styles.insta + " " + styles.insta_light
                  : styles.social_icon + " " + styles.insta
                }`}
            ></a>
          )}
          <a
            href="https://discord.com/"
            className={styles.discord}
            target="_blank"
          >
            <FaDiscord
              className={
                props.theme ? styles.social_icon_light : styles.social_icon
              }
            />
          </a>
          <br />
          <h3
            style={{
              textAlign: "center",
              paddingTop: "3rem",
            }}
          >
            <a
              href="https://chat.whatsapp.com/FD64HPfadwU0Vb4pA0vsLz"
              style={{ textDecoration: "none", color: "inherit" }}
              target="_blank"
            >
              Join Us Today
            </a>
          </h3>
        </div>

        <p
          style={{
            color: "grey",
            position: "absolute",
            bottom: "0",
            textAlign: "center",
          }}
        >
          Develop By InfinityCoders
        </p>
      </div>
    </footer>
  );
};

export default Footer;
