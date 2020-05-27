import * as React from 'react';
import { classNamesFunction } from "office-ui-fabric-react/lib/Utilities";
import { IBeerStyleProps } from "./IBeerStyleProps";
import { IBeerStyles } from "./IBeerStyles";
import { IBeerProps } from "./IBeerProps";

const getClassNames = classNamesFunction<IBeerStyleProps, IBeerStyles>();

export const BeerBase: React.SFC<IBeerProps> = (props: IBeerProps) => {

    const { styles, theme, sipsTaken } = props;
    const classNames = getClassNames(styles!, {
      theme,
      sipsTaken
    });

    return (
      <div className={classNames.container}>
        <div className={classNames.glass}>
          <div className={classNames.handle}></div>
          <div className={classNames.void}></div>
          <div className={classNames.foam}></div>
          <div className={classNames.beer}></div>
        </div>
      </div>
    );

};
