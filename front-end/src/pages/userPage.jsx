
// pages/User.jsx
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { userProfile } from '../redux/slices/userProfile';
import Header from '../components/header/header';
import Account from '../components/account/account';
import Footer from '../components/footer/footer';
import EditName from '../components/editName/editName';
import { useNavigate } from 'react-router-dom';
import { getUserToken } from '../redux/slices/userSlice';
import dataAccount from '../Data/dataAccount.json';

const User = () => {
  const dispatch = useDispatch();
  const userToken = useSelector((state) => state.user.userToken);
  const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      dispatch(getUserToken(token));
    } else {
      navigate('/login');
    }
  }, [dispatch, navigate]);

  return (
    <div>
      <Header />

<main className="main bg-dark2">
      <div className="header">
      
      <EditName />
      </div>
      <h2 className="sr-only">Accounts</h2>
      {dataAccount.map((dataAccount, index) => (
          <Account
          key={"dataAccount"+index}
          title={dataAccount.title}
          amount={dataAccount.amount}
          description={dataAccount.description}         
          />
         ))} 
    </main>
      <Footer />
    </div>
  );
};

export default User;