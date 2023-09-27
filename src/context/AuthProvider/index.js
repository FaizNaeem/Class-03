'use client'
import React ,{createContext, useState}from 'react'
 export  const AuthContext = createContext()
 export default function AuthProvider({children}){
    const [user, SetUser] = useState(
        [

            {
                userName:"Faiz",
                Age:18,
                fatherName:"Naeem"
            },
            {
                userName:"Atta",
                Age:17,
                fatherName:"Naeem"
            },
            {
                userName:"Junaid",
                Age:18,
                fatherName:"Salam"
            },
            {
                userName:"Zunair",
                Age:20,
                fatherName:"Ahmed"
            },
            {
                userName:"Bilal",
                Age:26,
                fatherName:"Raza"
            },
            {
                userName:"Taha",
                Age:21,
                fatherName:"Naseem"
            },
            {
                userName:"Hassan",
                Age:25,
                fatherName:"Jahagangir"
            },
            {
                userName:"Mudassir",
                Age:23,
                fatherName:"Saleem"
            },
            {
                userName:"Saad",
                Age:15,
                fatherName:"Saleem"
            },
        ]
            )
    return(
        <AuthContext.Provider value={{user,SetUser}}>
            {children}
        </AuthContext.Provider >
    )
}