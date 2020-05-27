import { styled } from 'office-ui-fabric-react/lib/Utilities';
import { IBeerProps } from "./IBeerProps";
import { IBeerStyleProps } from "./IBeerStyleProps";
import { IBeerStyles } from "./IBeerStyles";
import { BeerBase } from "./Beer.base";
import { getStyles } from "./Beer.styles";

export const Beer: React.SFC<IBeerProps> = styled<IBeerProps, IBeerStyleProps, IBeerStyles>(
  BeerBase,
  getStyles
);
