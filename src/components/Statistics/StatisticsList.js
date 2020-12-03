import PropTypes from 'prop-types';
import s from './Statistics.module.css';

export default function StatisticList({ label, percentage, color }) {
  return (
    <li className={s.item} style={{ backgroundColor: `${color}` }}>
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage}%</span>
    </li>
  );
}

StatisticList.propTypes = {
  label: PropTypes.string,
  percentages: PropTypes.number,
  color: PropTypes.string,
};
