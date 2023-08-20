/*
This file contains the DialogButton component. It shows how the componentClassName
property can be used to select a theme for the button. Based on this property,
either the Blue-DialogButton.scss or the SkyBlueWithBorder-DialogButton.scss
file will be used.

Note also that the 'fontSize' property is used to pick an ad-hoc style from the
DialogButtonS style object.
*/

import { ButtonPropsT } from '/src/frames/components/ButtonPropsT';
import { cn } from '/src/utils/classnames';

// Import styles
import './Blue-DialogButton.scss';
import './SkyBlueWithBorder-DialogButton.scss';

export type PropsT = {
  className?: any;
  disabled?: boolean;
  fontSize?: 'medium' | 'big';
  padding?: 'medium' | 'big';
  label: string;
} & ButtonPropsT;

export type DialogButtonPropsT = PropsT;

export const DialogButton = (
  props: PropsT & {
    componentClassName?: string;
  }
) => {
  const { className, componentClassName, disabled, label, ...rest } = props;

  const name = componentClassName ?? 'DialogButton';

  return (
    <button
      className={cn(name, [
        'select-none',
        DialogButtonS.fontSize[props.fontSize ?? 'medium'](),
        DialogButtonS.padding[props.padding ?? 'medium'](),
        {
          ['DialogButton--disabled']: disabled,
        },
        className,
      ])}
      {...rest}
    >
      {label}
    </button>
  );
};

export const DialogButtonS = {
  fontSize: {
    medium: () => 'text-base',
    big: () => 'text-xl',
  },
  padding: {
    medium: () => 'px-4 py-2',
    big: () => 'px-6 py-4',
  },
};
