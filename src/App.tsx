import { Outlet } from 'react-router-dom';
import Navbar from './components/navbar/Navbar.tsx';
import Footer from './components/footer/Footer.tsx';
import ContentForm from './components/contact-form/ContentForm.tsx';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Outlet />
      <ContentForm />
      <Footer />
    </div>
  );
}

export default App;
