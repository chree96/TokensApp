import React, { memo } from "react";
import { TouchableOpacity } from "react-native";
import { colors } from "../../../constants/colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import styles from "./IconButton.styles";
import { IconButtonProps } from "./IconButton.types";

const IconButton = ({
  iconName,
  iconSize = 32,
  iconColor = colors.white,
  action,
  style,
}: IconButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={() => action()}
    >
      <Ionicons name={iconName} size={iconSize} color={iconColor} />
    </TouchableOpacity>
  );
};

export default memo(IconButton);
