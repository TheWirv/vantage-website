import * as React from 'react';
import clsx from 'clsx';
import {useKeenSlider} from 'keen-slider/react';
// Material UI
import {useMediaQuery, IconButton} from '@material-ui/core';
import {NavigateBeforeRounded, NavigateNextRounded} from '@material-ui/icons';
// Types
import type {NewsPost} from '@vantage/types/news';
// Components
import NewsItem from './components/NewsItem';
// Styles
import {useStyles} from './styles';

type Props = {
  newsExcerpts: Array<Omit<NewsPost, 'content'>>;
  containerWidth: number;
};

const NewsCarousel: React.FC<Props> = (props) => {
  // Variables
  const initial = 0;

  // State
  const [currentSlide, setCurrentSlide] = React.useState(initial);

  // Hooks
  const hasTouch = useMediaQuery('(hover: none)');

  const [sliderRef, slider] = useKeenSlider({
    slidesPerView: props.containerWidth / (props.containerWidth - 32),
    initial,
    controls: hasTouch,
    spacing: 10,
    centered: true,
    slideChanged: (s) => setCurrentSlide(s.details().relativeSlide),
  });

  // Styles
  const classes = useStyles();

  const renderNavigation = (sliderComponent: React.ReactElement) =>
    slider ? (
      hasTouch ? (
        sliderComponent
      ) : (
        <>
          <div className={classes.navigationWrapper}>
            {sliderComponent}
            <IconButton
              onClick={slider.prev}
              aria-label="previous news post"
              disabled={currentSlide === 0}
              className={clsx(classes.arrow, classes.arrowLeft)}>
              <NavigateBeforeRounded fontSize="large" />
            </IconButton>

            <IconButton
              onClick={slider.next}
              aria-label="next news post"
              disabled={currentSlide === slider.details().size - 1}
              className={clsx(classes.arrow, classes.arrowRight)}>
              <NavigateNextRounded fontSize="large" />
            </IconButton>
          </div>
          <div className={classes.dots}>
            {[...Array(slider.details().size).keys()].map((index) => {
              return (
                <button
                  key={index}
                  onClick={() => {
                    slider.moveToSlideRelative(index);
                  }}
                  className={clsx(classes.dot, {
                    [classes.dotActive]: currentSlide === index,
                  })}
                />
              );
            })}
          </div>
        </>
      )
    ) : null;

  return renderNavigation(
    <section ref={sliderRef} className={clsx('keen-slider', classes.container)}>
      {props.newsExcerpts.map((newsExcerpt, index) => (
        <NewsItem key={newsExcerpt.id} newsExcerpt={newsExcerpt} index={index} />
      ))}
    </section>
  );
};

export default NewsCarousel;
