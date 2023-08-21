import {
  DefaultDialogButtonTrim,
  DialogButtonS,
} from '/src/frames/components/DialogButton';
import { IconS } from '/src/frames/components/Icon';
import { createTrim } from '/src/utils/trim';

export const BlueDialogButtonTrim = createTrim(DefaultDialogButtonTrim, {
  base: {
    root: {
      componentName: 'Blue-DialogButton',
      color: DialogButtonS.color.blueWithDarkText(),
    },
    Icon: {
      color: IconS.color.blueDarkest(),
    },
  },
});

export const SkyBlueWithBorderDialogButtonTrim = createTrim(
  DefaultDialogButtonTrim,
  {
    base: {
      root: {
        componentName: 'SkyBlueWithBorder-DialogButton',
        border: 'border-2 border-blue-primary',
        color: DialogButtonS.color.skyBlueText(),
        fontSize: DialogButtonS.fontSize.big(),
      },
      Icon: {
        color: IconS.color.bluePrimary(),
      },
    },
  }
);
