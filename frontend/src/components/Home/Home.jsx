import React, { useEffect, useState } from 'react';
import DeadEyeLogo from '../../assets/Logo/deadeye.png';
import CoinImg from '../../assets/Coin/coin.png';
import { IoStar } from "react-icons/io5";
import axios from 'axios';

const Main = () => {
  const [coins, setCoins] = useState(0);
  const [userInfo, setUserInfo] = useState(null);

  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {

    const initTelegramWebApp = async () => {
      // Mock Telegram object locally
      let tg;
      tg = window.Telegram.WebApp;

      try {
        // Mock user data for local testing
        let user = {
          id: 123456789,
          first_name: 'John',
          last_name: 'Doe',
          username: 'johndoe'
        };

        if (user) {
          console.log("User is found!");
          setUserInfo({
            telegramId: user.id,
            firstName: user.first_name,
            lastName: user.last_name,
            username: user.username
          });
          const response = await axios.post(`${apiUrl}/fetch-user-data`, {
            telegramId: user.id,
            firstName: user.first_name,
            lastName: user.last_name,
            username: user.username
          });
          if (response.data.status === 'success') {
            setCoins(response.data.userData.balance);
          }
        } else {
          console.log("Telegram User not found!");
        }
      } catch (error) {
        console.log("Error fetching user data!");
      }

      tg.ready();
    };

    initTelegramWebApp();
  }, [apiUrl]);

  const handleUpdateBalance = async () => {
    try {
      if (userInfo) {
        const updatedBalance = coins + 1;
        const updateCoinResponse = await axios.post(`${apiUrl}/update-balance`, {
          telegramId: userInfo.telegramId,
          balance: updatedBalance
        });

        if (updateCoinResponse.data.status === 'success') {
          console.log("Coin updated successfully!");
          setCoins(updatedBalance);
        } else {
          console.log("Error updating coins!");
        }
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <>
      {userInfo ? (
        <div className='w-screen h-screen bg-blue-950'>
          {/* Header */}
          <div className='w-screen flex justify-between text-white p-5'>
            {/* Section-I */}
            <div className='flex flex-row justify-start'>
              <div className='w-1/2'>
                <div className="w-10 h-10 flex items-center justify-center text-[13px] rounded-full bg-[#171a46e5] text-white">
                  {userInfo.username?.slice(0, 1)}
                </div>
              </div>
              <span className='flex items-center px-2'>
                {userInfo.username}
              </span>
            </div>
            {/* Section-II */}
            <div className='flex items-center justify-center font-semibold text-xl'>
              Join DeadEye
            </div>
          </div>
          {/* Leader Border */}
          <div className='p-1 bg-blue-600 rounded-2xl flex justify-center w-2/5 text-white m-auto items-center'>
            <IoStar className='mx-1 text-yellow-300' /> Leaderboard
          </div>
          {/* Refill energy */}
          <div className='border-2 text-white w-4/5 mx-auto text-center my-10 rounded-3xl p-2'>
            500/500
          </div>
          {/* Bot */}
          <div className='mx-10'>
            <button onClick={handleUpdateBalance}>
              <img src={DeadEyeLogo} alt="Icon" className='bg-t' />
            </button>
          </div>
          <div className='flex items-center justify-center w-4/5 m-auto text-center text-white font-semibold text-3xl'>
            <img src={CoinImg} alt="Coins" className='w-16' />
            <span>{coins}</span>
          </div>
        </div>
      ) : (
        <p> Not found !</p>
      )}
    </>
  );
};

export default Main;
