import { stub, withDefaultProps } from 'react-default-props-context';
import { ThemeT } from '/src/api/types';
export { stub, withDefaultProps } from 'react-default-props-context';

// This is a workaround for a bug in webpack
!withDefaultProps && (console as any).log(withDefaultProps);

export const defaultProps = {
  theme: {
    theme: stub as ThemeT,
  },
  tag: {
    tag: stub as string,
  },
};

export const dps = defaultProps;
