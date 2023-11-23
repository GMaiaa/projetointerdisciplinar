import { Container } from "./styles";

export function SupportContactCard({ title , url, color}) {
    return (
        <Container color={color} to={url}>
	    {title}
	    <div className="horizontal"></div>
	    <div className="button__vertical"></div>
        </Container>
    )
}