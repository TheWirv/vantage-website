import * as React from 'react';

const useScrollPosition = () => {
  const [scrollPosition, setPosition] = React.useState(0);

  React.useLayoutEffect(() => {
    const updatePosition = () => setPosition(window.pageYOffset);

    window.addEventListener('scroll', updatePosition);

    updatePosition();

    return () => window.removeEventListener('scroll', updatePosition);
  }, []);

  return scrollPosition;
};

export default useScrollPosition;
