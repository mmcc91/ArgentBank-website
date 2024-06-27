// pages/User.jsx
import React, { useEffect, useState } from "react"; // Combine useState import
import { useSelector, useDispatch } from "react-redux";
import Header from "../components/header/header";
import Account from "../components/account/account";
import Footer from "../components/footer/footer";
import EditName from "../components/editName/editName";
import { useNavigate } from "react-router-dom";
import { getUserToken } from "../redux/slices/userSlice";
import dataAccount from "../Data/dataAccount.json";
// import "../components/account/account.scss";

const User = () => {
  const dispatch = useDispatch();
  const userToken = useSelector((state) => state.user.userToken);
  const navigate = useNavigate();

  const userProfil = useSelector((state) => state.user.userProfil);

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      dispatch(getUserToken(token));
    } else {
      navigate("/login");
    }
  }, [dispatch, navigate]);

  return (
    <div>
      <Header />
      <main className="main bg-dark2">
        <div className="header">
          <h1>
            Welcome back, <br />
            {userProfil ? userProfil.userName : "User"} !
          </h1>
          <EditName />
        </div>
        <h2 className="sr-only">Accounts</h2>
        {dataAccount.map(
          (
            account,
            index 
          ) => (
            <Account
              key={"account" + index} 
              title={account.title}
              amount={account.amount}
              description={account.description}
            />
          )
        )}
      </main>
      <Footer />
    </div>
  );
};

export default User;
