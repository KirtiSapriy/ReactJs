import React from 'react'
import { useState } from 'react'
import { auth, db, provider } from '../../firebaseConfig'
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import Google from '../assets/Google.png'

export default function SignUp() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const navigate = useNavigate()


    const submit = async () => {


        await createUserWithEmailAndPassword(auth, email, pass)
            .then((user) => {
                console.log(user)
                setDoc(doc
                    (db, 'users', user.user.uid), { name, email, pass })

                Swal.fire({
                    icon: 'success',
                    title: 'User Created',
                    text: 'User Created Successfully'
                })
                navigate('/deshborad')


            })
            .catch((err) => {
                Swal.fire({
                    icon: 'error',
                    title: 'error',
                    text: err.message
                })


            })

        setEmail("")
        setName("")
        setPass("")

    }

    const Signin = async () => {
        await signInWithPopup(auth, provider).then((res) => {
            const user = res.user
            console.log(user);

            setDoc(doc
                (db, 'users', user.uid), { name: user.displayName, email: user.email })
            navigate('/deshborad')
        })
    }
    return (
        <div className='h-full  '>
            <div className='h-100  border-2 m-auto w-11/12 lg:w-2/5 grid grid-col-1  gap-3  mt-20 p-7  bg-gary-200 rounded-lg'>

                <h1 className='text-2xl font-semibold text-sky-600'>SignUp</h1>
                <input type="text" className='border-[1.3px] h-9 border-pink-700 rounded px-4 ' onChange={(e) => setName(e.target.value)} placeholder='Enter User Name' id="" />
                <input type="text" className='border-[1.3px] h-9 border-pink-700 rounded px-4 ' onChange={(e) => setEmail(e.target.value)} placeholder='Enter User Email' id="" />
                <input type="password" className='border-[1.2px] h-9 border-pink-700  rounded px-4 ' onChange={(e) => setPass(e.target.value)} placeholder='Enter User Password' id="" />
                <button onClick={submit} className='hover:bg-pink-700 hover:text-white font-semibold border border-pink-700 h-9 rounded w-5/12'>Sign Up</button>
                <div className='grid grid-row-2 gap-2 place-items-center'>
                    <Link className='' to="/signin">Already Account crated ? Sign In</Link>

                    <p className='flex items-center   justify-center w-11/12  gap-2 '> <hr className='border w-6/12  mt-1 border-[#353535]' /><span className='border-gray-600
text-[#454545]'>  or</span> <hr className='border w-6/12 mt-1 border-[#353535]' /></p>
                    <button onClick={Signin} className='text-sky-600 w-full lg:w-7/12 flex items-center justify-center gap-2'><img src={Google} className='w-5' alt="" />Sign in with google</button>

                </div>
            </div>
        </div>
    )
}
