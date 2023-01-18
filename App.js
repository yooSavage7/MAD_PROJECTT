import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { auth } from './firebase/firebase.config';
import { createStackNavigator } from '@react-navigation/stack';



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
import CreateQuiz from './screens/CreateQuiz';
import ChooseSub from './screens/ChooseSub';







const Drawer = createDrawerNavigator();
const Stack= createStackNavigator();

const Logincontainer = ()=>{
  return(
    <Stack.Navigator initialRouteName="Main" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Main" component={Login}></Stack.Screen>
    <Stack.Screen name="AdminLogin" component={AdminLogin}></Stack.Screen>
    <Stack.Screen name="AdminLayout" component={AdminLayout}></Stack.Screen>
    <Stack.Screen name="CreateQuiz" component={CreateQuiz}></Stack.Screen>
    <Stack.Screen name="AdminHome" component={AdminHome}></Stack.Screen>

    </Stack.Navigator>

  );
}




const App = () => {

  return (
    
    <NavigationContainer>
    <Drawer.Navigator>
    <Drawer.Screen name="SplashScreen" component={SplashScreen} />
    <Drawer.Screen name="Login" component={Logincontainer} />
    <Drawer.Screen name="Register" component={Register} />
    <Drawer.Screen name="Home" component={HomeScreen} />
    <Drawer.Screen name="ChooseSubject" component={ChooseSub} />
    <Drawer.Screen name="Quiz" component={Quiz} />
    <Drawer.Screen name="Result" component={Result} />
    </Drawer.Navigator>
    </NavigationContainer>
  );
};


export default App;
