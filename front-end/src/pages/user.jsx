import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import Account from "../components/account/account";
import accountsData from "../Data/dataAccount.json";
import { userProfile} from '../redux/slices/user'; 
const User = () => {

  return (
    <div>
      <Header />
      <Account  />
console.log(accountsData)
console.log(userProfile)
  
               
      <Footer />
    </div>
  );
};

export default User;