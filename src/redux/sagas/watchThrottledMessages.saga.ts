import { throttle, put } from "redux-saga/effects";
import { wsMessageReceived } from "../slices/websocket/ws.slice";
import {
  updateToken,
  updateTokenList,
  watchToken,
  watchTokenList,
} from "../slices/token/token.slice";
import formatTokenList from "./utils/format-token-list";

function* handleThrottledMessage(action: any) {
  const { data, type } = action.payload;

  if (type === watchToken.type) {
    const { p: price, s: symbol, s } = data;
    const token = {
      symbol: symbol.replace("USDT", ""),
      price: parseInt(price).toFixed(2),
      originalSymbol: s,
    };
    yield put(updateToken(token));
  } else if (type === watchTokenList.type) {
    const tokenList = formatTokenList(data);
    yield put(updateTokenList(tokenList));
  }
}

export function* watchThrottledMessages() {
  yield throttle(5000, wsMessageReceived.type, handleThrottledMessage);
}
