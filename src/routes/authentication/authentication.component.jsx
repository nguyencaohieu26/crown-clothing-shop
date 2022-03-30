import {signInWithGooglePopup,createUserDocumentFromAuth,signInWithGoogleRedirect
    ,auth} from '../../utils/firebase.utlis'
import { useEffect } from 'react';
import {getRedirectResult} from 'firebase/auth';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';

import './authentication.styles.scss';

const Authentication = () =>{
    // const logGoogleUserRedirect = async () =>{
    //     const {user} = await signInWithGoogleRedirect();
    //     console.log(user);
    // }

    // useEffect(async ()=>{
    //    const response = await getRedirectResult(auth)
    //    if(response){
    //     await createUserDocumentFromAuth(response.user);
    //    }
    // },[]);

    return(
    <div className='authentication-container'>
        <SignInForm/>
        <SignUpForm/>
    </div>)
}
export default Authentication;