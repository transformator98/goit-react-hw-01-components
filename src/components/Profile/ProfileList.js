import Profile from './Profile';
import PropTypes from 'prop-types';

function ProfileList({ profiles }) {
  return (
    <ul>
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
