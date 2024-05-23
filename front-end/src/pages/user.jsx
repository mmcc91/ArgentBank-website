import React from "react";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import Account from "../components/account/account";
import accountsData from "../Data/dataAccount.json";


const User = () => {
  return (
    <div>
      <Header />
      <main className="main bg-dark">
        {accountsData.map((account) => (
          <Account
            key={account.id}
            title={account.title}
            type={account.type}
            accountnumber={account.accountnumber}
            amount={account.amount}
            description={account.description}
          />
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default User;