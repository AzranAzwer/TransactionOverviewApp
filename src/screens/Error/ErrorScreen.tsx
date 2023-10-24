import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './ErrorScreen.style';

import {C_GroupItemType} from '../../components/GroupList/types/GroupListType';
import {RouteProp, useRoute} from '@react-navigation/native';

type ParamsProps = {
  params: C_GroupItemType;
};

const ErrorScreen = () => {
  const {params} = useRoute<RouteProp<ParamsProps, 'params'>>();
  return (
    <View style={styles.ScreenContainer}>
      <Text>{`Error Screen with ${params.objectId}`}</Text>
    </View>
  );
};

export default ErrorScreen;
