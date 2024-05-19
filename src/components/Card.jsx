import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import styles from './Card.module.css';

import iconClose from '../assets/icon-close.svg';
import iconCross from '../assets/icon-cross.svg';
import iconTwitter from '../assets/icon-twitter.svg';
import iconLinkedin from '../assets/icon-linkedin.svg';

function Card ({ name, title, avatar, quote, opened=false }) {
  const [isOpened, setIsOpened] = useState(false);
  const onChange = (e) => setIsOpened(e.target.checked);

  useEffect(() => {
    setIsOpened(opened);
  }, [opened]);

  return (
    <div className={styles.card}>
      <div className={styles.cardInner}>
      { !isOpened && <img className={styles.cardAvatar} src={avatar} alt="featured director" loading="lazy" /> }
      <p className={styles.cardName}>{name}</p>
      { !isOpened && <p className={styles.cardTitle}>{title}</p> }
      { isOpened && <p className={styles.cardText}>{quote}</p> }
      { isOpened && 
          <div className={styles.cardSocials}>
            <img className={styles.socialsIcon} src={iconTwitter.src} alt={`${name}'s twitter icon`} loading="lazy" />
            <img className={styles.socialsIcon} src={iconLinkedin.src} alt={`${name}'s linkedin icon`} loading="lazy" />
          </div>
      }
      </div>
      <div className={styles.cardOuter}>
        <label className="sr-only" for="card-toggle">card toggle</label>
        <input className={styles.cardCheckbox} type="checkbox" name="card-toggle" id="card-toggle" onChange={onChange} checked={isOpened} />
        <div className={styles.cardExpansion}>
          <img className={styles.expansionIcon} src={isOpened ? iconClose.src : iconCross.src } alt={`open/close icon for ${name}`} loading="lazy" />
        </div>
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
