import * as React from 'react';
import { Checkbox, ICheckboxProps, ICheckboxStyleProps, ICheckboxStyles } from "office-ui-fabric-react";

export const CompanyCheckbox: React.SFC<ICheckboxProps> = (props: ICheckboxProps) => {

  const checkboxStyles = (styleProps: ICheckboxStyleProps): ICheckboxStyles => {
    const chkStyles: ICheckboxStyles = {
      text: [
        {color: "purple"},
        styleProps.checked && {
          color: "blue"
        }
      ]

    };
    return chkStyles;
  };

  return (
    <Checkbox {...props} styles={checkboxStyles}/>
  );
};
