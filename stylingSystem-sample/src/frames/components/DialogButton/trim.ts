import { IconS } from '/src/frames/components/Icon';
import { ModeOverlayT } from '/src/utils/trim';

export type DialogButtonTrimT = {
  base: {
    componentName: string;
    root: {
      border?: any;
      color: any;
      fontSize: any;
      padding: any;
    };
    Icon: {
      margin: any;
      size: any;
      color: any;
    };
  };
  disabled?: ModeOverlayT<DialogButtonTrimT>;
};

export const DialogButtonS = {
  color: {
    disabled: () => 'text-gray-400 hover:text-gray-400 border-gray-400',
    blueWithDarkText: () => 'bg-blue-400 text-blue-darkest hover:bg-blue-600',
    skyBlueText: () => 'text-blue-400 hover:text-blue-600',
  },
  fontSize: {
    medium: () => 'text-base',
    big: () => 'text-2xl',
  },
  padding: {
    medium: () => 'px-4 py-2',
    big: () => 'px-6 py-4',
  },
  Icon: {
    margin: {
      medium: () => 'mr-2',
    },
  },
};

export const DefaultDialogButtonTrim = {
  base: {
    root: {
      fontSize: DialogButtonS.fontSize.medium(),
      padding: DialogButtonS.padding.medium(),
    },
    Icon: {
      margin: DialogButtonS.Icon.margin.medium(),
      size: IconS.size.s20(),
      color: IconS.color.gray(),
    },
  },
  disabled: {
    root: {
      color: DialogButtonS.color.disabled(),
    },
    Icon: {
      color: IconS.color.grayMedium(),
    },
  },
};
