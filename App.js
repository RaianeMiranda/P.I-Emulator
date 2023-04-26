import { NavigationContainer } from '@react-navigation/native';
// import { RootNavigation } from "./src/navigation/index"
import { MyDrawer } from "./src/navigation/index"
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

// export default function App() {
//   return (
//     <Provider>
//       <NavigationContainer>
//         <RootNavigation />
//       </NavigationContainer>
//     </Provider>
//   );
// }