import PropTypes from 'prop-types';
import s from './Transaction.module.css';

export default function Transaction({ type, amount, currency }) {
  return (
    <tr>
      <td className={s.title}>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
}
Transaction.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};
