import React, { memo } from "react";
import { TouchableOpacity } from "react-native";
import { colors } from "../../../constants/colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import styles from "./TextIconButton.styles";
import { TextIconButtonProps } from "./TextIconButton.types";
import TextCustom from "../../atoms/text-custom/TextCustom";

const TextIconButton = ({
  text,
  iconName,
  iconSize = 22,
  iconColor = colors.white,
  action,
  style,
}: TextIconButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={() => action()}
    >
      <TextCustom text={text} color={colors.white} size={18} />

      {iconName && (
        <Ionicons name={iconName} size={iconSize} color={iconColor} />
      )}
    </TouchableOpacity>
  );
};

export default memo(TextIconButton);
