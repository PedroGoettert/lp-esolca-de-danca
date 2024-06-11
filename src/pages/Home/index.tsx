import { Card } from '../../components/Card'
import { Header } from '../../components/Header'

import {
  ContainerHome,
  ContainerContent,
  Content,
  ContainerTitle,
  BackgroundImage,
  PrimaryButton,
  WhatsappButton,
} from './style'

import background from '../../assets/backgrounds/background.png'
import { CallToaction } from '../../components/CallToAction'
import { Footer } from '../../components/Footer'
import whatsappLogo from '../../assets/Whatsapp.png'

export function Home() {
  return (
    <ContainerHome id="Home">
      <BackgroundImage src={background} alt="Fundo da Página" />
      <Header />
      <ContainerContent>
        <WhatsappButton
          href="https://wa.me/5551997869279?text=Olá, gostaria de agendar uma aula experimental"
          target="_blank"
          rel="noreferrer"
        >
          <img src={whatsappLogo} alt="Botão Whatsapp" />
        </WhatsappButton>
        <Content>
          <ContainerTitle>
            <p>ESTILO DE VIDA</p>
            <h1>A MELHOR ESCOLA DE DANÇA DE PORTO ALEGRE</h1>
            <p>
              Descubra por que somos a melhor Escola de Dança de Porto Alegre!{' '}
              <br />
              <span>
                Aqui, você se torna parte de uma comunidade acolhedora e
                apaixonada pela dança. Venha fazer parte da nossa família e
                descubra a alegria da dança conosco!
              </span>
            </p>
          </ContainerTitle>

          <PrimaryButton href="#Contato">Venha dançar</PrimaryButton>
        </Content>
      </ContainerContent>

      <Card />

      <CallToaction />

      <Footer />
    </ContainerHome>
  )
}
