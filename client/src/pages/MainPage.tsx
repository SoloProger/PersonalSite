import Header from '../components/Blocs/Header.tsx';
import News from '../components/Blocs/News.tsx';
import Contacts from '../components/Blocs/Contacts.tsx';
import LatestPost from '../components/Blocs/LatestPost.tsx';

const MainPage = () => {
  return (
    <main>
      <Header />
      <LatestPost />
      <News />
      <Contacts />
    </main>
  );
};

export default MainPage;
