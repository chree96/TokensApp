import { TouchableOpacity, View } from "react-native";
import styles from "./TokenCard.styles";
import TextCustom from "../../atoms/text-custom/TextCustom";
import { memo } from "react";
import IconButton from "../../atoms/icon-button/IconButton";
import { colors } from "../../../constants/colors";
import { TokenCardProps } from "./TokenCard.types";

const TokenCard = ({
  token,
  onPress,
  onFavoritePress,
  style,
  ...props
}: TokenCardProps) => {
  const { price, symbol } = token;

  return (
    <TouchableOpacity
      testID={props.testID}
      onPress={() => onPress()}
      style={[styles.container, style]}
    >
      <View>
        <TextCustom text={symbol} bold size={16} />
        <TextCustom text={`${price} $`} size={12} />
      </View>

      <IconButton
        iconName={token.isFavorite ? "heart" : "heart-outline"}
        iconColor={colors.cherryRed}
        iconSize={24}
        action={() => onFavoritePress()}
      />
    </TouchableOpacity>
  );
};

export default memo(TokenCard);
