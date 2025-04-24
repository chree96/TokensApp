import React from "react";
import { View, StatusBar, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./GradientHeader.styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { GradientHeaderProps } from "./GradientHeader.types";
import useNavigation from "../../../navigator/useNavigation";
import Ionicons from "@expo/vector-icons/Ionicons";
import { colors } from "../../../constants/colors";
import TextCustom from "../../atoms/text-custom/TextCustom";
import IconButton from "../../atoms/icon-button/IconButton";

const GradientHeader: React.FC<GradientHeaderProps> = ({
  title,
  canGoBack,
}) => {
  const navigation = useNavigation();

  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <LinearGradient
        colors={[
          colors.periwingleGray,
          colors.facebookBlue,
          colors.darkMidnightBlue,
        ]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.header}
      >
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.headerContainer}>
            {canGoBack && (
              <IconButton
                iconName={"chevron-back"}
                action={() => navigation.goBack()}
                style={styles.backButton}
              />
            )}

            <TextCustom text={title} bold color={colors.white} size={18} />
          </View>
        </SafeAreaView>
      </LinearGradient>
    </>
  );
};

export default GradientHeader;
