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
                pic:"https://lh3.googleusercontent.com/pw/ADCreHdEnHPaPmtPS0zDWQokShhbiooa7jf47UdrrVLDnef6p3DxvTmpreFS1dGqH1XQauh_IyBUg69SZLlHhbP5P0n6k0yvRpr6oipahBw3yZ6-_naQ1fea-Ia7QwOxFVruVCW2y3aWeGivN9g5zEvIDfXNWjPaFnrd0FU939kMbkyKXUdxTYYWfBvyd-YquYAdeOzkBlhdsn34jjEcg9z-nUXdu5iy9RHiRruBFYMeSu86ZkWCn-FxLVNxqoCTNf0C7ExCrM65LzV61pI4eWlflWSLHLBq_QzaYcaZqoVfjW1fSBMJJqA1JAoSr4qLgKOn4KDtANpbA0h-YJ0SHPTXpq4F5jTdunt5Ak9JmhCXj2T7afGjbVJKsxjO7BsGXz78dcCFMZ_0YJIrhNTiTqsKtVi-X_h5w_veeikZhdtXntnTgRRfaVol_C67vaDRMtJwXcdm-cfiEGfyBK5FDRSYKaZAZSA_T26LUcX-kL5UFHfkGrl2CjvZkR7nNylD_9KuF2HATRJlxvxXemREEHxXpFp6DfM3Dh5UK4SO-PMUpVWRmQovgSKGREZaFHUbR1bm3YyaJhSD20ceVaPNeRbCgnToJ2YyXt4rFyzMmcnnTPY7jn7L94b4t1pgZ_-ZEDbMzB-5HG1oYD5l0nSsmi9hZmdI7mPrPUkjixcFraxC2hJoMaR0yM9QN8SVRhDcNUEDt8WlnllgYxjmMDXD7JT_EyogB_4WRVoC1oBx3ZCqcCwPqQtjHv2ux9XAtj4oGKJVF76fkswNLXDNebTLEYo0ur9jRq2h00iLMp_BuqzrugQVzv-t6pml6dN9t2YFhWu9jZzML1r4DTpQjd1TSxFB-N9i4e5jrl2k39z6kP_eFRgEf52bISwQl4yucdac1bqNuiFqZPWDSYfGhpOvtPPWID_cOM4=w663-h661-s-no?authuser=0"
            },
            {   id : 2,
                userName:"Junaid",
                Age:18,
                fatherName:"Salam",
                pic:"https://lh3.googleusercontent.com/a-/ALV-UjXaYS2OKCcMXTXU_aqtNBgCJ5tXFBMwPLeFMMEleTymig=s272-p-k-rw-no"
            },
            {
                id : 3,
                userName:"Owais",
                Age:20,
                fatherName:"Ahmed",
                pic:"https://lh3.googleusercontent.com/pw/ADCreHcn7xc2wTNA88uLAjvfNqibuUmaOAQqa3TaxxMdjdmzjePiLfU4UARjQ_6IpO4MK5b-meI-AuyeOp-jSHjcvbV6veegTLI9b4tGTCZF5LL86lqOeTxfK_Hs06-tKXxQR3pqc0T0uGzjwibpHmTOycYeP48yLaOyYQeFDXGeuhHKaXSdy06uylTyWHb66pBVhh6DmCTBTV1jZB5F0FaQQysPnqdP6tE8KnekDRydaEYVArZO4oEGmLQGFBwZF0bLR_tdaG7miEoWR14czKZ_QR1RTb6MfkC1MoxjgBiulfAfL16qI2YchK7v4pHFt5BQS609-KF2d4UIWJhVS2X8ail4dTO6DheBN24UfGPLXCe9eCT6Oszu1fCgkou5irdgkmmWNw_cTeAKiJqL_HyznWZSig9ABbnmuSzGZ65YHT51s4y11VtfD-AiIghYgEnL0IPZtTKrHTDuHDe3GlU6pMUAxhZPkiMWcDsWSj2sQlW0EXIXb7rdAhVEfAeRE8kd4TQMpMQKBBnevzYIPzqF2ref_2lUdPslyz1JtODYIJkRAqjFd5_1ZzkP4UWsQnf6CdgxYJA4Q-oxtBHN-WBy-V2K5A0uyf5Soy08C3AdTnzdD3W0HR80orPmjH6hJDo0AfsrPHnwRcvUOA1hmX9PQvIFuq925QpQSZ9yx_u6Ybo_JqFRoq3rDYWHoEGZcueYaxBMhmfz1C0Y30JQ4IpH0aMPtnC0WSoUiI54OXKgGsbwD2JT-r1RPTlRwpQosOkDJRl7tp5fX_rF782ZSQ7cfLm1RDLc7RV74vupMJ4JHpD7qR3kjtCqxsOU6p-pwZb69bux4T-LtT3nURsKEIceFf0I1T6OA1ma-iSRGhr6rC0-F9mBk5zPkagGtiYt2NgUl0ig-uwq5WIzWn4lT1H4kmJ1-gQ=w136-h181-no?authuser=0"

            
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