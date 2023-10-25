import React from 'react';
import {SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import moment from 'moment';

import {styles} from './HomeScreen.style';
import {T_NavigationType} from '../../utils/global/Types';
import TransactionList from '../../utils/constants/TransactionList.json';
import {C_GroupItemType} from '../../components/GroupList/types/GroupListType';
import C_GroupList from '../../components/GroupList/GroupList';

export interface T_GroupData {
  id: number;
  name: string;
  thumbName: string;
  img?: string;
}

const HomeScreen = () => {
  const navigation: T_NavigationType = useNavigation();

  const groups = TransactionList.sort(
    (a, b) => moment(b.timestamp).unix() - moment(a.timestamp).unix(),
  ).reduce((groups: any, game) => {
    const date = game.timestamp.split('T')[0];
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(game);
    return groups;
  }, {});

  const groupArrays = Object.keys(groups).map(date => {
    return {
      data: groups[date],
      timestamp: date,
    };
  });

  const onPress = (data: C_GroupItemType) => {
    if (data.status === 'CANCELLED' || data.status === 'DECLINED') {
      navigation.navigate('ErrorScreen', data);
    } else if (data.origin === 'ATM_MACHINE' || data.origin === 'IN_PERSON') {
      navigation.navigate('DetailOneScreen', data);
    } else {
      navigation.navigate('DetailTwoScreen', data);
    }
  };

  return (
    <SafeAreaView style={styles.ScreenContainer}>
      <C_GroupList list={groupArrays} onPress={onPress} />
    </SafeAreaView>
  );
};

export default HomeScreen;
