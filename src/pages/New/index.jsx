import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { InputCheckbox } from "../../components/InputCheckbox";

import { Container, Form } from "./styles";

export function New() {

  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Novo Produto</h1>
            <ButtonText title="Voltar" />
          </header>

          <Input
            placeholder="Nome do produto"
          />
          <Input placeholder="R$ 00,00"/>

          <Textarea
            placeholder="Descrição"
          />
          <Button title="Salvar" />
        </Form>
      </main>
    </Container>
  );
}
