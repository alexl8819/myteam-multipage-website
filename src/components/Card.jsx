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

  const toggleId = name.split(' ')[0].toLowerCase();

  useEffect(() => {
    setIsOpened(opened);
  }, [opened]);

  return (
    <div className={styles.card}>
      <div className={styles.cardInner}>
      { !isOpened && <img className={styles.cardAvatar} src={avatar} alt={`avatar for ${name}`} loading="lazy" /> }
      <h3 className={styles.cardName}>{name}</h3>
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
        <label className="sr-only" htmlFor={`${toggleId}-card-toggle`}>card toggle</label>
        <input className={styles.cardCheckbox} type="checkbox" name={`${toggleId}-card-toggle`} id={`${toggleId}-card-toggle`} onChange={onChange} checked={isOpened} />
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
