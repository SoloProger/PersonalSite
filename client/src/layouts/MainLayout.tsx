import Navbar from '../components/UI/navbar/Navbar.tsx';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Blocs/Footer.tsx';

function MainLayout() {
  return (
    <div className='app'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default MainLayout;
