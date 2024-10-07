import { StyleSheet, Text, View, Button, TextInput } from 'react-native'
import { useFonts } from 'expo-font'
import { useState } from 'react'

export default function App(){
    const [enteredGoalText, setEnteredGoalText] = useState('')
    const [courseGoals, setCourseGoals] = useState([])

    function goalInputHandler(textInput){
        setEnteredGoalText(textInput)
    }

    function addGoalHandler(){
        if (enteredGoalText != ''){
            setCourseGoals((courseGoals)=>[...courseGoals, enteredGoalText])
            setEnteredGoalText('')
        }
        console.log(courseGoals)
    }

    function resetGoals(){
        setCourseGoals([])
    }

    return (
        <View style={styles.appContainer}>
            <View>
                <Text style={styles.titleText}>Your Course Goals</Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput placeholder='Your Course Goal' style={styles.textInput} onChangeText={goalInputHandler} value={enteredGoalText}
                />
                <Button title='Add Goal' onPress={addGoalHandler} color='#FD8B51' />
                <Button title='Reset' onPress={resetGoals} color='#CB6040'/>
            </View>
            <View style={styles.goalsContainer}>
                {courseGoals.map((goal)=><Text key={goal}>{goal}</Text>)}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    appContainer: {
        paddingTop: 50,
        paddingHorizontal: 16,
        flex: 1,
        backgroundColor: '#F2E5BF',
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        marginRight: 20,
        borderBottomColor: '#A5B68D',
        borderBottomWidth: 1,
        flex: 1,
    },
    textInput: {
        borderWidth: 2,
        borderColor: '#A5B68D',
        width: '55%',
        marginRight: 8,
        padding: 13,
    },
    buttonContainer:{
        
    },
    goalsContainer: {
        padding: 10,
        borderWidth: 2,
        borderColor: '#A5B68D',
        marginRight: 20,
        marginBottom: 20,
        backgroundColor: '#ECDFCC',
        flex: 4,
    },
    titleText: {
        fontFamily: 'Montserrat-Regular',
        color: '#257180',
        fontSize: 30,
        fontWeight: 'bold',
    }
})