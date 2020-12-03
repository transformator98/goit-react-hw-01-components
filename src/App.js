import TransactionHistory from './components/TransactionHistory';
import ProfileList from './components/Profile/ProfileList';
import Section from './components/Section/Section';
import FriendList from './components/FriendList/FriendList';
import transactions from './transactions.json';
import profiles from './user.json';
import statistics from './statistics.json';
import friends from './friends.json';
import s from './components/Profile/Profile.module.css';

export default function App() {
  return (
    <div className={s.container}>
      <ProfileList profiles={profiles} />
      <Section title="Upload stats" stats={statistics} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}
