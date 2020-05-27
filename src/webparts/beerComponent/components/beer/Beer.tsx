import * as React from 'react';
import styles from "./Beer.module.scss";
import { css } from "office-ui-fabric-react/lib/Utilities";
import { IBeerProps } from "./IBeerProps";

export const Beer: React.SFC<IBeerProps> = (props: IBeerProps) => {
  let beerClass = styles.sips0;
  let voidClass = styles.sips5;
  switch (props.sipsTaken) {
    case 0:
      beerClass = styles.sips0;
      voidClass = styles.sips5;
      break;
    case 1:
      beerClass = styles.sips1;
      voidClass = styles.sips4;
      break;
    case 2:
      beerClass = styles.sips2;
      voidClass = styles.sips3;
      break;
    case 3:
      beerClass = styles.sips3;
      voidClass = styles.sips2;
      break;
    case 4:
      beerClass = styles.sips4;
      voidClass = styles.sips1;
      break;
    case 5:
      beerClass = styles.sips5;
      voidClass = styles.sips0;
      break;
    default:
      beerClass = styles.sips5;
      voidClass = styles.sips0;
      break;
  }
  return (
    <div className={styles.conainter}>
      <div className={styles.glass}>
        <div className={styles.handle}></div>
        <div className={css(styles.void, voidClass)}></div>
        <div className={styles.foam}></div>
        <div className={css(styles.beer, beerClass)}></div>
      </div>
    </div>
  );
};
