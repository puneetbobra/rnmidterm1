import React, { useState } from 'react'
import { Text, View, TextInput, Button } from 'react-native'



const NumCompare = () => {
    const [num1, setNum1] = useState()
    const [num2, setNum2] = useState()
    const [result, setResult] = useState()
    const [maxnum, setMaxNum] = useState(100)    
    const [minnum, setMinNum] = useState(2)    
    function compare(num1, num2) {
        if (num1 >= maxnum) {return 'invalid number'}
        if (num1 <= minnum) {return 'invalid number'}
        if (num2 >= maxnum) {return 'invalid number'}
        if (num2 <= minnum) {return 'invalid number'}
        
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
        maxLength = {100}
         />
    
    <Button style = {{padding: 20, backgroundColor: 'white'}}
        title = 'COMPARE'
        onPress = {compare}
        />
    </View>
)
}

export default NumCompare