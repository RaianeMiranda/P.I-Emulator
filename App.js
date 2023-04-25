import { NavigationContainer } from '@react-navigation/native';
import { MyDrawer } from './navigation/index';
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