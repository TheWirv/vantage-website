import * as React from 'react';

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

  React.useLayoutEffect(() => {
    const handleResize = () => {
      const {width, height} = dimensions;
      const newDimensions = getDimensions();

      if (newDimensions.width !== width || newDimensions.height !== height) {
        setDimensions(newDimensions);
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('load', handleResize);

    if (componentRef.current) {
      handleResize();
    }

    return () => {
      window.removeEventListener('load', handleResize);
      window.removeEventListener('resize', handleResize);
    };
  }, [componentRef]);

  return dimensions;
};

export default useComponentDimensions;