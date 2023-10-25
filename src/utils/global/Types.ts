import {C_GroupItemType} from '../../components/GroupList/types/GroupListType';

export type T_NavigationType = {
  navigate: (screen: string, params?: C_GroupItemType) => void;
  dispatch: (data?: any) => void;
};
