import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from '../../firebaseConfig'
import { Link, useNavigate } from 'react-router-dom'
import { doc, setDoc } from 'firebase/firestore'

export default function Signup() {

    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const submit = async () => {

        await createUserWithEmailAndPassword(auth, email, password).then((user) => {
            setDoc(doc(db, 'users', user.user.uid), { name, email })
            alert("user Created")
            navigate('/dashboard')
        }).catch(er => {
            console.log(er);
            
        })

    }


    return (
        <div>
            <h1>Signup</h1>

            <input type="text" onChange={(e) => setName(e.target.value)} placeholder='enter name' />
            <input type="text" onChange={(e) => setEmail(e.target.value)} placeholder='enter Email' />
            <input type="text" onChange={(e) => setPassword(e.target.value)} placeholder='enter Password' />
            <button onClick={submit}>submit</button>
            <br />
            <Link to={'/signin'} >You have Alredy User ? Signin</Link >
        </div >
    )
}
