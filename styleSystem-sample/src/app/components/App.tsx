/*
The App component shows how the CardS style object can be used to create a card.
It also contains two dialog buttons that use different themes.

Continue by:

- Reading the Card.tsx file;
- Reading the DialogButton.tsx file.
*/

import { AuthCard } from '/src/app/components/AuthCard';
import { PreferencesCard } from '/src/app/components/PreferencesCard';
import { CardS } from '/src/frames/components/Card';
import { DialogButton } from '/src/frames/components/DialogButton/DialogButton';
import { L } from '/src/frames/layout';
import { cn } from '/src/utils/classnames';

// Import styles
import './App.scss';

export const App = () => {
  return (
    <div className={cn('App')}>
      <div className={cn('App__Body', 'flex flex-col')}>
        {/* Add a card inline. We'll use the header, inset
        and footer from CardS. */}
        <div className={cn('AppCard', CardS.root())}>
          <div className={cn('AppCard__Title', CardS.title())}>
            Style system sample app
          </div>
          <div className={cn('AppCard__Inset', CardS.inset())}>
            <div className={cn('text-2xl font-bold mb-2')}>Notes:</div>
            <div>- This element is created with the CardS style object;</div>
            <div>
              - The buttons below are themed using the componentClassName
              property.
            </div>
          </div>
          <div className={cn('AppCard__Footer', CardS.footer())}>
            The source code is annotated. Start by reading main.tsx.
          </div>
        </div>

        {/* Add some dialog buttons, using different themes */}
        <div className="mt-8">Dialog buttons:</div>
        <div className={cn('App_Buttons', L.row.skewer(), 'mt-4')}>
          <DialogButton
            componentClassName="Blue-DialogButton"
            label="Blue"
            className="mr-8"
          />
          <DialogButton
            componentClassName="SkyBlueWithBorder-DialogButton"
            label="Border, big font & disabled"
            disabled={true}
            fontSize="big"
          />
        </div>

        {/* Add some cards with badges, that will look different depending
        on their context (AuthCard or PreferencesCard) */}
        <div className="mt-8">Cards with badges:</div>
        <AuthCard className="mt-4" />
        <PreferencesCard className="mt-4" />
      </div>
    </div>
  );
};
