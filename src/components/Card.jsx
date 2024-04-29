import { useState } from 'react';

import styles from './Card.module.css';

import iconClose from '../assets/icon-close.svg';
import iconCross from '../assets/icon-cross.svg';
import iconTwitter from '../assets/icon-twitter.svg';
import iconLinkedin from '../assets/icon-linkedin.svg';

export default function Card ({ name, title, avatar, quote, opened }) {
  const [isOpened, setIsOpened] = useState(opened);
	const onChange = (e) => setIsOpened(e.target.checked);
  
	return (
    <div className={styles.card}>
	    <div className={styles.cardInner}>
		  { !isOpened && <img className={styles.cardAvatar} src={avatar.src} alt="featured director" /> }
		  <p className={styles.cardName}>{name}</p>
		  { !isOpened && <p className={styles.cardTitle}>{title}</p> }
			{ isOpened && <p className={styles.cardText}>{quote}</p> }
      { isOpened && 
          <div className={styles.cardSocials}>
            <img src={iconTwitter.src} alt={`${name}'s twitter icon`} />
            <img src={iconLinkedin.src} alt={`${name}'s linkedin icon`} />
          </div>
      }
	  </div>
	  <div className={styles.cardOuter}>
		  <input className={styles.cardCheckbox} type="checkbox" name="cc" onChange={onChange} defaultChecked={isOpened} checked={isOpened} />
		  <div className={styles.cardExpansion}>
        <img className={styles.expansionIcon} src={isOpened ? iconClose.src : iconCross.src } alt="open/close icon" />
		  </div>
	  </div>
  </div>
  );
}
