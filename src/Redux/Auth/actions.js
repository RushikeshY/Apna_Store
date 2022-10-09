import axios from "axios";
// import { Navigate } from "react-router-dom";


export const LOGIN_SUCCESS = "LOGIN_SUCCESS" ;
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS" ;
export const REGISTER_SUCCESS = "REGISTER_SUCCESS"

export const login =(data)=>({
    type: LOGIN_SUCCESS,
    payload: data
})

export const logout =()=>({

    type: LOGOUT_SUCCESS,
    payload:null 
})

export const register =(data)=>({

    type: REGISTER_SUCCESS,
    payload:data 
})


export const fetchData =(dispatch,loginData)=>{

    console.log(loginData)

    return  axios.post('https://masai-api-mocker.herokuapp.com/auth/login',loginData)
    .then((res)=>{
        const isAuthAction = login(res.data)
        console.log(res.data)
        dispatch(isAuthAction)
        alert("Login Successful...!!")
        // navigate('/')
       
    })
    .catch((e)=>{
        console.log(e) ;
        // alert("wrong credential...")
    })
}

export const registerData =(dispatch,userData)=>{

    axios.post('https://masai-api-mocker.herokuapp.com/auth/register',userData)
    .then((res)=>{
        console.log(res.data.error)
        if(res.data.error)
        {
            alert("User Already Register...!!")
            // navigate('/')
        }
        else{
              const isRegistered = register(res.data)
              dispatch(isRegistered)
              alert("Registration Successful...!!")
            // navigate('/')
        }
        //  navigate('/')
    })
    .catch((e)=>{
        console.log(e)
        // alert("")
    })
}

