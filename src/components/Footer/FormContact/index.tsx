import { ContainerForm, ContetnForm, Form, Title } from './style'

export function FormContact() {
  return (
    <ContainerForm id="Contato">
      <ContetnForm>
        <Title>
          <h2>Contato</h2>

          <h3>Descubra o prazer da dança na escola de Dança.</h3>

          <p>
            Junte-se a nós e deixe a música guiar o seu caminho! Inscreva-se
            agora para receber mais informações sobre nossos aulas e horários.
          </p>
        </Title>

        <Form>
          <label htmlFor="name">Nome completo</label>
          <input type="text" name="name" id="name" />

          <label htmlFor="number">Telefone</label>
          <input type="text" name="number" id="number" />

          <label htmlFor="email">E-mail</label>
          <input type="email" name="email" id="email" />

          <button type="submit">Enviar</button>
        </Form>
      </ContetnForm>
    </ContainerForm>
  )
}
