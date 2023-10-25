import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '../screens/Home/HomeScreen';
import ErrorScreen from '../screens/Error/ErrorScreen';
import DetailOneScreen from '../screens/DetailOne/DetailOneScreen';
import DetailTwoScreen from '../screens/DetailTwo/DetailTwoScreen';
import {Text, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {userLogout} from '../redux/action/LoginAction';
import {useDispatch} from 'react-redux';
import {T_NavigationType} from '../utils/global/Types';
import {CommonActions, useNavigation} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export const AppNavigator = () => {
  const dispatch = useDispatch();
  const navigation: T_NavigationType = useNavigation();
  const Logout = async () => {
    await AsyncStorage.removeItem('@user_Data');
    dispatch(userLogout() as any);

    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: 'LoginScreen'}],
      }),
    );
  };

  const headerRight = () => {
    return (
      <TouchableOpacity onPress={Logout}>
        <Text>Logout</Text>
      </TouchableOpacity>
    );
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerTitle: 'Transactions List',
          headerRight: headerRight,
          headerLeft: () => null,
        }}
      />
      <Stack.Screen
        name="ErrorScreen"
        component={ErrorScreen}
        options={() => ({
          headerTitle: 'Error',
          headerShadowVisible: false,
        })}
      />
      <Stack.Screen
        name="DetailOneScreen"
        component={DetailOneScreen}
        options={() => ({
          headerTitle: 'Detail One',
          headerShadowVisible: false,
        })}
      />
      <Stack.Screen
        name="DetailTwoScreen"
        component={DetailTwoScreen}
        options={() => ({
          headerTitle: 'Detail Two',
          headerShadowVisible: false,
        })}
      />
    </Stack.Navigator>
  );
};
