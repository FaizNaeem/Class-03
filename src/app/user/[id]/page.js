'use client'
import { useContext } from "react";
import ThemProvider, { ThemeContext } from "@/context/ThemProvider"
import { AuthContext } from "@/context/AuthProvider";
import './detail.css'
import Link from "next/link"
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';



export default  function Details({params}) {
    
  let {theme} = useContext(ThemeContext)
  let {user} = useContext(AuthContext)
// let hello = 
// let [hi] =  await Promise.all([user])

//   // console.log(theme);
//   console.log(hi[0].userName);
// setTimeout(()=>{

    const Id = params.id;
    // setTimeout
    const userData =  user[Id];
    console.log(userData);
// },5000)

  return (
    <>
        
    <div className="hl">
    <div className="card" style={{width: "20rem;" }}>
       
  <img src={`${userData.pic}`}  style={{width:"20rem"}} class="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 class="card-title">Name: {userData.userName}</h5>
    <p class="card-text"> Father :-- {userData.fatherName}</p>
    <h5 class="card-title">Age: {userData.Age}</h5>
    <a href="#" class="btn btn-success">Hello everyOne</a>
  </div>
</div>
 
    </div>
      
  {/* <Users/> */}
    </>
  )
}
