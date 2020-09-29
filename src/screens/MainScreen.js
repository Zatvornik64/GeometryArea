import React, { useEffect }  from 'react';
import { View,  StyleSheet, FlatList, ActivityIndicator, Image } from 'react-native';
import { MainScreenItem } from '../components/MainScreenItem';
import { MainHeaderIcons } from '../components/MainHeaderIcons';
import { THEME } from '../theme';
import { DATA } from '../data';


export const MainScreen = ({ navigation }) => {

  const onOpen = recipe => {
    navigation.navigate('Recipe', { recipe } ) 
  }

  useEffect(()=>{
    navigation.setOptions({
      headerRight: () => ( <MainHeaderIcons navigation={navigation} /> ),
    });
  }, [])
  
  {/*if (!recipes.length) {
    return (
      <View style={styles.loader}>
        <Image 
          resizeMode='center'
          source={require('../../assets/emptylist.jpg')}
        />
      </View>
    )
  }*/}


  return (
    <View style={styles.wrapper}>
      <FlatList
        data={recipes}
        keyExtractor={recipe => recipe.id.toString()}
        renderItem={() => <MainScreenItem onOpen={onOpen} />}
      /> 
    </View>
  )
  }

const styles = StyleSheet.create({
  wrapper: {
    //padding: 10,
    marginBottom: 10
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  }
})
