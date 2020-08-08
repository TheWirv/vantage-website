import * as React from 'react';
import {useRouter} from 'next/router';
// Material UI
import {Breadcrumbs as MuiBreadcrumbs, Typography} from '@material-ui/core';
import {NavigateNext} from '@material-ui/icons';
// Components
import Link from '../../../Link';

type Props = {
  newsHeading?: string;
};

const Breadcrumbs: React.FC<Props> = (props) => {
  const breadcrumbNameMap: {[id: string]: string} = {
    '/news': 'News',
    '/lore': 'Lore',
    '/concept-art': 'Concept Art',
    '/team': 'Team',
    '/join': 'Join',
  };

  const router = useRouter();
  const pathnames = router.pathname.split('/').filter((x) => x);

  return (
    <MuiBreadcrumbs separator={<NavigateNext fontSize="small" />}>
      <Link href="/" color="inherit">
        Home
      </Link>
      {pathnames.map((pathname, index) => {
        const isLast = index === pathnames.length - 1;
        const href = `/${pathnames.slice(0, index + 1).join('/')}`;
        const linkText =
          router.pathname.indexOf('/news/') !== -1 ? props.newsHeading! : breadcrumbNameMap[href];

        return isLast ? (
          <Typography color="textPrimary" key={href}>
            {linkText}
          </Typography>
        ) : (
          <Link color="inherit" href={href} key={href}>
            {breadcrumbNameMap[href]}
          </Link>
        );
      })}
    </MuiBreadcrumbs>
  );
};

export default Breadcrumbs;
