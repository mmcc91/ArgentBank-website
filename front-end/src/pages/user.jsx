import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import Account from "../components/account/account";
import accountsData from "../Data/dataAccount.json";
import { userProfile} from '../redux/slices/user'; 
const User = () => {
    // Récupération du token pour savoir si l'utilisateur est connecté
    const token = useSelector((state) => state.auth.token);
    const dispatch = useDispatch();

    useEffect(() => {
        if (token) {
            const userData = async () => {
                try {
                    const response = await fetch('http://localhost:3001/api/v1/user/profile', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${token}`,
                        },
                    });
                    if (response.ok) {
                        const data = await response.json();

                        // Dispatch de l'action userProfile pour stocker les données de l'utilisateur dans le store Redux
                        dispatch(userProfile(data.body));

                    } else {
                        console.log("error while retrieving profile");
                    }
                } catch (error) {
                    console.error(error);
                };
            };
            userData();
        }
    }, [dispatch, token]);

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