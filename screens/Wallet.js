import { Image, Pressable, Text, View } from 'react-native';
import useStyles from '../Styles';
import Footer from '../footer';

const WalletScreen = ({ navigation }) => {
  
  const { styles } = useStyles()

    return ( 
      <View style={ styles.html }>
  
        <View style={ styles.body }>
          <Text style={ styles.h3 }>Wallet support coming soon!!!</Text>
        </View>
      
        <Footer navigation={navigation}/>
        
      </View>
    );
}
 
export default WalletScreen;