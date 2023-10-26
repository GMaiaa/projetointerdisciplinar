
import { api } from "../../services/api";
import { Container, Body, } from "./styles";

export function User({ data, ...rest }) {


    return (
        <Container {...rest}>
            <Body>
                <h1> {data.name} </h1>
            </Body>

            <footer>
                <p> Email: {data.email}</p>
            </footer>
        </Container>
    );
}
