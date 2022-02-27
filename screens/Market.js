import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import useStyles from '../Styles';
import Footer from '../footer';
import WebView from 'react-native-webview';

const MarketScreen = ({ navigation }) => {
  
  const { styles } = useStyles()

  const Widget = `<html>
                    <head>
                      <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    </head>
                    <body style="width: 90%; margin: auto;">
                      <script src="https://cdn.jsdelivr.net/gh/coinponent/coinponent@1.2.6/dist/coinponent.js"></script>
                      <coin-ponent shadow="md" border-radius="5" font="sans-serif"></coin-ponent>
                    </body>
                  </html>`;

  return ( 
      <View style={ styles.html }>
  
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={ styles.centerElement }>
          <View style={ styles.body }>

            <WebView 
              originWhitelist={['htt//', 'git//']}
              source={{
                  html: Widget,
              }}
              style={ styles.widgetStyle }
              containerStyle={ styles.calculatorWidget }
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
            />
          
          </View>
        </TouchableWithoutFeedback>
      
        <Footer navigation={navigation}/>
        
      </View>
    );
}
 
export default MarketScreen;