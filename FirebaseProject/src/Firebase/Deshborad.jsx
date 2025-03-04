import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { auth, db } from '../../firebaseConfig'
import { doc, getDoc } from 'firebase/firestore'

export default function Deshborad() {

    const [uid, setUid] = useState('')
    const [data, setData] = useState(null)

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
            setData(user.data().name)
        })
    }


    return (
        <div>
            <h1 className='h-40 text-2xl'>Deshborad</h1>
            <h1>Welcome ,{data}</h1>
        </div>
    )
}
