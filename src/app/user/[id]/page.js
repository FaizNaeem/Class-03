'use client'
import { useContext } from "react";
import ThemProvider, { ThemeContext } from "@/context/ThemProvider"
import { AuthContext } from "@/context/AuthProvider";
import Link from "next/link"

export default async function Details({params}) {
  let {theme} = useContext(ThemeContext)
  let {user} = useContext(AuthContext)
// let hello = 
// let [hi] =  await Promise.all([user])

//   // console.log(theme);
//   console.log(hi[0].userName);
const Id = params.id;

const userData = user[Id];
console.log(userData);

  return (
    <>
    <div className="flex justify-center  items-center w-full">

 
    </div>
      
  {/* <Users/> */}
    </>
  )
}
