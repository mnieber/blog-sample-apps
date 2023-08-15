/*
This file shows a style object. Note that the fields of the style object
contain both intrinsic styles (that are defined in Card.scss) and ad-hoc styles.
*/

import { L } from '/src/frames/layout';
import { cn } from '/src/utils/classnames';

// Import styles
import './Card.scss';

export const CardS = {
  root: () => cn('Card', L.col.banner()),
  title: () => cn('Card__Title', 'mt-4'),
  inset: () => cn('Card__Inset', 'mt-4', 'p-4'),
  footer: () => cn('Card__Footer', 'mt-4'),
};
