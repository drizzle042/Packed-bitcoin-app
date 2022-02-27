import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/Home';
import NewsScreen from './screens/News';
import MarketScreen from './screens/Market';
import WalletScreen from './screens/Wallet';
import ProfileScreen from './screens/Profile';
import useStyles from './Styles';
import { Image, Text, View } from 'react-native';


export default function Urls() {

  const { styles } = useStyles();

  const Stack = createNativeStackNavigator();

  const HomeTitle = ()=>{
    return(
      <View>
        <Text style={ styles.homeHeader }>Packed <Image source={require('./assets/PBTC.png')} style={ styles.tabs }/> Bitcoin</Text>
      </View>
    );
  }

  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{
              headerStyle: {
                backgroundColor: '#191e22',
              },
              headerTitleStyle: {
                fontWeight: 'bold',
                color: '#fff',
              },
            }}>
          <Stack.Screen name='Packed Bitcoin' component={HomeScreen} options={{ headerTitle: ()=> <HomeTitle />}} />
          <Stack.Screen name='News' component={NewsScreen} />
          <Stack.Screen name='Market' component={MarketScreen} />
          <Stack.Screen name='Wallet' component={WalletScreen} />
          <Stack.Screen name='Profile' component={ProfileScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}