    import { Container } from "./syles";
    

    export function Item({urlImage, name, value}){
        return(
            <Container>
                <img src={urlImage} alt=""/>
                <h1> {name} </h1>
                <p>{value}</p>
                <button>Encomendar</button>
            </Container>
        )
    }