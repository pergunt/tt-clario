export interface ValidationMessagesProps {
  error: string;
  name: string;
  inputValue: string;
}

export interface ValidationMessagesItemProps
  extends Pick<ValidationMessagesProps, 'inputValue'> {
  children: string;
  error: boolean;
}
