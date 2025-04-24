import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  header: {
    height: 120,
    paddingTop: 8,
    elevation: 4,
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 2 },
  },
  safeArea: {
    backgroundColor: "transparent",
    flex: 1,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  titleContainer: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  backButton: {
    position: "absolute",
    left: 12,
  },
});

export default styles;
