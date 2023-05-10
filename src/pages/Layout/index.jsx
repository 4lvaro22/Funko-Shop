import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { CartProvider } from '../../context/cart';
import { SessionProvider } from '../../context/session';

export const Layout = () => {
  return (
    <>
      <SessionProvider>
        <CartProvider>
          <Header />

          <Outlet />

          <Footer />
        </CartProvider>
      </SessionProvider>
    </>
  );
};

export default Layout;
