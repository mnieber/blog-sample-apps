import { cn } from '/src/utils/classnames';

// Import styles
import './Badge.AuthCard.scss';
import './Badge.PreferencesCard.scss';

export const BadgeS = {
  root: () => cn('Badge', 'rounded-xl', 'px-4 py-2', 'self-start'),
  fontSize: {
    medium: () => cn('text-base'),
    big: () => cn('text-xl'),
  },
};
