import { Link } from "react-router-dom";
import { Container, Image, Content } from "./styles";

export function SupportCard({ image, title, description, route }) {
    return (
        <Container>
            <Image backgroundImage={image}/>
            <Content>
                <h3> {title }</h3>
                <p> {description} </p>
                <Link to={route}>
                    <button> Ver mais</button>
                </Link>
            </Content>
        </Container>
    )
}