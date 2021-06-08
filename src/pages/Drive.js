import React, { useEffect, useState } from 'react'
import firebase from '../config/firebase'
import Header from '../components/header/Header'
import LeftSidebar from '../components/sidebar/LeftSidebar'
import Body from '../components/body/Body'
import './Drive.css'

const Drive = ({Token}) => {
    const [User, setUser] = useState(null)
    useEffect(() => {
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
              setUser(user.photoURL)
            } else {
              // usuario NO está logueado.
            }
          });
    }, [Token])
    return (
        <>
         <Header
           User={User}
         />
         <div className="bodycontainer">
          <LeftSidebar/>
          <Body/>
         </div>
        </>
    )
}

export default Drive
