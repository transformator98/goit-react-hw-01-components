import PropTypes from 'prop-types';
import s from './Statistics.module.css';

export default function Statistics({ stats }) {
  return (
    <ul className={s.stat}>
      {stats.map(stat => (
        <li className={s.item} key={stat.id}>
          <span className={s.label}>{stat.label}</span>
          <span className={s.percentage}>{stat.percentage}%</span>
        </li>
      ))}
    </ul>
  );
}

Statistics.propTypes = {
  label: PropTypes.string,
  percentages: PropTypes.number,
};
