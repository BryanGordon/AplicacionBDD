import React,{ useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../firebaseconfig'

export const Menu = () => {
    const historial = useNavigate()
    const [usuario,setUsuario] = useState(null)

    const CerrarSesion = () => {
        auth.signOut()
        setUsuario(null)
        historial('/')
    }

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if(user) {
                setUsuario(user.email)
                console.log(user.email)
            }
        })
    }, [])

    return(
        <div>
            <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
                <ul className='navbar-nav mr-auto'>
                    <li className='nav-item'>
                        <Link className='nav-link' to="/">Inicio</Link>
                    </li>
                    <li className='nav-item'>
                        {
                            usuario
                            ?
                            (
                               <span></span>
                            )
                            :
                            (
                                <Link className='nav-link' to="/login">Login</Link>
                            )
                        }
                    </li>
                    <li className='nav-item'>
                    {
                            usuario
                            ?
                            (
                               <span></span>
                            )
                            :
                            (
                                <Link className='nav-link' to="/admin">Admin</Link>
                            )
                    }
                    </li>
                </ul>
                {
                    usuario
                    ?
                    (
                        <button className='btn btn-danger'
                            onClick={CerrarSesion}
                        >
                        Cerrar sesion
                        </button>
                    )
                    :
                    (
                        <span></span>
                    )
                }
            </nav>
        </div>
    )
}
