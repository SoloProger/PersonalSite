// import { BrowserRouter } from 'react-router-dom';
// import Routes from './components/Routes';
// import Navbar from './components/UI/navbar/Navbar';
// import { AuthContext } from './context';

import Navbar from './components/UI/navbar/Navbar.tsx';
import { Outlet } from 'react-router-dom';

export default function App() {
  // const [isAuth, setIsAuth] = useState(false);
  //
  //   useEffect(() => {
  //   if (localStorage.getItem("auth")) {
  //     setIsAuth(true);
  //   }
  // }, []);
  return (
    <div className='app'>
      <Navbar />
      <Outlet />
    </div>
    // <AuthContext.Provider
    //   value={{
    //     isAuth,
    //     setIsAuth
    //   }}
    // >
    //   <BrowserRouter>
    //     <div className="app">
    //       <Navbar />
    //       <Routes />
    //     </div>
    //   </BrowserRouter>
    // </AuthContext.Provider>
  );
}
