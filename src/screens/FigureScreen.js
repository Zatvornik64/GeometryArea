import React, {useState} from 'react';
import { View, Text, TextInput, Image, StyleSheet } from 'react-native';
import { KatexBlock } from '../components/KatexBlock';

export const FigureScreen = (props) => {
  const figure = props.route.params;
  const [param1, setParam1] = useState(0)
  const [param2, setParam2] = useState(0)
  const [param3, setParam3] = useState(0)
  const onChanged1 = (input) => {setParam1(+input)};
  const onChanged2 = (input) => {setParam2(+input)};
  const onChanged3 = (input) => {setParam3(+input)};
  const result = figure.formula(param1, param2, param3);
  const resultString = `S = ${result}`;

  return (
    <>
      <Text style={styles.text}>{figure.title}</Text>
      <Image style={styles.image} source={figure.img} />
      <KatexBlock style={styles.katex} formulaTitle={figure.formulaTitle}/>
      {figure.formulaSubTitle && <KatexBlock style={styles.katex} formulaTitle={figure.formulaSubTitle}/>}
      {figure.params[0] && <View>
        <Text style={styles.text}>{figure.params[0]}</Text>
        <TextInput 
          style={styles.textInput}
          keyboardType = 'number-pad'
          onChangeText = {(text)=> onChanged1(text)}
          defaultValue = {param1.toString()}
        />
      </View>}
      {figure.params[1] && <View>
        <Text style={styles.text}>{figure.params[1]}</Text>
        <TextInput 
          style={styles.textInput}
          keyboardType = 'number-pad'
          onChangeText = {(text)=> onChanged2(text)}
          defaultValue = {param2.toString()}
        />
      </View>}
      {figure.params[2] && <View>
        <Text style={styles.text}>{figure.params[2]}</Text>
        <TextInput 
          style={styles.textInput}
          keyboardType = 'number-pad'
          onChangeText = {(text)=> onChanged3(text)}
          defaultValue = {param3.toString()}
        />
      </View>}
      <View>
      <Text style={styles.text}>{resultString}</Text>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  image: {
    height: 250,
    alignItems: 'center',
    marginLeft: 80,
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
    textAlign: 'center'
  },
  katex: {
    
  },
  textInput: {

  }
})