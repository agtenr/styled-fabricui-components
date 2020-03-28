import * as React from 'react';
import { Toggle, IToggleProps, IToggleStyleProps, IToggleStyles } from "office-ui-fabric-react";

export const CompanyToggle: React.SFC<IToggleProps> = (props: IToggleProps) => {

  const toggleStyles = (styleProps: IToggleStyleProps): IToggleStyles => {
    const tglStyles: IToggleStyles = {
      container: {},
      text: {},
      root: {},
      label: {},
      pill: [
        {backgroundColor: "violet" },
        styleProps.checked && {backgroundColor: "green" }
      ],
      thumb: {}
    };
    return tglStyles;
  };

  return (
    <Toggle {...props} styles={toggleStyles}/>
  );
};
