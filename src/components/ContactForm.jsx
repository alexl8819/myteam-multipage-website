import styles from './ContactForm.module.css';

export default function ContactForm () {
  const onSubmit = (e) => e.preventDefault();
  return (
    <form className={styles.contactForm} name="contact" onSubmit={onSubmit} noValidate>
      <div className={styles.formGroup}>
        <label className={styles.groupLabel} htmlFor="fullname">Name</label>
        <input className={styles.groupTextinput} type="text" id="fullname" name="fullname" placeholder="Name" />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.groupLabel} htmlFor="emailaddress">Email Address</label>
        <input className={styles.groupTextinput} type="email" id="emailaddress" name="emailaddress" placeholder="Email Address" />
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
        <textarea className={styles.groupTextarea} placeholder="Message"></textarea>
      </div>

      <button className={styles.formSubmit} type="submit">submit</button>
    </form>
  );
}
