import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles'
import NumCompare from './NumCompare'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style= {styles.boxTextHeader}> Midterm Exam </Text>
        <Text style= {styles.boxText}> Compare two numbers </Text>
      </View>

    <NumCompare/>
    
    </View>
  );
}

