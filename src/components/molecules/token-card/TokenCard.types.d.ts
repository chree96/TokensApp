import { StyleProp, TouchableOpacityProps, ViewStyle } from "react-native";
import { Token } from "../../../redux/slices/token/token.slice.types";

export interface TokenCardProps extends TouchableOpacityProps {
  token: Token;
  onPress: () => void;
  onFavoritePress: () => void;
  style?: StyleProp<ViewStyle>;
}
