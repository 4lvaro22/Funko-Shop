import { useLocation } from 'react-router-dom';

export const Nav = () => {
  const location = useLocation();
  const currentPath = location.pathname.substring(0).replaceAll('/', ' > ');
  const path = currentPath === ' > ' ? '' : currentPath;

  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-light bg-light p-2'>
        <p className='text-dark'> Home {path}</p>
      </nav>
    </>
  );
};

export default Nav;
