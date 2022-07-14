import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, QRCode, Maps, Information, RegisteredQRCode } from './src/views';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="QRCode" component={QRCode} />
        <Stack.Screen name="Maps" component={Maps} />
        <Stack.Screen name="Information" component={Information} />
        <Stack.Screen name="RegisteredQRCode" component={RegisteredQRCode} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
