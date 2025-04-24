import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home/Home";
import DetailsScreen from "../screens/details/Details";
import { Screens, StackNavigatorScreens } from "./StackNavigator.types";
import GradientHeader from "../components/molecules/gradient-header/GradientHeader";

const Stack = createStackNavigator<StackNavigatorScreens>();

function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        header: (props) => (
          <GradientHeader title={props.route.name} {...props} />
        ),
      }}
    >
      <Stack.Screen name={Screens.HOME} component={Home} />
      <Stack.Screen
        name={Screens.DETAILS}
        component={DetailsScreen}
        options={{
          header: (props) => (
            <GradientHeader title={props.route.name} canGoBack {...props} />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

export default StackNavigator;
