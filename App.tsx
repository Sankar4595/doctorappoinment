import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Welcome from "./Screens/Welcome";
import SignIn from "./Screens/SignIn";
import SignUp from "./Screens/Signup";
import VerifyCode from "./Screens/VerifyCode";
import NewPassword from "./Screens/NewPassword";
import CompleteProfile from "./Screens/CompleteProfile";
import HomeScreen from "./Screens/Home/Home";
import Explorer from "./Screens/Home/Explorer";
import Chat from "./Screens/Home/Chat";
import Appointment from "./Screens/Home/Appoinment";
import Profile from "./Screens/Home/Profile";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="welcome"
          component={Welcome}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="SignIn"
          component={SignIn}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="SignUp"
          component={SignUp}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="VerifyCode"
          component={VerifyCode}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="NewPassword"
          component={NewPassword}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="CompleteProfile"
          component={CompleteProfile}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="HomeScreen"
          component={HomeScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Explorer"
          component={Explorer}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Appointment"
          component={Appointment}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Chat"
          component={Chat}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Profile"
          component={Profile}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
