import { StyleSheet } from "react-native";
import { colors } from "../../../constants/colors";

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: "100%",
    borderRadius: 8,
    backgroundColor: colors.facebookBlue,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 12,
  },
});

export default styles;
