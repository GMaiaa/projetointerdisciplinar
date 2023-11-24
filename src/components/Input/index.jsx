import { Container } from "./styles";
import InputMask from "react-input-mask"
 
export function Input({ icon: Icon, errors, ...rest}){
    return(
        <Container errors={errors}>
            {errors && <p>{errors}</p>}
            <div>
                {Icon && <Icon size={20} />}
                <InputMask {...rest} />                
            </div>
        </Container>
    )
}