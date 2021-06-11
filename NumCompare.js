import React, { useState } from 'react'
import { Text, View, TextInput, Button } from 'react-native'

const NumCompare = () => {
    const [num1, setNum1] = useState()
    const [num2, setNum2] = useState()
    const [result, setResult] = useState()
    const [maxnum] = useState(100)    
    const [minnum] = useState(2)
    const [invalidnum, setInvalidNum] = useState('')
    function validate() {
        if (num1 >= maxnum) {return setInvalidNum('Invalid')}
        if (num1 <= minnum) {return setInvalidNum('Invalid')}
        if (num2 >= maxnum) {return setInvalidNum('Invalid')}
        if (num2 <= minnum) {return setInvalidNum('Invalid')}        
            }
    function compare(num1, num2){
        if (num1 > num2) {return setResult('greater')}
        else if (num1 < num2) {return setResult ('smaller')}
        else {return setResult('equal')}
    }
            
return (
    <View style = {{padding: 10}}>
    
    <Text>Number 1</Text>
    <TextInput 
        style = {{height: 50, width: 200, borderColor: 'gray', border:'solid' }}
        onChangeText = {num1 => setNum1(num1)}
        keyboardType = 'numeric' />

    <Text>Number 2</Text>
    <TextInput 
        style = {{height: 50, width: 200, borderColor: 'gray', border:'solid' }}
        onChangeText = {num2 => setNum2(num2)}
        keyboardType = 'numeric'
          
         />
    
    <Button style = {{padding: 20, backgroundColor: 'white'}}
        title = 'COMPARE'
        onPress = {validate, compare}
        />
    <Text>{invalidnum}</Text>
    <Text>{result}</Text>
    </View>
)
}

export default NumCompare