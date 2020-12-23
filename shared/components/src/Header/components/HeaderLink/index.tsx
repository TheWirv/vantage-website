// Types and type guards
import type {FunctionComponent} from 'react';
// Components
import {Link} from '@vantage/components';
// Styles
import {useStyles} from './styles';

type Props = {
  children: React.ReactNode;
  href: string;
};

const HeaderLink: FunctionComponent<Props> = (props) => {
  const classes = useStyles();

  return (
    <Link
      href={props.href}
      underline="none"
      className={classes.link}
      activeClassName={classes.active}>
      {props.children}
    </Link>
  );
};

export default HeaderLink;
