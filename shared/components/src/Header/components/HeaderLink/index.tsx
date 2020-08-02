import * as React from 'react';
// Components
import {Link} from 'shared/components';
// Styles
import {useStyles} from './styles';

type Props = {
  children: React.ReactNode;
  href: string;
};

const HeaderLink: React.FC<Props> = (props) => {
  const classes = useStyles();

  return (
    <Link href={props.href} underline="none" className={classes.link}>
      {props.children}
    </Link>
  );
};

export default HeaderLink;
