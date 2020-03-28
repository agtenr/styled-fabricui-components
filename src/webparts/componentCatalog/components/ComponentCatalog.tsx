import * as React from 'react';
import styles from './ComponentCatalog.module.scss';
import { IComponentCatalogProps } from './IComponentCatalogProps';
import { CompanyPrimaryButton } from "../controls/CompanyPrimaryButton";
import { CompanyCheckbox } from "../controls/CompanyCheckbox";
import { CompanyToggle } from "../controls/CompanyToggle";


export default class ComponentCatalog extends React.Component<IComponentCatalogProps, {}> {
  public render(): React.ReactElement<IComponentCatalogProps> {
    return (
      <div>
        <div className={styles.componentSection}>
          <CompanyPrimaryButton text="Primary Button"/>
        </div>

        <div  className={styles.componentSection}>
          <CompanyCheckbox label="Checkbox"/>
        </div>

        <div className={styles.componentSection}>
          <CompanyToggle label="Toggle"/>
        </div>

        <div className={styles.componentSection}>
          <CompanyToggle label="Toggle" checked disabled/>
        </div>
      </div>
    );
  }
}
