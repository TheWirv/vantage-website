import * as React from 'react';
import clsx from 'clsx';
import {useRouter} from 'next/router';
import NextLink, {LinkProps as NextLinkProps} from 'next/link';
// Material UI
import MuiLink, {LinkProps as MuiLinkProps} from '@material-ui/core/Link';
// Styles
import {useStyles} from './styles';

type NextComposedProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> &
  NextLinkProps;

const NextComposed = React.forwardRef<HTMLAnchorElement, NextComposedProps>((props, ref) => {
  const {as, href, replace, scroll, passHref, shallow, prefetch, ...other} = props;

  return (
    <NextLink
      href={href}
      prefetch={prefetch}
      as={as}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      passHref={passHref}>
      <a ref={ref} {...other} />
    </NextLink>
  );
});

interface LinkPropsBase {
  activeClassName?: string;
  innerRef?: React.Ref<HTMLAnchorElement>;
  naked?: boolean;
}

export type LinkProps = LinkPropsBase & NextComposedProps & Omit<MuiLinkProps, 'href'>;

const Link: React.FC<LinkProps> = (props) => {
  const classes = useStyles();
  const {
    href: hrefProp,
    activeClassName = 'active',
    className: classNameProps,
    innerRef,
    naked,
    role: roleProp,
    ...other
  } = props;

  const router = useRouter();
  const href = (typeof hrefProp === 'string' ? hrefProp : hrefProp.pathname) as string;
  const isActive = _getRootPathname(router.pathname) === _getRootPathname(href);
  const className = clsx(classes.link, classNameProps, {
    [activeClassName]: isActive && activeClassName,
  });

  // catch role passed from ButtonBase. This is definitely a link
  const role = roleProp === 'button' ? undefined : roleProp;

  const isExternal = href.indexOf('https:') === 0 || href.indexOf('mailto:') === 0;

  if (isExternal) {
    return <MuiLink className={className} href={href} ref={innerRef} role={role} {...other} />;
  }

  if (naked) {
    return <NextComposed className={className} href={href} ref={innerRef} role={role} {...other} />;
  }

  return (
    <MuiLink
      component={NextComposed}
      className={className}
      href={href}
      ref={innerRef}
      role={role}
      {...other}
    />
  );
};

export default React.forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => (
  <Link {...props} underline={props.underline ?? 'none'} innerRef={ref} />
));

const _getRootPathname = (pathname: string) => pathname.split('/').filter((x) => x)[0];
