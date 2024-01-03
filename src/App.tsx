import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Routes, HashRouter } from 'react-router-dom';
import Home from './pages/Home/Home';
import Map from './pages/Map/Map';
import { ICoin } from './Interfaces';
import useTelegram from './hooks/useTelegram';
import CreateUser from './api/CreateUser';
import GetUserData from './api/GetUserData';

const App = () => {
  const {tg, user, ready} = useTelegram();

  const [isLogin, setIsLogin] = useState<boolean>(false)
  const [coins, setCoins] = useState<ICoin[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const createUserResponse = await CreateUser(968615914);

        if (createUserResponse.status === 200 || createUserResponse.status === 201) {
          const getUserDataResponse = await GetUserData(968615914);
          const userData = getUserDataResponse.data;

          setIsLogin(true);
          let arr = userData.data.coins
          setCoins([...arr]);
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
      <Router>
        <Routes>
          <Route path="*" element={<Home coins={coins}/>}/>
          <Route path='/map' element={<Map/>}/>
        </Routes>
      </Router>
      ) : (
        <div>Загрузка</div>
      )}
    </>
  );
}

export default App;