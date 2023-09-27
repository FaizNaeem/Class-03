'use client'
import { useContext } from "react";
import Link from "next/link"

import ThemProvider, { ThemeContext } from "@/context/ThemProvider"
import { AuthContext } from "@/context/AuthProvider";
export default function Users() {
  let {theme} = useContext(ThemeContext)
  let {user} = useContext(AuthContext)
  console.log(theme);
  console.log(user);
  return (
    <>
    <div >
      {
        user.map((e,i)=>{
        return (
          <Link key={i} href={`user/${e.id}`}>
          <div key={i} className='' style={{width:"100%" , padding:"5px", background:"slate"
        }}>
            
              <h1 className='font-bold '>{e.userName}</h1>
               <p>{e.fatherName}</p>
          </div>
          </Link>
        ) 
        })
      }
</div>
    </>
  )
}
