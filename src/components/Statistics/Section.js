import PropTypes from 'prop-types';
import s from './Statistics.module.css';

function Section(title, children) {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>Upload stats</h2>}
      {children}
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string,
};
export default Section;
