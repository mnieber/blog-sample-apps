import { cn } from '/src/utils/classnames';
import { ObjT } from '/src/utils/types';

// Import styles
import './Icon.scss';

export const icons: ObjT = {
  arrowRight: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
      <polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9" />
    </svg>
  ),
  close: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
      <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
    </svg>
  ),
};

export type PropsT = {
  name: string;
  onClick?: () => void;
  className?: any;
};

export const Icon = (props: PropsT) => {
  const svg = icons[props.name] ?? <div>`${props.name} not found`</div>;
  return (
    <div className={cn('Icon', props.className)} onClick={props.onClick}>
      {svg}
    </div>
  );
};

export const IconS = {
  color: {
    gray: () => 'fill-gray-text',
    grayMedium: () => 'fill-gray-medium',
    blueDarkest: () => 'fill-blue-darkest',
    bluePrimary: () => 'fill-blue-primary',
  },
  size: {
    s20: () => 'w-[20px] h-[20px] min-w-[20px]',
    s30: () => 'w-[30px] h-[30px] min-w-[30px]',
  },
};
