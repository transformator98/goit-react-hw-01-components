import ProfileList from './components/Profile/ProfileList';
// import Section from './components/Statistics/Section';
import Statistic from './components/Statistics/Statistics';
import profiles from './user.json';
import statistics from './statistics.json';
import s from './components/Profile/Profile.module.css';

export default function App() {
  return (
    <div className={s.container}>
      <ProfileList profiles={profiles} />
      <Statistic
        key={statistics.id}
        labels={statistics.label}
        percentages={statistics.percentage}
      />
    </div>
  );
}
// {
//   /* <Section>
//         <Statistic
//           key={statistics.id}
//           labels={statistics.label}
//           percentages={statistics.percentage}
//         />
//       </Section> */
// }
