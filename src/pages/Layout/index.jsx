import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';

export const Layout = ({ session, setSession }) => {
  return (
    <>
      <Header session={session} />

      <Outlet />

      <Footer />
    </>
  );
};

export default Layout;
