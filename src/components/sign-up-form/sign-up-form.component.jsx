import { Fragment,useState} from "react"
import {createAuthUserWithEmailAndPassword,createUserDocumentFromAuth} from '../../utils/firebase.utlis';
import FormInput from "../form-input/form-input-component";
import Button from "../button/button.component";
import './sign-up-form.styles.scss';
const defaultFormFields = {
    displayName: '',
    email: '',
    password:'',
    confirmPassword:'',
}
const SignUpForm = () =>{
    const [formFields,setFormFields] = useState(defaultFormFields);
    const {displayName,email,password,confirmPassword} = formFields;
    
    const handleChange = (event) =>{
        //identify what input
        const {name,value} = event.target;
        //update value
        setFormFields({...formFields,[name]:value});
    }
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if(password !== confirmPassword){
            console.log('password do not match');
            return;
        }
        try{
            const {user} = await createAuthUserWithEmailAndPassword(email,password);
            await createUserDocumentFromAuth(user,{displayName});
            setFormFields(defaultFormFields);
        }catch(err){
            if(err.code == 'auth/email-already-in-use'){
                alert('Email is already is used');
            }else{
                console.log('Error create account '+err.message);
            }
        }
    }
    return(
        <Fragment>
            <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                     <FormInput label="DisplayName"
                     name="displayName" 
                     onChange={handleChange} 
                     type='text' 
                     value={displayName} required/>
            
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

                    <FormInput 
                     label="Confirm Password"
                     name="confirmPassword" 
                     onChange={handleChange} 
                     type='password' 
                     value={confirmPassword} required/>
                {/*  */}
                <div>
                    <Button type="submit">Submit</Button>
                </div>
            </form>
            </div>
        </Fragment>
    )
}
export default SignUpForm;