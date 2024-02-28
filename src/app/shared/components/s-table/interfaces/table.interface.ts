export interface ITbColumn {
  id: string;
  label: string;
  columnConfig?: {
    type: 'chip';
  };
}

export interface ITbAction {
  iconName: string;
  messageTooltip?: string;
  color?: string;
}
