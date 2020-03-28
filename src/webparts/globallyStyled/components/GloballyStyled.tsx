import * as React from 'react';
import styles from './GloballyStyled.module.scss';
import { IGloballyStyledProps } from './IGloballyStyledProps';
import { Checkbox, PrimaryButton, Toggle } from "office-ui-fabric-react";

export default class GloballyStyled extends React.Component<IGloballyStyledProps, {}> {
  public render(): React.ReactElement<IGloballyStyledProps> {
    return (
      <div>
        <div className={styles.componentSection}>
          <PrimaryButton text="Primary Button" />
        </div>

        <div className={styles.componentSection}>
          <Checkbox label="Checkbox" />
        </div>

        <div className={styles.componentSection}>
          <Toggle label="Toggle" />
        </div>

        <div className={styles.componentSection}>
          <Toggle label="Toggle" checked disabled/>
        </div>
      </div>
    );
  }
}
