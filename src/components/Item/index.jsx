import { Container } from './syles';

export function Item({ name, value, urlImage, onOrderClick }) {
    return (
        <Container>
            <img src={urlImage} alt={name} />
            <h1>{name}</h1>
            <p>{value}</p>
            <button onClick={onOrderClick}>Encomendar</button>
        </Container>
    );
}