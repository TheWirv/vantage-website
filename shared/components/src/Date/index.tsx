import {parseISO, format} from 'date-fns';
// Types and type guards
import type {FunctionComponent} from 'react';

type Props = {
  dateString: string;
};

const Date: FunctionComponent<Props> = (props) => {
  const date = parseISO(props.dateString);
  return <time dateTime={props.dateString}>{format(date, 'LLLL d, yyyy')}</time>;
};

export default Date;
