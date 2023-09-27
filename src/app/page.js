'use client'
// import { useContext } from "react";
// import ThemProvider, { ThemeContext } from "@/context/ThemProvider"
// import { AuthContext } from "@/context/AuthProvider";
import Link from "next/link"
import Users from "./user/page"
export default function Home() {
  // let {theme} = useContext(ThemeContext)
  // let {user} = useContext(AuthContext)
  // console.log(theme);
  // console.log(user);
  return (
    <>
    <div className="flex justify-center  items-center w-full">

    <button className="">
      <Link href={'/user'}>
      Hello
      </Link>
      
      </button>
    </div>
      
  {/* <Users/> */}
    </>
  )
}
