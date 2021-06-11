import React, { useState } from 'react'
import { Text, View, TextInput, Button } from 'react-native'

const NumCompare = () => {
    const [num1, setNum1] = useState()
    const [num2, setNum2] = useState()
    const [response, setResponse] = useState('')
    
    function compare(){
        let result;
        if ((num1 < 2 || num1 > 100) || (num2 < 2 || num2 > 100))
        { result = <Text style= {{color: 'red'}}> Invalid input, please try again. </Text>}
        else if (num1 > num2) { result = <Text style={{color: 'green'}}> Number1 is bigger than Number2 </Text>}
        else if (num1 < num2) { result = <Text style={{color: 'green'}}> Number1 is less than Number2 </Text> }
        else {result = <Text style={{color: 'green'}}> Number1 is equal to Number2 </Text> }
        
        return result        
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
        style = {{height: 50, width: 200, borderColor: 'gray', border:'solid'}}
        onChangeText = {num2 => setNum2(num2)}
        keyboardType = 'numeric' />
    
    <Button 
        style = {{height : 20, backgroundColor: 'white'}}
        title = 'COMPARE'
        onPress = {() =>{setResponse(compare())}}
        />

    <Text>{response}</Text>

    </View>
)
}

export default NumCompare