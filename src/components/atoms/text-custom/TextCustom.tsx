import { StyleProp, Text, TextStyle } from "react-native";
import { TextCustomProps } from "./TextCustom.types";
import { useMemo } from "react";
import { colors } from "../../../constants/colors";

const TextCustom = ({
  text,
  color = colors.black,
  bold,
  size = 14,
  style,
}: TextCustomProps) => {
  const textCustomStyle: StyleProp<TextStyle> = useMemo(
    () => [
      {
        fontWeight: bold ? "bold" : "normal",
        color,
        fontSize: size,
      },
      style,
    ],
    [color, bold, size, style]
  );

  return <Text style={textCustomStyle}>{text}</Text>;
};

export default TextCustom;
