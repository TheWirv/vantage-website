import * as React from 'react';
import clsx from 'clsx';
import {useKeenSlider} from 'keen-slider/react';
// Types
import type {NewsPost} from '@vantage/types/news';
// Hooks
import {useWindowDimensions} from '@vantage/hooks';
// Components
import NewsItem from './components/NewsItem';
// Styles
import {useStyles} from './styles';

type Props = {
  newsExcerpts: Array<Omit<NewsPost, 'content'>>;
};

const NewsCarousel: React.FC<Props> = (props) => {
  const [sliderRef] = useKeenSlider({
    slidesPerView: 1.08,
    spacing: 8,
    centered: true,
  });
  const classes = useStyles();

  const {width: windowWidth} = useWindowDimensions();

  console.log('width:', windowWidth);

  return (
    <section ref={sliderRef} className={clsx('keen-slider', classes.container)}>
      {props.newsExcerpts.map((newsExcerpt, index) => (
        <NewsItem key={newsExcerpt.id} newsExcerpt={newsExcerpt} index={index} />
      ))}
    </section>
  );
};

export default NewsCarousel;
