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
    <div style={{ backgroundColor:"black"}}  >
        <div className="sticky-top">

        <h1 align="center"  style={{color:"white" , background:"black"}}>Users</h1>
        </div>
      {
        user.map((e,i)=>{
        return (
          <Link key={i} href={`user/${e.id}`} style={{textDecoration:"none"}}>
          <div key={i} className=''  style={{width:"100%" , background:"lightblue",padding:"10px"
        }}>
            
              <h1 className='font-bold' style={{color:"white" ,textDecoration:"none", textAlign:"center", background:"black"}}>{e.id }:{e.userName}</h1>
            
          </div>
          </Link>
        ) 
        })
      }
</div>
    </>
  )
}
