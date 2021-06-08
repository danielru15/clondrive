import React, {useState } from 'react'
import './login.css';
import firebase from '../../config/firebase'
import Drive from '../../pages/Drive';
const Login = () => {
    const [Token, setToken] = useState(null)
    const google = () =>  {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            if (result.credential) {
                var credential = result.credential;
                // This gives you a Google Access Token. You can use it to access the Google API.
                var token = credential.accessToken;
              }
            setToken(token)
        }).catch((error) => {
            return error
        });
    }
   
    return (
        <>
            {
                Token ? 
                <Drive
                  Token={Token}
                />
                : 
                <div className="login">
                    <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="logo" />
                    <h1>Iniciar sesión</h1>
                    <span>Ir a Google Drive</span>
                    <button onClick={google}>Ingresar</button>
                </div>
            }
        </>
    )
}

export default Login
