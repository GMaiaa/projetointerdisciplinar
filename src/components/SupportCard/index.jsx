import { Container, Image, Content } from "./styles";

export function SupportCard({ image, title, description }) {
    return (
        <Container>
            <Image backgroundImage={image}/>
            <Content>
                <h3> {title }</h3>
                <p> {description} </p>
                <a href="#">
                    <button> Ver mais</button>
                </a>
            </Content>
        </Container>
    )
}