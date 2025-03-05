import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { auth, db } from '../../firebaseConfig'
import { doc, getDoc } from 'firebase/firestore'

export default function Deshborad() {

    const [uid, setUid] = useState('')
    const [data, setData] = useState([])

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {

            if (user) {
                setUid(user.uid)
            }
        })
    }, [])

    useEffect(() => {
        if (uid) {
            getData()
        }
    }, [uid])

    const getData = async () => {

        await getDoc(doc(db, 'users', uid)).then((user) => {
            console.log(user.data());
            setData(user.data())
        })
    }

    console.log(data);


    return (
        <div className='h-auto w-full p-5 px-10 capitalize'>
            <h1 className='h-18 text-2xl'>Deshborad</h1>
            <h1 className='text-3xl mx-7 font-bold'>Welcome, {data.name}</h1>
        </div>
    )
}
