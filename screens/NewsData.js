import { RefreshControl, ScrollView, Text, View } from 'react-native';
import * as Linking from 'expo-linking';
import useFetch from "../useFetch";
import useStyles from '../Styles';

const NewsData = () => {

  const { styles } = useStyles();

  let getDate = new Date();
  let year = getDate.getFullYear();
  let month = getDate.getMonth()+1;
  let day = getDate.getDate();

  let date = `${year}-0${month}-${day}`

  const newsUrl = `https://newsapi.org/v2/everything?q=crypto&from=${date}&language=en&sortBy=relevancy`;

  const request = new Request(newsUrl);

  const {data, loading, error} = useFetch(request);
  const newsData = data && Object.entries(data)[2][1];

  const News = ({ data }) => {
    return ( 
      <View>
        {
          data.map((item)=>{
            return(
                <View key={Math.random()} style={ styles.newsObjects}>
                  <Text style={ styles.newsTitle } onPress={()=>{Linking.openURL(item.url)}}>{item.title}</Text>
                  <Text style={ styles.newsDesc } onPress={()=>{Linking.openURL(item.url)}}>{item.description}</Text>
                </View>
            )
          })
        }
      </View>
     );
  }

    return ( 
        <ScrollView>
            <RefreshControl titleColor={'#fff'} tintColor='#a1a1a1' progressBackgroundColor={'#1cb7de'}/>
            {loading && <Text style={ styles.loading }>Loading...</Text>}
            {error && <Text style={ styles.error }>{ error }</Text>}
            {newsData && <News data={newsData}/>}
        </ScrollView>
     );
}
 
export default NewsData;