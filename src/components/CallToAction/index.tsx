import {
  Container,
  Content,
  ImageOfPersonDancing,
  RedBar,
  Title,
} from './style'
import image from '../../assets/ImageOfPersonDancing.jpeg'

export function CallToaction() {
  return (
    <Container>
      <Content>
        <Title>
          <RedBar />
          <h1>A dança é a resposta...</h1>
          <p>
            A DANÇA É A FORMA QUE EU EXPRESSO <br />O MEU AMOR PELA VIDA.
          </p>
          <p>
            Se você estava procurando a resposta, agora encontrou! Venha fazer
            parte e expresse seu amor pela vida em um cantinho acolhedor.
            Estamos esperando por você para este novo capítulo em sua vida.
          </p>

          <a href="#Contato">Vamos dançar</a>
        </Title>

        <ImageOfPersonDancing src={image} alt="pessoa dançando" />
      </Content>
    </Container>
  )
}
