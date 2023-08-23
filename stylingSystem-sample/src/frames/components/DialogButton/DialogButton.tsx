/*
This file contains the DialogButton component. It shows how the trim
property can be used to select a style for the button.
*/

import { ButtonPropsT } from '/src/frames/components/ButtonPropsT';
import { DialogButtonTrimT } from '/src/frames/components/DialogButton/trim';
import { Icon } from '/src/frames/components/Icon';
import { L } from '/src/frames/layout';
import { cn } from '/src/utils/classnames';
import { getMode, getModeCn } from '/src/utils/trim';

// Import styles
import './DialogButton.scss';

export type PropsT = {
  className?: any;
  disabled?: boolean;
  iconName?: string;
  label: string;
  trim: DialogButtonTrimT;
} & ButtonPropsT;

export const DialogButton = (props: PropsT) => {
  const { className, trim, disabled, iconName, label, ...rest } = props;

  const mode = getMode(trim, { disabled });

  return (
    <button
      className={cn(
        trim.base.componentName,
        'DialogButton',
        [
          getModeCn(mode.root),
          'select-none',
          {
            'DialogButton--disabled': disabled,
          },
        ],
        [iconName ? L.row.skewer() : '', className]
      )}
      {...rest}
    >
      {iconName && <Icon className={getModeCn(mode.Icon)} name={iconName} />}
      {label}
    </button>
  );
};
