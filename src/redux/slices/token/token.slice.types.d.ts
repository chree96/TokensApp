export interface Token {
  symbol: string;
  originalSymbol: string;
  price: string;
  isFavorite?: boolean;
}

export interface TokenState {
  tokenList: Token[];
  watchedToken?: Token;
  favoriteTokens: string[];
}
