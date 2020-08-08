import * as React from 'react';
// Components
import {Link} from '@vantage/components';
// Styles
import {useStyles} from './styles';

type Props = {
  children: React.ReactNode;
  href: string;
};

const HeaderLink: React.FC<Props> = (props) => {
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
