import { Outlet } from 'react-router-dom';
import Footer from '../components/Blocs/Footer.tsx';
import Navbar from '../components/UI/navbar/Navbar.tsx';

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
