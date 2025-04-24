import { Provider } from "react-redux";
import store from "./src/redux/store";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./src/navigator/StackNavigator";
import { useState } from "react";
import { ErrorBoundary } from "./ErrorBoundary";

export default function App() {
  const [resetKey, setResetKey] = useState(0);

  const handleRetry = () => {
    setResetKey((prev) => prev + 1);
  };

  return (
    <Provider store={store}>
      <ErrorBoundary resetKey={resetKey} onRetry={handleRetry}>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </ErrorBoundary>
    </Provider>
  );
}
