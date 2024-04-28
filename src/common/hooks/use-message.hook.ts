import { useContext } from 'react';
import { MessageApiContext } from '../context/message-api-context';

export function useMessage() {
  const message = useContext(MessageApiContext);
  if (!message) {
    throw new Error('Message context is not provided');
  }

  return message;
}
