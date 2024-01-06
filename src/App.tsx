import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Routes, HashRouter } from 'react-router-dom';
import Home from './pages/Home/Home';
import Map from './pages/Map/Map';
import SendPage from './pages/SendPage/SendPage';
import GetPage from './pages/GetPage/GetPage';
import WriteOff from './pages/WriteOff/WriteOff';
import Exchange from './pages/Exchange/Exchange';
import { ICoin } from './Interfaces';
import useTelegram from './hooks/useTelegram';
import CreateUser from './api/CreateUser';
import { ConfigProvider, theme } from 'antd';
import { useThemeParams } from '@vkruglikov/react-telegram-web-app';

const App = () => {
  const {tg, user, ready} = useTelegram();

  const [isLogin, setIsLogin] = useState<boolean>(false)
  const [colorScheme, themeParams] = useThemeParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const createUserResponse = await CreateUser(968615914);

        if (createUserResponse.status === 200 || createUserResponse.status === 201) {
          setIsLogin(true);
          ready()
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {isLogin ? (
        <ConfigProvider
        theme={
          themeParams.text_color
            ? {
                algorithm:
                  colorScheme === 'dark'
                    ? theme.darkAlgorithm
                    : theme.defaultAlgorithm,
                token: {
                  colorText: themeParams.text_color,
                  colorPrimary: themeParams.button_color,
                  colorBgBase: themeParams.bg_color,
                },
              }
            : undefined
        }>
        <Router>
          <Routes>
            <Route path="/Piligrim/" element={<Home/>}/>
            <Route path='/map' element={<Map/>}/>
            <Route path='/send' element={<SendPage/>}/>
            <Route path='/get' element={<GetPage/>}/>
            <Route path='/writeoff' element={<WriteOff/>}/>
            <Route path='/exchange' element={<Exchange/>}/>
          </Routes>
        </Router>
      </ConfigProvider>
      ) : (
        <div>Загрузка</div>
      )}
    </>
  );
}

export default App;