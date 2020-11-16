import {DateTime} from 'luxon';
// Types and type guards
import type {FunctionComponent} from 'react';

type Props = {
  dateString: string;
};

const Date: FunctionComponent<Props> = (props) => {
  const date = DateTime.fromISO(props.dateString);
  return <time dateTime={props.dateString}>{date.toLocaleString()}</time>;
};

export default Date;
