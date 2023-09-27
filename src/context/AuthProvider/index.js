'use client'
import React ,{createContext, useState}from 'react'
 export  const AuthContext = createContext()
 export default function AuthProvider({children}){
    const [user, SetUser] = useState(
        [

            {  id :1,
                userName:"Faiz",
                Age:18,
                fatherName:"Naeem"
            },
            {
                id:2,
                userName:"Atta",
                Age:17,
                fatherName:"Naeem"
            },
            {   id : 3,
                userName:"Junaid",
                Age:18,
                fatherName:"Salam"
            },
            {
                id : 4,
                userName:"Zunair",
                Age:20,
                fatherName:"Ahmed"
            },
            {
                id : 5,
                userName:"Bilal",
                Age:26,
                fatherName:"Raza"
            },
            {  
                id : 6,
                userName:"Taha",
                Age:21,
                fatherName:"Naseem"
            },
            {
                id : 7,
                userName:"Hassan",
                Age:25,
                fatherName:"Jahagangir"
            },

            {
                id : 8,
                userName:"Mudassir",
                Age:23,
                fatherName:"Saleem"
            },
            {  id : 9,
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