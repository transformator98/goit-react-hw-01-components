import PropTypes from 'prop-types';
import StatisticList from './StatisticsList';
import randomColor from '../../services/randomHexColor';

import s from './Statistics.module.css';

export default function Statistics({ stats }) {
  return (
    <ul className={s.stat}>
      {stats.map(item => (
        <StatisticList
          key={item.id}
          label={item.label}
          percentage={item.percentage}
          color={randomColor()}
        />
      ))}
    </ul>
  );
}

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};
