import { NavigationContainer } from '@react-navigation/native';
import { MyDrawer } from './src/navigation';
import { Provider } from 'react-native-paper';

export default function App() {
  return (
    <Provider>
      <NavigationContainer>
        <MyDrawer />
      </NavigationContainer>
    </Provider>
  );
}