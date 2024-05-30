
// pages/User.jsx
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userProfile } from '.././redux/slices/userProfile';
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
      dispatch(userProfile(token));
    } else {
      navigate('/login');
    }
  }, [dispatch, navigate]);

  return (
    <div>
      <Header />
<EditName />
      <Account
        
        //  amount={dataAccount.amount}
        //  title={dataAccount.title}
        //  description={dataAccount.description} 
        />
      <Footer />
    </div>
  );
};

export default User;