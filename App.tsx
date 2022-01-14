import { StatusBar } from 'expo-status-bar';
import { store } from './store';
import { Provider } from 'react-redux';
import {RootNavigator} from './navigations/RootNavigator';
import {useFonts, Oswald_200ExtraLight } from '@expo-google-fonts/oswald';

export default function App() {
  const [fontsLoaded] = useFonts({
    Oswald_200ExtraLight
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    //Providerでラップすることで、storeを扱えるようになる
      //ラップされたコンポーネントより下の階層で、ラップを行う
    <Provider store={store} >
      <RootNavigator />
    </Provider>
  );
}

