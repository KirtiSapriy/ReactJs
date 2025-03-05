import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../firebaseConfig'

export default function SignIn() {

    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const submit = async () => {

        await signInWithEmailAndPassword(auth, email, password).then((user) => {
            console.log(user);
            alert("user SignIn")
            navigate('/dashboard')
        }).catch(er => {
            if (er.code == ('auth/nvalid-email')) {
                alert("Invalid Email")
            }
            else {
                alert("all")
            }
        })

    }

    return (
        <div>
            <h1>SignIn</h1>
            <input type="text" onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email' />
            <input type="text" onChange={(e) => setPassword(e.target.value)} placeholder='Enter Password' />
            <button onClick={submit}>SignIn</button>
            <Link to='/'>you Are new in website ? signUp</Link>
        </div>
    )
}
