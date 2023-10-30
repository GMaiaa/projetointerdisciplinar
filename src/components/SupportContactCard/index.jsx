import { Container } from "./styles";

export function SupportContactCard({ title , url, color}) {
    return (
        <Container color={color} to={url}>
	    {title}
	    <div class="horizontal"></div>
	    <div class="button__vertical"></div>
        </Container>
    )
}