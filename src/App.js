import Profile from './components/Profile/Profile';
import profiles from './user.json';
// import s from './components/Profile.module.css';
import s from './components/Profile/Profile.module.css';

export default function App() {
  return (
    <div className={s.container}>
      {profiles.map(profile => (
        <Profile
          key={profile.tag}
          name={profile.name}
          tag={profile.tag}
          location={profile.location}
          avatar={profile.avatar}
          followers={profile.stats.followers}
          views={profile.stats.views}
          likes={profile.stats.likes}
        />
      ))}
    </div>
  );
}
