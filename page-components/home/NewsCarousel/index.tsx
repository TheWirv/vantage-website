import * as React from 'react';
import clsx from 'clsx';
import {useKeenSlider} from 'keen-slider/react';
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
  const [sliderRef] = useKeenSlider({
    slidesPerView: props.containerWidth / (props.containerWidth - 32),
    spacing: 10,
    centered: true,
  });

  // Styles
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
