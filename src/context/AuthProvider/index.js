'use client'
import React ,{createContext, useState}from 'react'
 export  const AuthContext = createContext()
 export default function AuthProvider({children}){
    const [user, SetUser] = useState({
        userName:"Faiz",
        Age:18,
        fatherName:"Naeem"
    })
    return(
        <AuthContext.Provider value={{user,SetUser}}>
            {children}
        </AuthContext.Provider >
    )
}