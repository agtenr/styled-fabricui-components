import * as React from 'react';
import styles from './BeerComponent.module.scss';
import { IBeerComponentProps } from './IBeerComponentProps';
import { IBeerComponentState } from './IBeerComponentState';
import { Beer } from "./beer/Beer";
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';

export default class BeerComponent extends React.Component<IBeerComponentProps, IBeerComponentState> {

  constructor(props: IBeerComponentProps) {
    super(props);

    this.state = { sipsTaken: 0 };
  }

  public render(): React.ReactElement<IBeerComponentProps> {
    return (
      <div className={styles.beerComponent}>
        <div className={styles.container}>
          <div className={styles.beerContainer}>
            <Beer sipsTaken={this.state.sipsTaken} />
          </div>
          <div className={styles.beerButton}>
            <PrimaryButton text={"Take a sip"} onClick={() => this.setState({sipsTaken: this.state.sipsTaken + 1})}/>
            <PrimaryButton text={"Refill"} onClick={() => this.setState({sipsTaken: 0})}/>
            <PrimaryButton text={"Ad fundum"} onClick={() => this.setState({sipsTaken: 5})}/>
          </div>
        </div>
      </div>
    );
  }
}
