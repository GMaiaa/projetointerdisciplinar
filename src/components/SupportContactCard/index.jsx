import { Container } from "./styles";

export function SupportContactCard({ icon: Icon, title, description, span}) {
    return (
        <Container>
            {Icon && <Icon size={20} />}
            <strong>{title}</strong>
            <div>
               {description}
            </div>
            <span>{span}</span>
        </Container>
    )
}