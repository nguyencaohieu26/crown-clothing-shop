import { Fragment,useState} from "react"
import {signInWithGooglePopup,signInAuthUserWithEmailAndPassword} from '../../utils/firebase.utlis';
import FormInput from "../form-input/form-input-component";
import Button from "../button/button.component";
import './sign-in-form.styles.scss';

const defaultFormFields = {
    email: '',
    password:''
}
const SignInForm = () =>{
    const [formFields,setFormFields] = useState(defaultFormFields);
    const {email,password} = formFields;

    const handleChange = (event) =>{
        //identify what input
        const {name,value} = event.target;
        //update value
        setFormFields({...formFields,[name]:value});
    }
    const handleSubmit = async (e)=>{
        e.preventDefault();
        try{
            const {user} = await signInAuthUserWithEmailAndPassword(email,password);
            setFormFields(defaultFormFields);
        }catch(err){
            //Handle message error
            switch(err.code){
                case "auth/wrong-password":
                    alert('incorrect password for email');
                break;
                case "auth/user-not-found":
                    alert('no user associated with this email');
                break;
                default:
                    console.log(err);
            }
        }
    }
    const signInWithGoogle = async () =>{
        const {user} = await signInWithGooglePopup();
    }
    return(
        <Fragment>
            <div className="sign-up-container">
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
                <form onSubmit={handleSubmit}>
                        <FormInput
                        label="Email" 
                        name="email" 
                        type='email' 
                        onChange={handleChange} 
                        value={email} required/>
                
                        <FormInput
                        label="Password" 
                        name="password" 
                        onChange={handleChange} 
                        type='password' 
                        value={password} required/>

                    {/*  */}
                    <div className="buttons-container">
                        <Button type="submit">Sign in</Button>
                        <Button buttonType="google" type="button" onClick={signInWithGoogle}>Goggle Sign In</Button>
                    </div>
                </form>
            </div>
        </Fragment>
    )
}
export default SignInForm;