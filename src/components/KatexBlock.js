import React, { useState }  from 'react';
import { StyleSheet } from 'react-native';
import Katex from 'react-native-katex';

const styles = StyleSheet.create({
  katex: {
    height: 200,
  }
});

const inlineStyle =`
html, body {
  display: flex;
  background-color: #eee;
  justify-content: center;
  align-items: center;
  height: 6rem;
  margin: 0;
  padding: 0;
}
.katex {
  font-size: 4em;
  margin: 0;
  display: flex;
}
`;

export function KatexBlock( {formulaTitle} ) {

  return (
      <Katex
          expression={formulaTitle}
          //style={styles.katex}
          inlineStyle={inlineStyle}
          displayMode={false}
          throwOnError={false}
          errorColor="#f00"
          macros={{}}
          colorIsTextColor={false}
          onLoad={() => {}}
          onError={() => console.error('Error')}
      />
      
  );
}