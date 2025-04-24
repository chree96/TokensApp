import React from "react";
import { View, FlatList } from "react-native";
import styles from "./Home.styles";
import Loader from "../../components/atoms/loader/Loader";
import { useHome } from "./useHome";
import TokenCard from "../../components/molecules/token-card/TokenCard";

const Home: React.FC = () => {
  const { tokenList, goToTokenDetails, toggleFavorite } = useHome();

  return (
    <View style={styles.container}>
      {tokenList?.length ? (
        <FlatList
          data={tokenList}
          testID="token-list"
          keyExtractor={(item) => `list-item-${item.symbol}`}
          renderItem={({ item }) => (
            <TokenCard
              token={item}
              testID={`token-list-item-${item.symbol}`}
              onPress={() => goToTokenDetails(item)}
              onFavoritePress={() => toggleFavorite(item.originalSymbol)}
            />
          )}
        />
      ) : (
        <Loader testID="home-loader" />
      )}
    </View>
  );
};

export default Home;
