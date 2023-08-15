/*
This example shows how default properties work.

In the App component, we provide rootDefaultProps to all child components.

In the ExampleView component that is labelled "Root", we use the "theme" default property.
This ExampleView will show the text "Theme is 'default'" because we've provided
a default value for the "theme" property with name "default". If we would set
'showDetails' to true, then the ExampleView will also show the DetailView, which uses the
'tag' default property. Since the rootDefaultProps don't provide the 'tag' property, you will
see an error in the console in this case.

In the ExampleView component that is labelled "Nested", we again use the "theme" default property.
This ExampleView will show the text "Theme is 'nested'" because it's in a DefaultPropsProvider
that overrides and extends the rootDefaultProps values. In this ExampleView we've set the
showDetails flag to true. The DetailsView will show the text "Tag is 'nested'".

Finally, there is the ExampleView component that is labelled "Override". This ExampleView
internally sets the value of 'tag' on its DetailView to 'override' (check out the source code in
ExampleView.tsx). This shows how you can override a default property by setting the property
directly on the component.
*/

import { DefaultPropsProvider } from 'react-default-props-context';
import { ExampleView } from '/src/app/components/ExampleView';
import { cn } from '/src/utils/classnames';

// Import styles
import './App.scss';

export const App = () => {
  const rootDefaultProps = {
    defaultProps: {
      theme: () => ({
        id: 'default',
        name: 'default',
      }),
    },
  };

  const nestedDefaultProps = {
    defaultProps: {
      theme: () => ({
        id: 'special',
        name: 'special',
      }),
      tag: () => 'nested',
    },
  };

  return (
    <div className={cn('App')}>
      <div className={cn('App__Body', 'flex flex-col')}>
        <div className={cn('App__Notes', 'my-8', 'p-6')}>
          <div className={cn('text-2xl font-bold mb-2')}>Notes:</div>
          <div>- The source code is annotated. Start by reading main.tsx;</div>
        </div>
        <DefaultPropsProvider value={rootDefaultProps}>
          <ExampleView className="mt-8" showDetails={false} label="Root" />
          <DefaultPropsProvider extend value={nestedDefaultProps}>
            <ExampleView className="mt-8" showDetails={true} label="Nested" />
            <ExampleView className="mt-8" showDetails={true} label="Override" />
          </DefaultPropsProvider>
        </DefaultPropsProvider>
      </div>
    </div>
  );
};
