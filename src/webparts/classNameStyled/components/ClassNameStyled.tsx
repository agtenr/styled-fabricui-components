import * as React from 'react';
import styles from './ClassNameStyled.module.scss';
import { IClassNameStyledProps } from './IClassNameStyledProps';
import { Checkbox, PrimaryButton, Toggle } from "office-ui-fabric-react";

export default class ClassNameStyled extends React.Component<IClassNameStyledProps, {}> {
  public render(): React.ReactElement<IClassNameStyledProps> {
    return (
      <div>
        <div className={styles.componentSection}>
          <PrimaryButton className={styles.myCustomButton} text="Primary Button" />
        </div>

        <div className={styles.componentSection}>
          <Checkbox className={styles.myCustomCheckbox} label="Checkbox" />
        </div>

        <div className={styles.componentSection}>
          <Toggle className={styles.myCustomToggle} label="Toggle" />
        </div>

        <div className={styles.componentSection}>
          <Toggle  className={styles.myCustomToggle}label="Toggle" checked disabled/>
        </div>
      </div>
    );
  }
}
