import { Container } from "./styles";

export function SupportCard({image, title, description}){
    return(
        <Container>
            <img src={image}/>
            <h1> {title} </h1>
            <p> {description} </p>
        </Container>
    )
}