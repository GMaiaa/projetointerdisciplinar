import { Container } from "./styles";
 
export function Input({ icon: Icon, errors, ...rest}){
    return(
        <Container>
            {Icon && <Icon size={20} />}
            <input {...rest}/>
            {errors && <p>{errors}</p>}
        </Container>
    )
}