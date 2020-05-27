import { IStyleFunctionOrObject, ITheme } from "office-ui-fabric-react";
import { IBeerStyleProps } from "./IBeerStyleProps";
import { IBeerStyles } from "./IBeerStyles";
export interface IBeerProps {
  sipsTaken: number;
  styles?: IStyleFunctionOrObject<IBeerStyleProps,IBeerStyles>;
  theme?: ITheme;
}
