import React from 'react';
import { StyleSheet, Text } from 'react-native';

const Headline = ({ bold = true, level, children }) => {
  return (
      <Text 
        style={[
          bold && styles.bold,
          styles[`level${level}`]
        ]}
      >
        {children}
      </Text>
    );
};

const styles = StyleSheet.create({
  bold: {
    fontWeight: 'bold',
  },
  level1: {
    fontSize: 44
  },
  level2: {
    fontSize: 40
  },
  level3: {
    fontSize: 32
  },
  level4: {
    fontSize: 28
  },
  level5: {
    fontSize: 24
  },
  level6: {
    fontSize: 20
  }
})

export default Headline;
