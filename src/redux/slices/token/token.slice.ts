import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Token, TokenState } from "./token.slice.types";

const initialState: TokenState = {
  tokenList: [],
  watchedToken: undefined,
  favoriteTokens: [],
};

const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    updateTokenList: (state, action: PayloadAction<Token[]>) => {
      const tokenMap = new Map(
        state.tokenList.map((token) => [token.originalSymbol, token])
      );

      action.payload.forEach((token) => {
        if (tokenMap.has(token.originalSymbol)) {
          const existingToken = tokenMap.get(token.originalSymbol);
          tokenMap.set(token.originalSymbol, {
            ...existingToken,
            ...token,
            isFavorite: state.favoriteTokens.includes(token.originalSymbol),
          });
        } else {
          tokenMap.set(token.originalSymbol, {
            ...token,
            isFavorite: state.favoriteTokens.includes(token.originalSymbol),
          });
        }
      });

      state.tokenList = Array.from(tokenMap.values()).sort((a, b) =>
        a.originalSymbol.localeCompare(b.originalSymbol)
      );
    },
    updateToken: (state, action: PayloadAction<Token | undefined>) => {
      let token = action.payload;

      if (token) {
        token.isFavorite = state.favoriteTokens.includes(token.originalSymbol);
      }

      state.watchedToken = action.payload;
    },
    watchToken: (_, _action: PayloadAction<string>) => {},
    watchTokenList: () => {},
    addFavoriteToken: (state, action: PayloadAction<string>) => {
      state.favoriteTokens = [...state.favoriteTokens, action.payload];

      state.tokenList = state.tokenList.map((token) => ({
        ...token,
        isFavorite:
          token.originalSymbol === action.payload ? true : token.isFavorite,
      }));

      if (state.watchedToken) {
        state.watchedToken = {
          ...state.watchedToken,
          isFavorite: true,
        };
      }
    },
    removeFavoriteToken: (state, action: PayloadAction<string>) => {
      state.favoriteTokens = state.favoriteTokens.filter(
        (token) => token !== action.payload
      );

      state.tokenList = state.tokenList.map((token) => ({
        ...token,
        isFavorite:
          token.originalSymbol === action.payload ? false : token.isFavorite,
      }));

      if (state.watchedToken) {
        state.watchedToken = {
          ...state.watchedToken,
          isFavorite: false,
        };
      }
    },
  },
});

export const {
  updateToken,
  updateTokenList,
  watchToken,
  watchTokenList,
  addFavoriteToken,
  removeFavoriteToken,
} = tokenSlice.actions;
export default tokenSlice.reducer;
