import ProfileList from './components/Profile/ProfileList';
import Section from './components/Section/Section';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import profiles from './user.json';
import statistics from './statistics.json';
import friends from './friends.json';
import s from './components/Profile/Profile.module.css';

export default function App() {
  return (
    <div className={s.container}>
      <ProfileList profiles={profiles} />
      <Section title="Upload stats">
        <Statistics stats={statistics} />
      </Section>
      <FriendList friends={friends} />
    </div>
  );
}
