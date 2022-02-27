import { Text, View } from 'react-native';
import useStyles from '../Styles';
import Footer from '../footer';
import NewsData from './NewsData';
import { WebView } from "react-native-webview";

const HomeScreen = ({ navigation }) => {
  
  const { styles } = useStyles();

  const Widget = `<html>
                    <head>
                      <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    </head>
                    <body>
                      <script type="text/javascript" src="https://files.coinmarketcap.com/static/widget/coinPriceBlock.js"></script>
                      <div style="width: 100%; height: 100%; overflow-y: hidden; overflow-x: scroll;" id="coinmarketcap-widget-coin-price-block" coins="1,74,4687,825,1027,3408,2" currency="USD" theme="light" transparent="false" show-symbol-logo="true"></div>
                    </body>
                  </html>`

  return ( 
    <View style={ styles.html }>

      <View style={ styles.body }>

        <WebView 
          originWhitelist={['htt//', 'git//']}
          source={{
              html: Widget,
          }}
          style={ styles.widgetStyle }
          containerStyle={ styles.widget }
          showsVerticalScrollIndicator={false}
        />

        <View style={ styles.newsView }>
          <Text style={styles.h1}>News</Text>
          <NewsData />
        </View>

      </View>
        
      <Footer navigation={navigation}/>
      
    </View>
    );
}
 
export default HomeScreen;
