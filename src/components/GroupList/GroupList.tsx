import React from 'react';
import {SectionList, TouchableOpacity, Text, View} from 'react-native';
import moment from 'moment';
import Entypo from 'react-native-vector-icons/Entypo';

import {
  C_GroupBy,
  C_GroupItemType,
  C_GroupListProps,
} from './types/GroupListType';
import {Colors} from '../../utils/assets/Colors';
import {Style} from './GroupListStyle.styles';

const C_GroupList = ({list, onPress}: C_GroupListProps) => {
  const renderIcon = (item: C_GroupItemType) => {
    if (item.origin === 'MOBILE_APP' || item.origin === 'PHONE_CALL') {
      return <Entypo name="mobile" size={25} color={Colors.primary} />;
    } else {
      switch (item.status) {
        case 'APPROVED':
          return <Entypo name="check" size={25} color={Colors.green} />;
        case 'CANCELLED':
          return <Entypo name="block" size={25} color={Colors.error} />;
        case 'DECLINED':
          return <Entypo name="check" size={25} color={Colors.primary} />;
        case 'IN_REVIEW':
          return (
            <Entypo name="back-in-time" size={25} color={Colors.primary} />
          );
        case 'PENDING':
          return (
            <Entypo
              name="flickr-with-circle"
              size={25}
              color={Colors.primary}
            />
          );
      }
    }
  };

  const renderItems = ({item}: {item: C_GroupItemType}) => {
    return (
      <TouchableOpacity
        style={Style.listContainer}
        onPress={() => onPress(item)}>
        {renderIcon(item)}
        <View style={Style.descContainer}>
          <View style={Style.timeContainer}>
            <Text style={{}}>{`Transaction ${item.status}`}</Text>
            <Text style={{}}>{moment(item.timestamp).format('hh:mm A')}</Text>
          </View>
          <Text>{`The transaction ${item.objectId} has been ${item.status} from ${item.origin}`}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderTitle = (timestamp: string) => {
    var today = moment();
    var yesterday = moment().subtract(1, 'day');
    const isToday = moment(timestamp).isSame(today, 'day');
    let isYesterday = moment(timestamp).isSame(yesterday, 'day');

    if (isToday) {
      return 'TODAY';
    } else if (isYesterday) {
      return 'YESTERDAY';
    } else {
      return moment(timestamp).format('MMM DD');
    }
  };

  const renderHeader = ({section}: {section: C_GroupBy}) => {
    return (
      <View style={Style.header}>
        <Text style={Style.titleStyle}>{renderTitle(section.timestamp)}</Text>
      </View>
    );
  };

  return (
    <SectionList
      sections={list}
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderItems}
      renderSectionHeader={renderHeader}
      contentContainerStyle={Style.sectionList}
    />
  );
};

export default C_GroupList;
