import * as React from 'react';
import clsx from 'clsx';
import {useKeenSlider} from 'keen-slider/react';
// Material UI
import {useMediaQuery, Typography, IconButton} from '@material-ui/core';
import {useTheme} from '@material-ui/core/styles';
import {NavigateBeforeRounded, NavigateNextRounded} from '@material-ui/icons';
// Types and type guards
import type {ContentSectionContents} from '@vantage/types';
import {isNewsPostArray, isLoreEntryArray, isConceptArtArray} from '@vantage/types/type-guards';
// Components
import {ConceptArt, LoreEntry, NewsItem} from './components';
// Styles
import {useStyles} from './styles';

type Props = {
  content: ContentSectionContents;
  type: 'News' | 'Lore' | 'Concept Art';
  containerWidth: number;
};

const NewsCarousel: React.FC<Props> = (props) => {
  // Hooks
  const hasTouch = useMediaQuery('(hover: none)');
  const theme = useTheme();

  // Variables
  const initial = 0;
  const contentWidth = props.containerWidth - 2 * theme.spacing(2);

  // State
  const [currentSlide, setCurrentSlide] = React.useState(initial);

  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    slidesPerView: props.containerWidth / contentWidth,
    initial,
    controls: hasTouch,
    spacing: 10,
    centered: true,
    slideChanged: (s) => setCurrentSlide(s.details().relativeSlide),
  });

  // Styles
  const classes = useStyles();

  const renderContentSection = (sliderComponent: React.ReactElement) =>
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

  const renderContent = () =>
    isNewsPostArray(props.content, props.type)
      ? props.content.map((newsExcerpt, index) => (
          <NewsItem key={newsExcerpt.id} newsExcerpt={newsExcerpt} index={index} />
        ))
      : isLoreEntryArray(props.content, props.type)
      ? props.content.map((loreEntry, index) => (
          <LoreEntry key={loreEntry.id} loreEntry={loreEntry} index={index} />
        ))
      : isConceptArtArray(props.content, props.type)
      ? props.content.map((path, index) => (
          <ConceptArt key={path} path={path} width={contentWidth} index={index} />
        ))
      : null;

  return (
    <section>
      <Typography variant="h5" className={classes.subsectionHeading}>
        {props.type}
      </Typography>
      {renderContentSection(
        <div ref={sliderRef} className={clsx('keen-slider', classes.container)}>
          {renderContent()}
        </div>
      )}
    </section>
  );
};

export default NewsCarousel;
