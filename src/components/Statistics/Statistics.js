import PropTypes from 'prop-types';
import s from './Statistics.module.css';

export default function Statistics({ labels, percentages }) {
  return (
    <ul className={s.stat}>
      <li className={s.item}>
        {labels.map(label => (
          <span className={s.label}>{label}</span>
        ))}
        ;
        {percentages.map(percentage => (
          <span className={s.percentage}>{percentage}%</span>
        ))}
      </li>
    </ul>
  );
}

Statistics.propTypes = {
  labels: PropTypes.string,
  percentages: PropTypes.number,
};
