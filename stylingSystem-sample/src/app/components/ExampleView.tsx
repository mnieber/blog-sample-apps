import { observer } from 'mobx-react-lite';
import { DetailView } from '/src/app/components/DetailView';
import { dps, withDefaultProps } from '/src/app/defaultProps';
import { cn } from '/src/utils/classnames';

// Import styles
import './ExampleView.scss';

export type PropsT = {
  label: string;
  showDetails: boolean;
  className?: any;
};

export const DefaultProps = {
  ...dps.theme,
};

export const ExampleView = observer(
  withDefaultProps((props: PropsT & typeof DefaultProps) => {
    const override = props.label === 'Override';

    return (
      <div className={cn('ExampleView', props.className)}>
        Example view ({props.label}). Theme is "{props.theme.name}".
        {props.showDetails && !override && <DetailView className="ml-16" />}
        {props.showDetails && override && (
          <DetailView className="ml-16" tag="override" />
        )}
      </div>
    );
  }, DefaultProps)
);
