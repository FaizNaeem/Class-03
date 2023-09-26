'use client'
import { useContext } from "react";
import ThemProvider, { ThemeContext } from "@/context/ThemProvider"
import { AuthContext } from "@/context/AuthProvider";
export default function Home() {
  let {theme} = useContext(ThemeContext)
  let {user} = useContext(AuthContext)
  console.log(user.userName);
  return (
    <>
      <h1 className='font-semibold text-3xl text-center bg-slate-500' style={{color:theme}}>My Name is {user.userName}
      <hr />
      {/* {
        theme==="light"? alert("yes color is light"): alert("no")
      } */}
      MY Father Name is : {user.fatherName}:
      <hr />
      MY Age is : {user.Age}</h1>

    </>
  )
}
