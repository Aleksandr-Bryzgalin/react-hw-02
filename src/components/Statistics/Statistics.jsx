import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({
  valueGood,
  valueNeutral,
  valueBad,
  valueTotal,
  valuePosFee = 0,
}) => (
  <ul className={styles.feetbackList}>
    <li>Good: {valueGood}</li>
    <li>Neutral: {valueNeutral}</li>
    <li>Bad: {valueBad}</li>
    <li>Total: {valueTotal}</li>
    <li>Positive feedback: {valuePosFee} %</li>
  </ul>
);

Statistics.propTypes = {
  valueGood: PropTypes.number.isRequired,
  valueNeutral: PropTypes.number.isRequired,
  valueBad: PropTypes.number.isRequired,
  valueTotal: PropTypes.number.isRequired,
  valuePosFee: PropTypes.number.isRequired,
};

export default Statistics;
