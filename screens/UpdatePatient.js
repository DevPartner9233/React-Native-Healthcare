/**
 * @file UpdatePatient.js -> React Native Healthcare App
 * @author Emre Deniz
 * @author Muindo Gituku
 */

import * as React from 'react';
import { useState } from 'react'
import { Text, View, TouchableOpacity, SafeAreaView, TextInput, StyleSheet } from 'react-native';
import Dropdown from 'react-native-input-select';

export default function UpdatePatient({navigation}) {
    // State hooks
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [address, setAddress] = React.useState('');
    const [dateOfBirth, setDateOfBirth] = React.useState('');
    const [department, setDepartment] = React.useState('');
    const [doctor, setDoctor] = React.useState('');
  
    // Calculate button function
    function onClickCalculateButton() {
        // Calculate bmi with related formulas
        var bmiCalculated = 0;
        if(selectedUnit == 'Imperial System'){
            bmiCalculated = (weight / (height * height) * 703).toFixed(1);
        }
        else{
            var heightM = height / 100;
            bmiCalculated = (weight / (heightM * heightM)).toFixed(1);
        }

        // Set bmi color
        if(bmiCalculated < 18.5){ setBmiColor('blue'); }
        else if(bmiCalculated < 25){ setBmiColor('green'); }
        else if(bmiCalculated < 30){ setBmiColor('orange'); }
        else if(bmiCalculated >= 30){ setBmiColor('red'); }

        setBmi(bmiCalculated);
    };

    return (
        <View> 
            <Text>
                <SafeAreaView style = {styles.container}>
                    <View style = {styles.wrapper}>
                        {/* Header Title */}
                        <Text style={styles.header}>Update Patient</Text>

                        {/* Input fields */}
                        <TextInput
                            style = {styles.inputStyle}
                            value = {firstName}
                            onChangeText = {text => setFirstName(text)}
                            placeholder = {"First Name"}
                        />
                        <TextInput
                            style = {styles.inputStyle}
                            value = {lastName}
                            onChangeText = {text => setLastName(text)}
                            placeholder = {"Last Name"}
                        />
                        <TextInput
                            style = {styles.inputStyle}
                            value = {address}
                            onChangeText = {text => setAddress(text)}
                            placeholder = {"Address"}
                        />
                        <TextInput
                            style = {styles.inputStyle}
                            value = {dateOfBirth}
                            onChangeText = {text => setDateOfBirth(text)}
                            placeholder = {"Date of Birth"}
                        />
                        <Text> </Text>
                        <Text>Department:</Text>
                        <Dropdown
                            placeholder="Select an option..."
                            options={[
                                { label: 'Emergency', value: 'Cardiology' },
                                { label: 'Cardiology', value: 'Cardiology' },
                                { label: 'Psychiatry', value: 'Psychiatry' },
                                { label: 'Hematology', value: 'Hematology' },
                                { label: 'Microbiology', value: 'Microbiology' },
                                { label: 'Oncology', value: 'Oncology' },
                                { label: 'Orthopedics', value: 'Orthopedics' }
                            ]}
                            selectedValue={department}
                            onValueChange={(value) => setDepartment(value)}
                            primaryColor={'green'}
                            isMultiple={false}
                        />
                        <Text>Doctor:</Text>
                        <Dropdown
                            placeholder="Select an option..."
                            options={[
                                { label: 'Megan Garner', value: 'Megan Garner' },
                                { label: 'Luke White', value: 'Luke White' },
                                { label: 'George Smith', value: 'George Smith' },
                                { label: 'Melinda Binder', value: 'Melinda Binder' },
                                { label: 'Waldo Cross', value: 'Waldo Cross' },
                                { label: 'Lawrence Shortle', value: 'Lawrence Shortle' },
                                { label: 'Laura Castro', value: 'Laura Castro' }
                            ]}
                            selectedValue={doctor}
                            onValueChange={(value) => setDoctor(value)}
                            primaryColor={'green'}
                            isMultiple={false}
                        />

                        {/* Add button */}
                        <TouchableOpacity
                            style={[styles.button, {backgroundColor: '#3B80C8'}]}
                            onPress = {onClickCalculateButton}>
                            <Text style={[{color: 'white'}, {fontSize: 22}, {fontWeight: 'bold'}, , {textAlign: 'center'}]}>Update</Text>
                        </TouchableOpacity>

                        {/* Cancel button */}
                        <TouchableOpacity
                            style={[styles.button, {backgroundColor: 'red'}]}
                            onPress={() => navigation.navigate('Patients')}>
                            <Text style={[{color: 'white'}, {fontSize: 22}, {fontWeight: 'bold'}, {textAlign: 'center'}]}>Cancel</Text>
                        </TouchableOpacity>
                    </View>

                </SafeAreaView>
            </Text> 
        </View> 
    );
}

// Style definitions
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: "white"
        // justifyContent: 'center',
    },
    wrapper: {
        padding: 30,
    },
    header: {
        fontSize: 26,
        marginBottom: 5,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    inputStyle: {
        fontSize: 20,
        padding: 10,
        marginTop: 10,
        height: 55,
        width: 330,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 0
    },
    button: {
        marginTop: 10,
        paddingTop: 10,
        paddingBottom: 10,
        textAlign: 'center',
        borderRadius: 0,
        width: 330
    },
    output: {
        fontSize: 44,
        fontWeight: 'bold',
        marginTop: 10
    },
    explanations: {
        fontSize: 20,
        marginTop: 5
    }
});