import PropTypes from 'prop-types';
import s from './Profile.module.css';

export default function Profile({
  name,
  tag,
  location,
  avatar,
  followers,
  views,
  likes,
}) {
  return (
    <div className={s.container}>
      <div className={s.profile}>
        <div className={s.description}>
          <img
            src={avatar}
            alt="Аватар пользователя"
            className={s.avatar}
            width="360"
          />
          <p className={s.name}>{name}</p>
          <p className={s.tag}>@{tag}</p>
          <p className={s.location}>{location}</p>
        </div>

        <ul className={s.stats}>
          <li>
            <span className={s.label}>Followers</span>
            <span className={s.quantity}>{followers}</span>
          </li>
          <li>
            <span className={s.label}>Views</span>
            <span className={s.quantity}>{views}</span>
          </li>
          <li>
            <span className={s.label}>Likes</span>
            <span className={s.quantity}>{likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

Profile.propTypes = {
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};
