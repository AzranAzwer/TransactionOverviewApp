import {Dimensions, StyleSheet} from 'react-native';
import {Colors} from '../../utils/assets/Colors';

export const Style = StyleSheet.create({
  header: {
    paddingLeft: 10,
    marginTop: 20,
  },
  titleStyle: {
    color: Colors.secondary,
    fontWeight: '700',
    fontSize: 16,
  },
  listContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    height: 80,
    alignItems: 'center',
    paddingLeft: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.secondary,
  },
  descContainer: {
    marginLeft: 15,
  },
  timeContainer: {flexDirection: 'row', justifyContent: 'space-between'},
  flatlistStyle: {
    flex: 1,
    flexGrow: 0,
    minHeight: Dimensions.get('screen').height,
  },
  sectionList: {
    paddingHorizontal: 20,
    paddingRight: 25,
  },
  status: {
    fontWeight: '700',
    fontSize: 15,
    paddingBottom: 5,
  },
});
