import { BadgeS } from '/src/frames/components/Badge/Badge';
import { CardS } from '/src/frames/components/Card';
import { cn } from '/src/utils/classnames';

// Import styles
import './AuthCard.scss';

export type PropsT = {
  className?: any;
};

export const AuthCard = (props: PropsT) => {
  return (
    <div className={cn('AuthCard', CardS.root(), props.className)}>
      <div className={cn(CardS.inset())}>
        <div
          className={cn(
            'AuthCard__Badge',
            BadgeS.root(),
            BadgeS.fontSize.medium()
          )}
        >
          Badge inside AuthCard
        </div>
      </div>
    </div>
  );
};
