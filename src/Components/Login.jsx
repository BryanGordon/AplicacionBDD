import React,{useEffect,useState} from "react";
import { auth } from "../firebaseconfig";
import {useNavigate} from 'react-router-dom'

export const Login=()=>{

    const [email, setEmail]=useState('')
    const [password, setpassword]=useState('')
    const [msgerror,setMsgerror]=useState(null)
    const historial= useNavigate()

    const registrarUsuario=(e)=>{
        e.preventDefault()
        auth.createUserWithEmailAndPassword(email,password)
            
        .then(r=>{
            historial('/')
        })
        .catch(e=>{
             //'auth/invalid-email'//
             if(e.code==='auth/invalid-email'){
                setMsgerror('El email es incorrecto.')
             }
            //'auth/weak-password'//
            if(e.code==='auth/weak-password'){
                setMsgerror('La contraseña debe tener 6 caracteres o mas.')
            }
        })
           
    }

    const LoginUsuario=()=>{
        auth.signInWithEmailAndPassword(email,password)
        .then((r)=>{
            historial('/')
        })
        .catch((err)=>{
            //'auth/wrong-password'//
            if(err.code==='auth/wrong-password'){
                setMsgerror('La contraseña no es correcta')
            }
            console.log(err)
        })
    }

    return(
        <div className='row mt-5'>
            <div className='col'></div>
            <div className='col'>
                <form onSubmit={registrarUsuario} className='form-group'>
                    <input
                        onChange={(e)=>{setEmail(e.target.value)}}
                        className='form-control'
                        placeholder="Introduce el correo"
                        type="email"
                    />
                    <input
                        onChange={(e)=>{setpassword(e.target.value)}}
                        className='form-control mt-4'
                        placeholder="Introduce la contraseña"
                        type="password"
                    />
                    <input
                        className='btn btn-dark btn-block mt-4'
                        value="Registrar Usuario"
                        type="submit"
                    />
                </form>
                <button className="btn btn-success btn-block"
                    onClick={LoginUsuario}
                >
                    Iniciar sesion
                </button>
                {
                    msgerror !=null?
                    (
                     <di>
                        {msgerror}
                     </di>
                    )
                    :
                    (
                     <span>

                     </span>
                    )
                }               
            </div>
            <div className='col'></div>
        </div>
    );
}