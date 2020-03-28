import * as React from 'react';
import styles from './FunctionBasedStyled.module.scss';
import { IFunctionBasedStyledProps } from './IFunctionBasedStyledProps';
import { Checkbox, PrimaryButton, Toggle, IToggleStyleProps, IToggleStyles, ICheckboxStyleProps, IButtonStyles, ICheckboxStyles } from "office-ui-fabric-react";

export default class FunctionBasedStyled extends React.Component<IFunctionBasedStyledProps, {}> {
  public render(): React.ReactElement<IFunctionBasedStyledProps> {

    const buttonStyles = (): IButtonStyles => {
      const btnStyles: IButtonStyles = {
        root: { backgroundColor: "black"},
        rootHovered: { backgroundColor: "blue"}
      };
      return btnStyles;
    };

    const checkboxStyles = (props: ICheckboxStyleProps): ICheckboxStyles => {
      const chkStyles: ICheckboxStyles = {
        text: [
          {color: "purple"},
          props.checked && {
            color: "blue"
          }
        ]

      };
      return chkStyles;
    };

    const toggleStyles = (props: IToggleStyleProps): IToggleStyles => {
      const tglStyles: IToggleStyles = {
        container: {},
        text: {},
        root: {},
        label: {},
        pill: [
          {backgroundColor: "violet" },
          props.checked && {backgroundColor: "green" }
        ],
        thumb: {}
      };
      return tglStyles;
    };

    return (
      <div>
        <div className={styles.componentSection}>
          <PrimaryButton styles={buttonStyles()} text="Primary Button" />
        </div>

        <div  className={styles.componentSection}>
          <Checkbox styles={checkboxStyles} label="Checkbox" />
        </div>

        <div className={styles.componentSection}>
          <Toggle styles={toggleStyles} label="Toggle" />
        </div>

        <div className={styles.componentSection}>
          <Toggle styles={toggleStyles} label="Toggle" checked disabled/>
        </div>
      </div>
    );
  }
}
