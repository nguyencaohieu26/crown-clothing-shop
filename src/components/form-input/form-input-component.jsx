import { Fragment } from "react"
import {FormInputLable,Input,Group} from './form-input.styles';


const FormInput = ({label,...otherProps}) =>{
    return (<Fragment>
        <Group>
           <Input {...otherProps}/>   
           {label && <FormInputLable shrink={otherProps.value.length}>{label}</FormInputLable>}    
        </Group>
    </Fragment>)
}
export default FormInput;