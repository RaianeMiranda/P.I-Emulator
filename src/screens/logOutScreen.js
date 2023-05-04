import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../config/firebase/firebase';

const LogOutScreen = () => {
    const navigation = useNavigation();

    // When this component mounts, log the user out and navigate to the login screen
    useEffect(() => {
        auth.signOut().then(() => {
            navigation.reset({
                index: 0,
                routes: [{ name: 'Login' }],
            });
        });
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Logging out...</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 20,
    },
});

export default LogOutScreen;
