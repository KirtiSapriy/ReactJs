import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { data, Link, useNavigate } from 'react-router-dom'
import { auth } from '../../firebaseConfig'
import Swal from 'sweetalert2'


export default function Signin() {
  const [Email, setEmail] = useState("")
  const [Pass, setPass] = useState("")
  const navigate = useNavigate()

  const submit = async () => {
    await signInWithEmailAndPassword(auth, Email, Pass)
      .then((user) => {
        Swal.fire({
          icon: 'success',
          title: 'User SignIn',
          text: 'Uset SignIn Successfully'
        })
        navigate('/Deshborad')

      }).catch((err) => {
        Swal.fire({
          icon: 'error',
          title: 'error',
          text: err.message
        })


      })
  }

  return (

    <div className='h-full  '>
      <div className='h-100  border-2 m-auto w-11/12 lg:w-2/5 grid grid-col-1  gap-3  mt-20 p-7  bg-gary-200 rounded-lg'>
        <h1 className='text-2xl font-semibold text-sky-600'>SignIn</h1>
        <input type="text" className='border-[1.3px] h-9 border-pink-700 rounded px-4 ' onChange={(e) => setEmail(e.target.value)} placeholder='Enter User Email' id="" />
        <input type="password" className='border-[1.2px] h-9 border-pink-700  rounded px-4 ' onChange={(e) => setPass(e.target.value)} placeholder='Enter User Password' id="" />
        <button onClick={submit} className='hover:bg-pink-700 hover:text-white font-semibold border border-pink-700 h-9 rounded w-5/12'>Sign In</button>

        <Link className='text-sky-600' to="/">You have new in web ? Sign up</Link>
      </div>
    </div>


  )
}
