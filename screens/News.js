import { View } from 'react-native';
import useStyles from '../Styles';
import Footer from '../footer';
import NewsData from './NewsData';

const NewsScreen = ({ navigation }) => {
  
  const { styles } = useStyles()

  return ( 
      <View style={ styles.html }>
  
        <View style={ styles.body }>

          <NewsData />

        </View>
        
        <Footer navigation={navigation}/>
        
      </View>
  );
}
 
export default NewsScreen;