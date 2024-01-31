import { ReactNode } from 'react';
import Navbar from '../components/navbar/Navbar.tsx';
// import Form from '../components/Form';
import Footer from '../components/footer/Footer.tsx';
import News from '../components/News.tsx';

function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className='App'>
      <Navbar />
      {children}
      {/*<Form />*/}
      <News />
      <Footer />
    </div>
  );
}

export default MainLayout;
