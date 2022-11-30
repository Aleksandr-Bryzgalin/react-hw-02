import styles from './FeedbackOptions.module.css';

const ControlsBtuttons = ({ onGood, onNeutral, onBad }) => (
  <div className={styles.buttonList}>
    <button className={styles.button} type="button" onClick={onGood}>
      Good
    </button>

    <button className={styles.button} type="button" onClick={onNeutral}>
      Neutral
    </button>

    <button className={styles.button} type="button" onClick={onBad}>
      Bad
    </button>
  </div>
);

export default ControlsBtuttons;
