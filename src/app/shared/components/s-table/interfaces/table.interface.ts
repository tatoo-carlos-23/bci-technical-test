export interface ITbColumn {
  id: string;
  label: string;
  columnConfig?: {
    type: 'chip';
  };
}

export interface ITbAction {
  iconName: string;
  name: string;
  messageTooltip?: string;
  color?: string;
}


export interface ITbChangeAction<T = any> {
  row: T;
  index: number;
  actionName: string;
}