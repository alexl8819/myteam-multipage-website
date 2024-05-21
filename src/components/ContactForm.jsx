import { useState, useMemo } from 'react';
import classnames from 'classnames/bind';

import { Button } from './Button';

import styles from './ContactForm.module.css';

const EMAIL_REGEX = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

const cx = classnames.bind(styles);

export default function ContactForm () {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [message, setMessage] = useState(null);

  const onSubmit = (e) => e.preventDefault();
  const isValidEmail = () => EMAIL_REGEX.test(email);
  const updateField = (setField) => (e) => setField(e.target.value);

  const classNameTextFor = (field, isEmail = false) => cx({
    groupTextinput: true,
    groupTextinputValid: field && field.length, 
    groupTextinputError: typeof field === 'string' && !field.length || (isEmail && typeof field === 'string' ? !isValidEmail() : false) 
  });

  const classNameTextArea = (field) => cx({
    groupTextarea: true,
    groupTextareaValid: field && field.length,
    groupTextareaError: typeof field === 'string' && !field.length
  });

  return (
    <form className={styles.contactForm} name="contact" onSubmit={onSubmit} noValidate>
      <div className={styles.formGroup}>
        <label className={styles.groupLabel} htmlFor="fullname">Name</label>
        <input className={classNameTextFor(name)} type="text" id="fullname" name="fullname" placeholder="Name" onInput={updateField(setName)} />
        <p className={styles.groupErrorfield}>This field is required</p>
      </div>
      <div className={styles.formGroup}>
        <label className={styles.groupLabel} htmlFor="emailaddress">Email Address</label>
        <input className={classNameTextFor(email, true)} type="email" id="emailaddress" name="emailaddress" placeholder="Email Address" onInput={updateField(setEmail)} />
        <p className={styles.groupErrorfield}>{ typeof email === 'string' && !email.length ? 'This field is required' : (!isValidEmail() ? 'This is not a valid email' : '')}</p>
      </div>
      <div className={styles.formGroup}>
        <label className={styles.groupLabel} htmlFor="companyname">Company Name</label>
        <input className={styles.groupTextinput} type="text" id="companyname" name="companyname" placeholder="Company Name" />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.groupLabel} htmlFor="title">Title</label>
        <input className={styles.groupTextinput} type="text" id="title" name="title" placeholder="Title" />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.groupLabel} htmlFor="message">Message</label>
        <textarea className={classNameTextArea(message)} placeholder="Message" id="message" name="message" onInput={updateField(setMessage)}></textarea>
        <p className={styles.groupErrorfield}>This field is required</p>
      </div>

      <Button isPrimary={false} customStyle={{ display: 'flex', alignSelf: 'flex-start', padding: '15px 30px', margin: '5px 0' }} type="submit">submit</Button>
    </form>
  );
}
