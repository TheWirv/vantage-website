import * as React from 'react';
// Hooks
import useIsomorphicLayoutEffect from './useIsomorphicLayoutEffect';

const useComponentDimensions = (
  componentRef: React.MutableRefObject<HTMLElement> | React.RefObject<HTMLElement>
) => {
  const getDimensions = () => ({
    width: componentRef.current?.offsetWidth ?? 0,
    height: componentRef.current?.offsetHeight ?? 0,
    offsetX: componentRef.current?.offsetLeft ?? 0,
    offsetY: componentRef.current?.offsetTop ?? 0,
  });

  const [dimensions, setDimensions] = React.useState(getDimensions());

  useIsomorphicLayoutEffect(() => {
    const handleResize = () => {
      const {width, height} = dimensions;
      const newDimensions = getDimensions();

      if (newDimensions.width !== width || newDimensions.height !== height) {
        setDimensions(newDimensions);
      }
    };

    if (componentRef.current) {
      handleResize();
    }

    window.addEventListener('resize', handleResize);
    window.addEventListener('load', handleResize);

    return () => {
      window.removeEventListener('load', handleResize);
      window.removeEventListener('resize', handleResize);
    };
  }, [componentRef]);

  return dimensions;
};

export default useComponentDimensions;
