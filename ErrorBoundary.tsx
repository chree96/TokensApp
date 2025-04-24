import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

type Props = {
  children: React.ReactNode;
  resetKey: any;
  onRetry: () => void;
};

type State = {
  hasError: boolean;
  error: Error | null;
};

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.log("Error caught by ErrorBoundary:", error, errorInfo);
  }

  componentDidUpdate(prevProps: Props) {
    if (this.state.hasError && this.props.resetKey !== prevProps.resetKey) {
      this.setState({ hasError: false, error: null });
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <View style={styles.container} key={this.props.resetKey}>
          <Text style={styles.title}>Qualcosa è andato storto 😢</Text>
          <Text style={styles.error}>{this.state.error?.message}</Text>

          <Button title="Retry" onPress={() => this.props.onRetry()} />
        </View>
      );
    }

    return this.props.children;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  error: {
    fontSize: 14,
    color: "red",
  },
});
