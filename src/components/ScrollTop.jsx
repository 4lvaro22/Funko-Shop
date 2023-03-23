import { useEffect } from 'react';
import { useResolvedPath } from 'react-router-dom';

export const ScrollTop = () => {
  const { pathname } = useResolvedPath();

  useEffect(() => {
    $('html, body').animate({ scrollTop: 0 }, 'fast');
  }, [pathname]);

  return null;
};

export default ScrollTop;
