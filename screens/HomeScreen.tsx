import React, {useState, useEffect} from 'react';
import {StyleSheet, FlatList, SafeAreaView} from 'react-native';
import {ListItem} from '../components/ListItem';
import Constants from 'expo-constants';
import axios from "axios"
export const HomeScreen = (props) => {
  const {navigation}=props
  const [articles, setArticles] = useState([{}]);
  const URL=`https://newsapi.org/v2/top-headlines?country=us&apiKey=${Constants?.manifest?.extra.newsApiKey}`
  useEffect(() => {
    fetchAriticles()
  }, []);

  const fetchAriticles=async()=>{
    try{
      const response=await axios.get(URL)
      setArticles(response.data.articles)
    }catch(error){
      console.log(error)
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={articles}
        renderItem={({item}) => {
          return (
            <ListItem
              imageUrl={item.urlToImage}
              author={item.author}
              title={item.title}
              onPress={()=>navigation.navigate("Article",{article:item})}
            />
          );
        }}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
