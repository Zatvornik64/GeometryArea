import React, { useEffect }  from 'react';
import { View,  StyleSheet, FlatList, ActivityIndicator, Image } from 'react-native';
import { MainScreenItem } from '../components/MainScreenItem';
import { MainHeaderIcons } from '../components/MainHeaderIcons';
import { THEME } from '../theme';
import { DATA } from '../data';


export const MainScreen = ({ navigation }) => {

  const onOpen = figure => {
    //console.log(figure)
    navigation.navigate('Figure', figure ) 
  }

  useEffect(()=>{
    navigation.setOptions({
      headerRight: () => ( <MainHeaderIcons navigation={navigation} /> ),
    });
  }, [])
  
  
  return (
    <View style={styles.wrapper}>
      <FlatList
        data={DATA}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <MainScreenItem figure={item} onOpen={onOpen} />}
        numColumns={2}
      /> 
    </View>
  )
  }

const styles = StyleSheet.create({
  wrapper: {
    //padding: 10,
    marginBottom: 10,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
