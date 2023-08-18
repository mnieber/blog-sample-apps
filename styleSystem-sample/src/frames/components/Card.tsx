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
  // A card can have a title that floats above the inset.
  title: () => cn('Card__Title', 'my-4'),
  // The inset is a padded area with content
  inset: () => cn('Card__Inset', L.col.banner(), 'p-4'),
  // A card can have a footer that hangs below the inset.
  footer: () => cn('Card__Footer', 'mt-4'),
};
