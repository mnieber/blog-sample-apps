/*
This file contains the DialogButton component. It shows how the trim
property can be used to select a style for the button.
*/

import { ButtonPropsT } from '/src/frames/components/ButtonPropsT';
import {
  DefaultDialogButtonTrim,
  DialogButtonTrimT,
} from '/src/frames/components/DialogButton/trim';
import { Icon } from '/src/frames/components/Icon';
import { L } from '/src/frames/layout';
import { cn } from '/src/utils/classnames';
import { getMode, getModeCn } from '/src/utils/trim';

// Import styles
import './DialogButton.scss';

export type PropsT = {
  className?: any;
  trim?: DialogButtonTrimT;
  disabled?: boolean;
  iconName?: string;
  label: string;
} & ButtonPropsT;

export type DialogButtonPropsT = PropsT;

export const DialogButton = (props: PropsT) => {
  const {
    className,
    trim: propsTrim,
    disabled,
    iconName,
    label,
    ...rest
  } = props;

  const trim = propsTrim ?? DefaultDialogButtonTrim;
  const mode = getMode(trim, { disabled });

  return (
    <button
      className={cn(
        trim.base.root.componentName,
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
