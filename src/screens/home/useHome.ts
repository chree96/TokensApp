import { useFocusEffect } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useCallback } from "react";
import {
  addFavoriteToken,
  removeFavoriteToken,
  watchTokenList,
} from "../../redux/slices/token/token.slice";
import { wsDisconnect } from "../../redux/slices/websocket/ws.slice";
import useNavigation from "../../navigator/useNavigation";
import { Screens } from "../../navigator/StackNavigator.types";
import { Token } from "../../redux/slices/token/token.slice.types";

export const useHome = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const { tokenList, favoriteTokens } = useSelector(
    (state: RootState) => state.token
  );

  useFocusEffect(
    useCallback(() => {
      dispatch(watchTokenList());

      return () => {
        dispatch(wsDisconnect());
      };
    }, [])
  );

  const goToTokenDetails = (token: Token) => {
    navigation.navigate(Screens.DETAILS, { token });
  };

  const toggleFavorite = useCallback(
    (symbol: string) => {
      const isFavoriteToken = favoriteTokens.includes(symbol);
      const action = isFavoriteToken ? removeFavoriteToken : addFavoriteToken;

      dispatch(action(symbol));
    },
    [favoriteTokens]
  );

  return { tokenList, goToTokenDetails, toggleFavorite };
};
