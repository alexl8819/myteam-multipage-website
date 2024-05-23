import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// import classnames from 'classnames/bind';

import styles from './Card.module.css';

import iconClose from '../assets/icon-close.svg';
import iconCross from '../assets/icon-cross.svg';
import iconTwitter from '../assets/icon-twitter.svg';
import iconLinkedin from '../assets/icon-linkedin.svg';

// const cx = classnames.bind(styles);

function Card ({ name, title, avatar, quote, opened=false }) {
  const [isOpened, setIsOpened] = useState(false);
  const onClick = (e) => setIsOpened(!isOpened);
  const fullName = name.split(' ').join('');

  useEffect(() => {
    setIsOpened(opened);
  }, [opened]);

  return (
    <div className={styles.card}>
      <div className={styles.cardInner}>
      { !isOpened && <img className={styles.cardAvatar} src={avatar} alt={`${name}'s avatar`} loading="lazy" /> }
      <h3 className={styles.cardName}>{name}</h3>
      { !isOpened && <p className={styles.cardTitle}>{title}</p> }
      { isOpened && <p className={styles.cardText}>{quote}</p> }
      { isOpened && 
          <div className={styles.cardSocials}>
            <a href={`https://x.com/${fullName}`}><img className={styles.socialsIcon} src={iconTwitter.src} alt={`${name}'s twitter`} loading="lazy" /></a>
            <a href={`https://linkedin.com/${fullName}`}><img className={styles.socialsIcon} src={iconLinkedin.src} alt={`${name}'s linkedin`} loading="lazy" /></a>
          </div>
      }
      </div>
      <div className={styles.cardOuter}>
        <button type="button" className={styles.cardExpansion} onClick={onClick} aria-expanded={isOpened}>
          <img className={styles.expansionIcon} src={isOpened ? iconClose.src : iconCross.src } alt="" loading="lazy" />
        </button>
      </div>
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  opened: PropTypes.bool
};

export default Card;
