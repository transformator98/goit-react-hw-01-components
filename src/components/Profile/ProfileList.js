import Profile from './Profile';
import PropTypes from 'prop-types';
import s from './ProfileList.module.css';

function ProfileList({ profiles }) {
  return (
    <ul className={s.profileList}>
      {profiles.map(profile => (
        <li key={profile.tag}>
          <Profile
            name={profile.name}
            tag={profile.tag}
            location={profile.location}
            avatar={profile.avatar}
            followers={profile.stats.followers}
            views={profile.stats.views}
            likes={profile.stats.likes}
          />
        </li>
      ))}
    </ul>
  );
}

ProfileList.propTypes = {
  profiles: PropTypes.arrayOf(
    PropTypes.shape({
      tag: PropTypes.string.isRequired,
    }),
  ),
};

export default ProfileList;
