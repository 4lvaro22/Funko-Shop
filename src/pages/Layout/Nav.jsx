import { useLocation } from 'react-router-dom';

export const Nav = () => {
  const location = useLocation();
  const currentPath = location.pathname.substring(0).replaceAll('/', ' > ');
  const path = currentPath === ' > ' ? '' : 'Home'.concat(currentPath);

  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-light bg-light p-2'>
        <p className='text-dark'><h6>{path}</h6></p>
      </nav>
    </>
  );
};

export default Nav;
