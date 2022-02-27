import { Image, Pressable, View } from 'react-native';
import useStyles from './Styles';

const Footer = ({ navigation }) => {
  
    const { styles } = useStyles()
  
    return ( 
        <View style={ styles.footer }>
            <Pressable onPress={()=> navigation.navigate('Packed Bitcoin')}>
            <Image source={require('./assets/home.png')} style={ styles.tabs}/>
            </Pressable>
            <Pressable onPress={()=> navigation.navigate('News')}>
            <Image source={require('./assets/news.png')} style={ styles.tabs}/>
            </Pressable>
            <Pressable onPress={()=> navigation.navigate('Market')}>
            <Image source={require('./assets/market.png')} style={ styles.tabs}/>
            </Pressable>
            <Pressable onPress={()=> navigation.navigate('Wallet')}>
            <Image source={require('./assets/wallet.png')} style={ styles.tabs}/>
            </Pressable>
            <Pressable onPress={()=> navigation.navigate('Profile')}>
            <Image source={require('./assets/user-profile.png')} style={ styles.tabs}/>
            </Pressable>
        </View> 
    );
}
 
export default Footer;