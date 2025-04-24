import { useFocusEffect, useRoute } from "@react-navigation/native";
import { DetailsRouteProps } from "./Details.types";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useCallback, useEffect, useState } from "react";
import {
  addFavoriteToken,
  removeFavoriteToken,
  updateToken,
  watchToken,
} from "../../redux/slices/token/token.slice";
import { wsDisconnect } from "../../redux/slices/websocket/ws.slice";
import { Token } from "../../redux/slices/token/token.slice.types";

export const useDetails = () => {
  const route = useRoute<DetailsRouteProps>();
  const { token: tokenParam } = route?.params;

  const dispatch = useDispatch();
  const { isConnected } = useSelector((state: RootState) => state.websocket);
  const { watchedToken } = useSelector((state: RootState) => state.token);

  const [token, setToken] = useState<Token>(tokenParam);

  useFocusEffect(
    useCallback(() => {
      dispatch(updateToken(tokenParam));

      setTimeout(() => {
        dispatch(watchToken(tokenParam.originalSymbol.toLowerCase()));
      }, 500);

      return () => {
        dispatch(wsDisconnect());
        dispatch(updateToken());
      };
    }, [tokenParam])
  );

  useEffect(() => {
    if (watchedToken) {
      setToken(watchedToken);
    }
  }, [watchedToken]);

  const toggleFavorite = useCallback(() => {
    if (watchedToken) {
      const action = watchedToken?.isFavorite
        ? removeFavoriteToken
        : addFavoriteToken;

      dispatch(action(watchedToken?.originalSymbol));
    }
  }, [watchedToken]);

  return { isConnected, token, toggleFavorite };
};
