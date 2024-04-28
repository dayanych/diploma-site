import { ConfigProvider, message } from 'antd';
import { Outlet } from 'react-router-dom';
import { primaryTheme } from './assets/themes/primary.theme';
import { MessageApiContext } from './common/context/message-api-context';
import { Header } from "./common/components/header";

function App() {
  const [messageApi, messageContainer] = message.useMessage();

  return (
    <ConfigProvider theme={{ token: primaryTheme }}>
      {messageContainer}
      <MessageApiContext.Provider value={messageApi}>
        <Header />
        <Outlet />
      </MessageApiContext.Provider>
    </ConfigProvider>
  )
}

export default App
