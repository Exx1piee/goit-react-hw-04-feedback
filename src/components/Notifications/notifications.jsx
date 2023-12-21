import css from './notifications.module.css';
import propTypes from 'prop-types';

export const Notfication = ({ message }) => {
  return (
    <div>
      <h2>Statistic:</h2>
      <span className={css.noFeedback}>{message}</span>
    </div>
  );
};

Notification.propTypes = {
  message: propTypes.string,
};