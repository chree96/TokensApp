import { END, eventChannel } from "redux-saga";
import {
  wsConnect,
  wsDisconnect,
  wsError,
  wsMessageReceived,
} from "../../slices/websocket/ws.slice";
import { w3cwebsocket as W3CWebSocket } from "websocket";

export function createSocketChannel(client: W3CWebSocket) {
  return eventChannel((emitter) => {
    client.onopen = () => {
      emitter({ type: wsConnect.type });
    };

    client.onmessage = (message) => {
      try {
        const data = JSON.parse(message.data.toString());
        emitter({ type: wsMessageReceived.type, data });
      } catch (error) {
        emitter({ type: wsError.type, error });
        client.close();
      }
    };

    client.onerror = () => {
      emitter({ type: wsError.type, error: "WebSocket error" });
      client.close();
    };

    client.onclose = () => {
      emitter({ type: wsDisconnect.type });
      emitter(END);
    };

    return () => {
      client.close();
    };
  });
}
