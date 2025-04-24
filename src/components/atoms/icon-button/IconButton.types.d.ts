import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleProp, ViewStyle } from "react-native";

type IoniconName = keyof typeof Ionicons.glyphMap;

export interface IconButtonProps {
  iconName: IoniconName;
  iconSize?: number;
  iconColor?: string;
  action: () => void;
  style?: StyleProp<ViewStyle>;
}
