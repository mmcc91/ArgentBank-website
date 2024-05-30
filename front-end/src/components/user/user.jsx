const User = () => {
  const username = useSelector(state => state?.login?.userProfil?.userName || null);
  const userToken = useSelector(state => state?.login?.userToken || null);
  const navigate = useNavigate();

  const [userAccounts, setUserAccounts] = useState([]);

  useEffect(() => {
    if (username) {
      const accounts = Accounts.filter(account => account.username === username);
      setUserAccounts(accounts);
    }
  }, [username]);

  const handleDisplayEdit = (e) => {
    e.preventDefault();
    navigate("/editUser");
  };

  return (
    <main className="main bg-dark2">
      <div className="header">
        
        <h1>Welcome back, {username}</h1>
        {userAccounts.map((account, index) => (
          <Account 
            key={index} 
            title={account.title} 
            amount={account.amount} 
            description={account.description} 
          />
        ))}
        <Button onClick={handleDisplayEdit}>Edit User</Button>
      </div>
    </main>
  );
};

export default User;