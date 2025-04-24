import { Token } from "../redux/slices/token/token.slice.types";

export enum Screens {
  HOME = "Home",
  DETAILS = "Details",
}

export type StackNavigatorScreens = {
  [Screens.HOME]: undefined;
  [Screens.DETAILS]: {
    token: Token;
  };
};
