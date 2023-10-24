export type C_GroupListType<T> = T[];

type TransactionStatus =
  | 'APPROVED'
  | 'DECLINED'
  | 'PENDING'
  | 'CANCELLED'
  | 'IN_REVIEW';

type TransactionOrigin =
  | 'MOBILE_APP'
  | 'WEB_PORTAL'
  | 'IN_PERSON'
  | 'ATM_MACHINE'
  | 'PHONE_CALL';

export type C_GroupItemType = {
  objectType: string;
  status: TransactionStatus;
  objectId: string;
  timestamp: string;
  origin: TransactionOrigin;
  data: C_GroupItemType[];
};

export interface C_GroupListProps {
  list: C_GroupBy[];
  onPress: (data: C_GroupItemType) => void;
}

export interface C_GroupBy {
  data: C_GroupItemType[];
  timestamp: string;
}
