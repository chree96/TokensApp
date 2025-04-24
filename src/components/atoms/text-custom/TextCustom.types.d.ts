import { StyleProp, TextProps, TextStyle } from "react-native";

export interface TextCustomProps extends TextProps {
  text: string;
  color?: string;
  bold?: boolean;
  size?: number;
  style?: StyleProp<TextStyle>;
}
