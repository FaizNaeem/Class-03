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
                pic : `https://lh3.googleusercontent.com/pw/ADCreHddIIL5k8lBLyW92DWJ1A31xbHn2XtfTmORBgCE1u8g_0jzxQCvUe9nalKE1FGVaV8vxpLZvLujeaLNuEg_hVjyo8Cvy2I6wnvmP4NX5xLsSaJjzu5Vvs6l6p1B7NcbaOea13VygfKNAGfcCA18qSwQK5Ucv2wITxwqduyUkiZ4ihTuF5Q6mEzpJxPa2wfWdAzASm42_Yhh9X1Ytwv3A5lzEU3j7CwSZOyisiDLK3SngqXXWTtNYsP6gj0e036xYK5m4Bf3wAwd2Gc0RVAQJhKekgykjghFDYmwId-LZL8dMbSZU4R7LzSts2N06yK4zumYcmaVkrUiq5r58Zvz44oNPWARTl0sXSOAZqitP9msfngeQ-rtDtsAoD4x8U1bt7pH1Yv221p4HEtwnSMe-lHM5ATv45GeDTdJ1t4yUl-8UelrgUs1upE3-HoaZQPXfxk1ERkJ5oIQoCsCmvLzLDS76zKQQiAONU7FMezCFrJPnlEqySIJ849OWwyTnSF54tZt1XcZWjPAmrJKEJlQoAcynCtISWYbqIXsnoqstL-sWA9xcIBUtE1PlQ559dPdKDpk-FjnlQCCKKM_GYwWt-Sywr04bOffU8xhO_67YAk2ohxgjtsZgXqj0CGAQnpHGyOFV3ypC8kJBd19hbilC2eA62K815jTB_hlQ_ncXwcTKHkl4EoHlov4j082q8uzHznWZXo-aQjpPpzHGAEw0IA_cRmUXdQ--sZvhX_XOvdgUYPCVR_D_upw1_Hw_dtQ-DLsqtZcRYhN2xyk0eK-y7_2uuzd1Uu5hcG3P5eTNLEIzl3SzbXwLQlZEEjymaIhfcn8M4DclTO9RwP6k7Krm8CnvPBOXKDujIFtGhtJLHYg944nqcm5mBzdlcu6tQxxJILjOB8aMc0ZGsV-zmVCc9TjMsU=s226-no?authuser=0`
            
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