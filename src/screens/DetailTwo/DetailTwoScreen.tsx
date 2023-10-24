import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './DetailTwo.style';

import {C_GroupItemType} from '../../components/GroupList/types/GroupListType';
import {RouteProp, useRoute} from '@react-navigation/native';

type ParamsProps = {
  params: C_GroupItemType;
};

const DetailTwoScreen = () => {
  const {params} = useRoute<RouteProp<ParamsProps, 'params'>>();
  return (
    <View style={styles.ScreenContainer}>
      <Text>{`Detail Two  Screen with ${params.objectId}`}</Text>
    </View>
  );
};

export default DetailTwoScreen;
