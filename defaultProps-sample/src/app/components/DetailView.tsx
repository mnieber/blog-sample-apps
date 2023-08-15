import { observer } from 'mobx-react-lite';
import { dps, withDefaultProps } from '/src/app/defaultProps';
import { cn } from '/src/utils/classnames';

// Import styles
import './DetailView.scss';

export type PropsT = {
  className?: any;
};

export const DefaultProps = {
  ...dps.theme,
  ...dps.tag,
};

export const DetailView = observer(
  withDefaultProps((props: PropsT & typeof DefaultProps) => {
    return (
      <div className={cn('DetailView', props.className)}>
        Detail view. Theme is "{props.theme.name}".
        {props.tag && <div>Tag is "{props.tag}".</div>}
      </div>
    );
  }, DefaultProps)
);
