const Connexion = () => {
    return (
     
        <div className="connexion">
               <h1> Faut titre ici </h1>
            <h2>Connexion</h2>
            <form>
                <label htmlFor="email">Adresse email</label>
                <input type="email" id="email" name="email" required />
                <label htmlFor="password">Mot de passe</label>
                <input type="password" id="password" name="password" required />
                <button type="submit">Se connecter</button>
            </form>
        </div>
    )
}
export default Connexion;