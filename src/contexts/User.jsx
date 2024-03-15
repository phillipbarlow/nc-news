import {createContext, useState} from 'react';

export const UserContext = createContext();

export const LoggedInProvidor = ({children}) =>{
    const [loggedInUser, setLoggedInUser] = useState({
        username:'tickle122',
        avatar_url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fgrumpy&psig=AOvVaw2p6inP2Sxial9k138copFG&ust=1710512750767000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCMCimdr684QDFQAAAAAdAAAAABAE"
      })
      return (
        <UserContext.Provider value={{loggedInUser, setLoggedInUser}}>{children} </UserContext.Provider>
      )
}