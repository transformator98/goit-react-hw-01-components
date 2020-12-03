import PropTypes from 'prop-types';
import Statistics from '../Statistics/Statistics';

import s from './Section.module.css';

function Section({ title, stats }) {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}
      <Statistics stats={stats} />
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape()),
};
export default Section;
