import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { auth } from './firebase/firebase.config';


import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import HomeScreen from './screens/HomeScreen';
import Login from './screens/Login';
import Register from './screens/Register';
import Quiz from './screens/Quiz';
import Result from './screens/Result';
import AdminLogin from './screens/AdminLogin';
import AdminHome from './screens/AdminHome';
import AdminLayout from './screens/AdminLayout';
import SplashScreen from './screens/SplashScreen';







const Drawer = createDrawerNavigator();




const App = () => {

  return (
    
    <NavigationContainer>
    <Drawer.Navigator>
    <Drawer.Screen name="SplashScreen" component={SplashScreen} />
    <Drawer.Screen name="Login" component={Login} />
    <Drawer.Screen name="Register" component={Register} />
    <Drawer.Screen name="Home" component={HomeScreen} />
    <Drawer.Screen name="Quiz" component={Quiz} />
    <Drawer.Screen name="Result" component={Result} />
    <Drawer.Screen name="AdminLayout" component={AdminLayout} />
    <Drawer.Screen name="AdminLogin" component={AdminLogin} />
    <Drawer.Screen name="AdminHome" component={AdminHome} />
    </Drawer.Navigator>
    </NavigationContainer>
  );
};


export default App;
