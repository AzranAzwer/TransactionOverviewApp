import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './DetailOneScreen.style';

import {C_GroupItemType} from '../../components/GroupList/types/GroupListType';
import {RouteProp, useRoute} from '@react-navigation/native';

type ParamsProps = {
  params: C_GroupItemType;
};

const DetailOneScreen = () => {
  const {params} = useRoute<RouteProp<ParamsProps, 'params'>>();
  return (
    <View style={styles.ScreenContainer}>
      <Text>{`Detail One  Screen with ${params.objectId}`}</Text>
    </View>
  );
};

export default DetailOneScreen;
