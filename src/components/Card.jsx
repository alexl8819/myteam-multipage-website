import { useState, useEffect } from 'react';

import styles from './Card.module.css';

import iconClose from '../assets/icon-close.svg';
import iconCross from '../assets/icon-cross.svg';
import iconTwitter from '../assets/icon-twitter.svg';
import iconLinkedin from '../assets/icon-linkedin.svg';

export default function Card ({ name, title, avatar, quote, opened=false }) {
  const [isOpened, setIsOpened] = useState(false);
  const onChange = (e) => setIsOpened(e.target.checked);

  useEffect(() => {
    setIsOpened(opened);
  }, [opened]);

  return (
    <div className={styles.card}>
      <div className={styles.cardInner}>
      { !isOpened && <img className={styles.cardAvatar} src={avatar.src} alt="featured director" loading="lazy" /> }
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
      <input className={styles.cardCheckbox} type="checkbox" name="cc" onChange={onChange} checked={isOpened} />
      <div className={styles.cardExpansion}>
        <img className={styles.expansionIcon} src={isOpened ? iconClose.src : iconCross.src } alt="open/close icon" loading="lazy" />
      </div>
    </div>
  </div>
  );
}
