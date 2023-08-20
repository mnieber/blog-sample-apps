import { BadgeS } from '/src/frames/components/Badge/Badge';
import { CardS } from '/src/frames/components/Card';
import { cn } from '/src/utils/classnames';

// Import styles
import './PreferencesCard.scss';

export type PropsT = {
  className?: any;
};

export const PreferencesCard = (props: PropsT) => {
  return (
    <div className={cn('PreferencesCard', CardS.root(), props.className)}>
      <div className={cn(CardS.inset())}>
        <div
          className={cn(
            'PreferencesCard__Badge',
            BadgeS.root(),
            BadgeS.fontSize.medium()
          )}
        >
          Badge inside PreferencesCard
        </div>
      </div>
    </div>
  );
};
