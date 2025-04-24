import React from "react";
import { View } from "react-native";
import { useDetails } from "./useDetails";
import TextCustom from "../../components/atoms/text-custom/TextCustom";
import styles from "./Details.styles";
import TextIconButton from "../../components/molecules/text-icon-button/TextIconButton";
import { colors } from "../../constants/colors";

const DetailsScreen: React.FC = () => {
  const { token, toggleFavorite } = useDetails();

  return (
    <View style={styles.container}>
      <View>
        <View>
          <TextCustom text={"Token symbol"} size={22} bold />
          <TextCustom text={token?.symbol} size={18} />
        </View>

        <View style={styles.priceContainer}>
          <TextCustom text={"Price"} size={22} bold />
          <TextCustom text={`${token?.price} $`} size={18} />
        </View>

        <TextIconButton
          text={
            token?.isFavorite ? "Remove from favorites" : "Add to favorites"
          }
          iconName={token?.isFavorite ? "heart" : "heart-outline"}
          iconColor={colors.white}
          action={() => toggleFavorite()}
        />
      </View>
    </View>
  );
};

export default DetailsScreen;
