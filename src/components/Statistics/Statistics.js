import PropTypes from 'prop-types';
import s from './Statistics.module.css';

export default function Statistics({ label, percentage }) {
  return (
    <ul className={s.stat}>
      <li className={s.item}>
        <span className={s.label}>{label}</span>
        <span className={s.percentage}>{percentage}%</span>
      </li>
      <li className={s.item}>
        <span className={s.label}>{label}</span>
        <span className={s.percentage}>{percentage}%</span>
      </li>
      <li className={s.item}>
        <span className={s.label}>{label}</span>
        <span className={s.percentage}>{percentage}%</span>
      </li>
      <li className={s.item}>
        <span className={s.label}>{label}</span>
        <span className={s.percentage}>{percentage}%</span>
      </li>
    </ul>
  );
}

Statistics.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};
