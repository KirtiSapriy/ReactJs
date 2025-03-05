import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { auth, db } from '../../firebaseConfig'
import { doc, getDoc } from 'firebase/firestore'

export default function Dashboard() {

    const [Uid, setUid] = useState(null)
    const [data, setdata] = useState("")


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUid(user.uid)
            }
        })
    }, [])

    useEffect(() => {
        if (Uid) {
            getdata()
        }
    }, [Uid])

    const getdata = async () => {
        await getDoc(doc(db, 'users', Uid)).then((res) => {
            setdata(res.data())
        })
    }

    return (
        <div>
            <center><h1>Dashboard</h1>
                <h2>Hello, {data.name}</h2>
            </center></div>
    )
}
