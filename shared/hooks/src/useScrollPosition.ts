import {useState} from 'react';
// Hooks
import useIsomorphicLayoutEffect from './useIsomorphicLayoutEffect';

const useScrollPosition = () => {
  const [scrollPosition, setPosition] = useState(0);

  useIsomorphicLayoutEffect(() => {
    const updatePosition = () => setPosition(window.pageYOffset);

    window.addEventListener('scroll', updatePosition);

    updatePosition();

    return () => window.removeEventListener('scroll', updatePosition);
  }, []);

  return scrollPosition;
};

export default useScrollPosition;
