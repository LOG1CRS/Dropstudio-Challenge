import 'react-native-gesture-handler';
import 'react-native-reanimated';
import { registerRootComponent } from 'expo';
import App from './App';
import { LogBox } from 'react-native';

// Hide unimportant warnings.
LogBox.ignoreLogs(['Setting a timer for a long period of time']);

registerRootComponent(App);
