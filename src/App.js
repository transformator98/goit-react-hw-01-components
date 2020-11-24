import Profile from './components/Profile';
import profiles from './user.json';

export default function App() {
  return (
    <div>
      <Profile
        name={profiles.name}
        tag={profiles.tag}
        lacation={profiles.location}
        avatar={profiles.avatar}
        followers={profiles.stats.followers}
        views={profiles.stats.views}
        likes={profiles.stats.likes}
      />
    </div>
  );
}
