import React, {useState} from 'react';
import { View, Text, TextInput, Image, StyleSheet } from 'react-native';
import { KatexBlock } from '../components/KatexBlock';

export const FigureScreen = ({ route }) => {
  const figure = route.params;
  const [param1, setParam1] = useState(0)
  const [param2, setParam2] = useState(0)
  const [param3, setParam3] = useState(0)
  const onChanged1 = (input) => {setParam1(+input)};
  const onChanged2 = (input) => {setParam2(+input)};
  const onChanged3 = (input) => {setParam3(+input)};
  const result = +figure.formula(param1, param2, param3).toFixed(3) || 0;
  const resultString = `S = ${result}`;
  const resultMargin = figure.formulaSubTitle ? 70 - (figure.params.length * 20) : 140 - (figure.params.length * 20);

  return (
    <>
      <Text style={styles.titleText}>{figure.title}</Text>
      <Image style={styles.image} source={figure.img} />
      <KatexBlock style={styles.katex} formulaTitle={figure.formulaTitle}/>
      {figure.formulaSubTitle && <KatexBlock style={styles.katex} formulaTitle={figure.formulaSubTitle}/>}
      {figure.params[0] && <View style={styles.paramWrapper} >
        <Text style={styles.paramText}>{figure.params[0]}</Text>
        <TextInput 
          style={styles.paramInput}
          keyboardType = 'number-pad'
          onChangeText = {(text)=> onChanged1(text)}
          defaultValue = {param1.toString()}
        />
      </View>}
      {figure.params[1] && <View style={styles.paramWrapper}>
        <Text style={styles.paramText}>{figure.params[1]}</Text>
        <TextInput 
          style={styles.paramInput}
          keyboardType = 'number-pad'
          onChangeText = {(text)=> onChanged2(text)}
          defaultValue = {param2.toString()}
        />
      </View>}
      {figure.params[2] && <View style={styles.paramWrapper}>
        <Text style={styles.paramText}>{figure.params[2]}</Text>
        <TextInput 
          style={styles.paramInput}
          keyboardType = 'number-pad'
          onChangeText = {(text)=> onChanged3(text)}
          defaultValue = {param3.toString()}
        />
      </View>}
      <View style={{ marginTop: 20, marginBottom: resultMargin }}>
        <Text style={styles.resultText}>{resultString}</Text>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  image: {
    height: 170,
    alignItems: 'center',
    marginLeft: 70,
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
    textAlign: 'center'
  },
  titleText: {
    fontSize: 22,
    //marginBottom: 5,
    textAlign: 'center'
  },
  katex: {
    backgroundColor: '#eee'
  },
  paramWrapper: {
    flexDirection: 'row',
    marginBottom: 20
  },
  paramText: {
    paddingHorizontal: 10,
    fontSize: 36,
    lineHeight: 40,
    width: '20%',
  },
  paramInput: {
    paddingHorizontal: 10,
    borderBottomColor: '#aaa',
    borderBottomWidth: 2,
    fontSize: 30,
    lineHeight: 34,
    width: '30%'
  },
  resultText: {
    textAlign: 'center',
    fontSize: 30,
    lineHeight: 34,
    width: '80%'
  }
})