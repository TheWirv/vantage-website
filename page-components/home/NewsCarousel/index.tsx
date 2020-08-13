import * as React from 'react';
import clsx from 'clsx';
import {useKeenSlider} from 'keen-slider/react';
// Types
import type {NewsPost} from '@vantage/types/news';
// Hooks
import {useComponentDimensions} from '@vantage/hooks';
// Components
import NewsItem from './components/NewsItem';
// Styles
import {useStyles} from './styles';

type Props = {
  newsExcerpts: Array<Omit<NewsPost, 'content'>>;
};

const NewsCarousel: React.FC<Props> = (props) => {
  const [sliderRef] = useKeenSlider({
    mounted: (slider) => {
      slider.refresh(getSliderOptions());
    },
  });
  const {width} = useComponentDimensions(sliderRef);
  const getSliderOptions = () => ({
    slidesPerView: width / (width - 32),
    spacing: 8,
    centered: true,
  });
  const classes = useStyles();

  return (
    <section ref={sliderRef} className={clsx('keen-slider', classes.container)}>
      {props.newsExcerpts.map((newsExcerpt, index) => (
        <NewsItem key={newsExcerpt.id} newsExcerpt={newsExcerpt} index={index} />
      ))}
    </section>
  );
};

export default NewsCarousel;
