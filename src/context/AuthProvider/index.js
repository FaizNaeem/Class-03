'use client'
import React ,{createContext, useState}from 'react'
 export  const AuthContext = createContext()
 export default function AuthProvider({children}){
    const [user, SetUser] = useState(
        [

            {  id :0,
                userName:"Faiz",
                Age:18,
                fatherName:"Naeem"
            },
            {
                id:1,
                userName:"Atta",
                Age:17,
                fatherName:"Naeem"
            },
            {   id : 2,
                userName:"Junaid",
                Age:18,
                fatherName:"Salam"
            },
            {
                id : 3,
                userName:"Zunair",
                Age:20,
                fatherName:"Ahmed"
            },
            {
                id : 4,
                userName:"Bilal",
                Age:26,
                fatherName:"Raza"
            },
            {  
                id : 5,
                userName:"Taha",
                Age:21,
                fatherName:"Naseem"
            },
            {
                id : 6,
                userName:"Hassan",
                Age:25,
                fatherName:"Jahagangir"
            },

            {
                id : 7,
                userName:"Mudassir",
                Age:23,
                fatherName:"Saleem"
            },
            {  id : 8,
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