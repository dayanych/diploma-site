import { createContext } from 'react';
import { MessageInstance } from 'antd/es/message/interface';

export const MessageApiContext = createContext<null | MessageInstance>(null);
