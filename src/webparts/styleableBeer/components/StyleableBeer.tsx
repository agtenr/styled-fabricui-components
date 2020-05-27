import * as React from 'react';
import styles from './StyleableBeer.module.scss';
import { IStyleableBeerProps } from './IStyleableBeerProps';
import { IStyleableBeerState } from './IStyleableBeerState';
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import { Beer } from "./beer/Beer";
import { IBeerStyleProps } from './beer/IBeerStyleProps';
import { IBeerStyles } from './beer/IBeerStyles';

export default class StyleableBeer extends React.Component<IStyleableBeerProps, IStyleableBeerState> {

  constructor(props: IStyleableBeerProps) {
    super(props);

    this.state = { sipsTaken: 0 };
  }

  public render(): React.ReactElement<IStyleableBeerProps> {
    return (
      <div className={ styles.styleableBeer }>
        <div className={ styles.container }>
        <div className={styles.beerContainer}>
            <Beer sipsTaken={this.state.sipsTaken} />
            {/* <Beer sipsTaken={this.state.sipsTaken} /> */}
          </div>
          <div className={styles.beerButton}>
            <PrimaryButton text={"Take a sip"} onClick={() => this.setState({sipsTaken: this.state.sipsTaken + 1})}/>
          </div>
        </div>
      </div>
    );
  }

  // private darkBeerStyles = (props: IBeerStyleProps): IBeerStyles => {
  //   return {
  //     beer: { backgroundColor: "#5C2211" }
  //   };
  // }
}
