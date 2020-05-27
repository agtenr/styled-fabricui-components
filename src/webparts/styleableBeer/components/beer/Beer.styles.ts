import { IBeerStyleProps } from "./IBeerStyleProps";
import { IBeerStyles } from "./IBeerStyles";

const GlobalClassNames = {
  container: "beer-Container",
  glass: "beer-Glass",
  handle: "beer-Handle",
  void: "beer-Void",
  foam: "beer-Foam",
  beer: "beer-Beer"
};

export const getStyles  = (props: IBeerStyleProps): IBeerStyles => {
  const classNames = GlobalClassNames;
  const { sipsTaken } = props;

  return {
    container: [
      classNames.container, {
        display: "inline-block",
        padding: "20px"
      }
    ],
    glass: [
      classNames.glass, {
        width: "70px",
        margin: "auto",
        borderBottom: "black 4px solid",
        borderLeft: "black 3px solid",
        borderRight: "black 3px solid",
        position: "relative"
      }
    ],
    handle: [
      classNames.handle, {
        position: "absolute",
        width: "15px",
        height: "25px",
        backgroundColor: "transparent",
        right: "-20px",
        top: "50px",
        borderBottom: "black 3px solid",
        borderTop: "black 3px solid",
        borderRight: "black 3px solid"
      }
    ],
    void: [
      classNames.void, {
        width: "100%",
        backgroundColor: "transparent",
        transition: "height 0.4s linear"
       },
       sipsTaken == 0 && {
         height: "0px"
       },
       sipsTaken == 1 && {
         height: "20px"
       },
       sipsTaken == 2 && {
         height: "40px"
       },
       sipsTaken == 3 && {
         height: "60px"
       },
       sipsTaken == 4 && {
         height: "80px"
       },
       sipsTaken >= 5 && {
         height: "100px"
       }
    ],
    foam: [
      classNames.foam, {
        width: "100%",
        height: "20px",
        backgroundColor: "#F0F1E6"
       }
    ],
    beer: [
      classNames.beer, {
        width: "100%",
        backgroundColor: "#E7A20A",
        transition: "height 0.4s linear"
      },
      sipsTaken == 0 && {
        height: "100px"
      },
      sipsTaken == 1 && {
        height: "80px"
      },
      sipsTaken == 2 && {
        height: "60px"
      },
      sipsTaken == 3 && {
        height: "40px"
      },
      sipsTaken == 4 && {
        height: "20px"
      },
      sipsTaken >= 5 && {
        height: "0px"
      }
    ],
  };
};
