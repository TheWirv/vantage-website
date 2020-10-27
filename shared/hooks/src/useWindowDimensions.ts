import {useState} from 'react';
// Hooks
import useIsomorphicLayoutEffect from './useIsomorphicLayoutEffect';

// React currently throws a warning when using useLayoutEffect on the server.
// To get around it, we can conditionally useEffect on the server (no-op) and
// useLayoutEffect in the browser.
const canUseDOM: boolean = !!(
  typeof window !== 'undefined' &&
  typeof window.document !== 'undefined' &&
  typeof window.document.createElement !== 'undefined'
);

const undefinedDimensions = {
  width: undefined,
  height: undefined,
};

const useWindowDimensions = () => {
  const [dimensions, setDimensions] = useState<{width?: number; height?: number}>(
    undefinedDimensions
  );

  useIsomorphicLayoutEffect(() => {
    const getDimensions = () => ({
      width: window.innerWidth,
      height: window.innerWidth,
    });

    const handleResize = () => {
      const {width, height} = dimensions;
      const newDimensions = canUseDOM ? getDimensions() : undefinedDimensions;

      if (newDimensions.width !== width || newDimensions.height !== height) {
        setDimensions(newDimensions);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    window.addEventListener('load', handleResize);

    return () => {
      window.removeEventListener('load', handleResize);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return dimensions;
};

export default useWindowDimensions;
