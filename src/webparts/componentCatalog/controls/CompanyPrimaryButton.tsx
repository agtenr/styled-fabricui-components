import * as React from 'react';
import { PrimaryButton, IButtonProps, IButtonStyles } from "office-ui-fabric-react";

export const CompanyPrimaryButton: React.SFC<IButtonProps> = (props: IButtonProps) => {

  const buttonStyles = (): IButtonStyles => {
    const btnStyles: IButtonStyles = {
      root: { backgroundColor: "black"},
      rootHovered: { backgroundColor: "blue"}
    };
    return btnStyles;
  };

  return (
    <PrimaryButton {...props} styles={buttonStyles()}/>
  );
};
