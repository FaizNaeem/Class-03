'use client'
import React ,{createContext, useState}from 'react'
 export  const AuthContext = createContext()
 export default function AuthProvider({children}){
    const [user, SetUser] = useState(
     
        [

            {  id :0,
                userName:"Faiz",
                Age:18,
                fatherName:"Naeem",
                pic : 'https://scontent.fkhi2-3.fna.fbcdn.net/v/t39.30808-6/361635432_823063992551612_1235252322457558990_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a2f6c7&_nc_eui2=AeHrWknCJSW5or1bMq0C4ZV90NdPVuWgC_LQ109W5aAL8gpnvjSiFP-fu-iQ1cNOin6ncvmmeMGhAo5P3Pv4xBOQ&_nc_ohc=1TFx99-gBcwAX8FEszi&_nc_oc=AQnt6-Xsn4IKq8uQjHc-xNXRE-o-gfRgxgXeNO9KqeZx-sYBA8VD4adIelhDiDhsTYQ&_nc_ht=scontent.fkhi2-3.fna&oh=00_AfBgt_s4zQoVHQrjPdB1wGQOj6UGOopBcBcp0vxLu5mzVg&oe=6519198A'
            
            },
            {
                id:1,
                userName:"Atta",
                Age:17,
                fatherName:"Naseem",
                 pic:"https://scontent.fkhi22-1.fna.fbcdn.net/v/t39.30808-6/355701841_1308847643394480_6772937578471435878_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a2f6c7&_nc_eui2=AeGEoVuQ1IerE9ARHovkvkaxVxXx7eAcD2ZXFfHt4BwPZur6SKbgiT4L2XcrvzMI_nMkuqowJvGta6uAYdzO_D4q&_nc_ohc=O27zzfT-ZRoAX_-TiPN&_nc_ht=scontent.fkhi22-1.fna&oh=00_AfA5gXCmyOfZwuJiwda61uC-03IDw4rnkhJHmuHs8HMkFw&oe=651B2143"
            },
            {   id : 2,
                userName:"Junaid",
                Age:18,
                fatherName:"Salam",
                pic:"https://lh3.googleusercontent.com/a-/ALV-UjVYb8o-DCgV0ORRsDiUyALdXhulQqsfKu-ovKXIUUVNdQ=s48-p"
            },
            {
                id : 3,
                userName:"Owais",
                Age:20,
                fatherName:"Ahmed",
                pic:"https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGljfGVufDB8fDB8fHww&w=1000&q=80"

            
            },
            {
                id : 4,
                userName:"Bilal",
                Age:26,
                fatherName:"Raza",
                pic:"https://scontent.fkhi2-2.fna.fbcdn.net/v/t39.30808-1/379362270_1721126238362638_7898764978859758049_n.jpg?stp=c0.0.200.200a_dst-jpg_p200x200&_nc_cat=103&ccb=1-7&_nc_sid=fe8171&_nc_eui2=AeFd6eirFuZCvyRxlQ6A_DPPaY1g50wjNwNpjWDnTCM3A4LbN7GD7p2GmrH4k3Sa2pWpd-yV6sKMgfeJWUTVlWAf&_nc_ohc=F6qRU8QPkk0AX_cuCK3&_nc_ht=scontent.fkhi2-2.fna&oh=00_AfDlym4N5ED7cTdWjZwwNlf26D754A3F78E9bvqg4E5HVQ&oe=651A3597"
            },
            {  
                id : 5,
                userName:"Taha",
                Age:21,
                fatherName:"Naseem",
                pic:"https://scontent.fkhi2-2.fna.fbcdn.net/v/t1.6435-9/119021327_811275779680584_8282908922030896039_n.jpg?stp=dst-jpg_p640x640&_nc_cat=105&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeHFsCPKPstWlv9cDw5xGeH9j7nuk3dXRqKPue6Td1dGoiC2F7JjEcKa2fAZ9EMGFJ6jnFoHVi82U-Q-Swy_mj_q&_nc_ohc=wCUa3r316wsAX-QwknE&_nc_ht=scontent.fkhi2-2.fna&oh=00_AfBl6aYm8vRoBZcLjK5N84eEWw4oR-d_6YuET2vb7huCUg&oe=653BB078"
            },
            {
                id : 6,
                userName:"Hassan",
                Age:25,
                fatherName:"Jahagangir",
                pic:"https://scontent.fkhi2-3.fna.fbcdn.net/v/t39.30808-1/319554547_3301718533426738_4833185580359285485_n.jpg?stp=dst-jpg_s200x200&_nc_cat=102&ccb=1-7&_nc_sid=fe8171&_nc_eui2=AeE5XozXWnjaCB6aPgmLEvAi3ZBAAtEmyBndkEAC0SbIGRXXYQrfWNf3VZYBy6as2ZNW8rOuxjXor2SwE3_1m5i2&_nc_ohc=Jvr4cLQg0kYAX-TFrLM&_nc_ht=scontent.fkhi2-3.fna&oh=00_AfDGIyzK-y8Zhs56qU2lLoPs7awuwaHrR9KtzpLatcczCA&oe=65192B3F"
            },

            {
                id : 7,
                userName:"Mudassir",
                Age:23,
                fatherName:"Saleem",
                pic:"https://scontent.fkhi2-2.fna.fbcdn.net/v/t39.30808-1/323417754_1326236668168009_6089009793963552590_n.jpg?stp=dst-jpg_s200x200&_nc_cat=103&ccb=1-7&_nc_sid=fe8171&_nc_eui2=AeF5zJmukMBg7jhfNlR9d_FtiRxgXADNHd-JHGBcAM0d38pKMSrJ1KTkMZqYM9YP903x91PqMX6T_30bn3U3fS8f&_nc_ohc=opynQ8ZdqPQAX93D8Fm&_nc_ht=scontent.fkhi2-2.fna&oh=00_AfDgskNA_r7p-iWKOV9QIP7WyQP7pNpY0QiNo3uSuNoqXw&oe=65191D5C"
            },
            {  id : 8,
                userName:"Saad",
                Age:15,
                fatherName:"Saleem",
                pic:"https://scontent.fkhi2-3.fna.fbcdn.net/v/t39.30808-6/325608897_1261834247701075_8123293539281582102_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=1b51e3&_nc_eui2=AeF_rEK2J6mIAHKCaLNg-n4bkQISADbO_iWRAhIANs7-JaQi1p9Wa6g85k6_GkwLUF2Bqb3eFa579LHCvvcOJFqB&_nc_ohc=kF62I_MCg0gAX9wp8Xq&_nc_ht=scontent.fkhi2-3.fna&oh=00_AfDh1bpNnFMUcfuW2AcmYBJGR78o_t9fJaxyXWvs6RU3ew&oe=65195393"
            },
        ]
            )
    return(
        <AuthContext.Provider value={{user,SetUser}}>
            {children}
        </AuthContext.Provider >
    )
}