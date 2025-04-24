import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleProp, ViewStyle } from "react-native";
import { IconButtonProps } from "../../atoms/icon-button/IconButton.types";

type IoniconName = keyof typeof Ionicons.glyphMap;

export interface TextIconButtonProps extends IconButtonProps {
  text: string;
  iconName?: IoniconName;
}
