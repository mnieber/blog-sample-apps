import {
  DefaultDialogButtonTrim,
  DialogButtonS,
  type DialogButtonTrimT,
} from '/src/frames/components/DialogButton';
import { IconS } from '/src/frames/components/Icon';
import { createTrim } from '/src/utils/trim';

export const BlueDialogButtonTrim: DialogButtonTrimT = createTrim(
  DefaultDialogButtonTrim,
  {
    base: {
      componentName: 'Blue-DialogButton',
      root: {
        color: DialogButtonS.color.blueWithDarkText(),
      },
      Icon: {
        color: IconS.color.blueDarkest(),
      },
    },
  }
);

export const SkyBlueWithBorderDialogButtonTrim: DialogButtonTrimT = createTrim(
  DefaultDialogButtonTrim,
  {
    base: {
      componentName: 'SkyBlueWithBorder-DialogButton',
      root: {
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
