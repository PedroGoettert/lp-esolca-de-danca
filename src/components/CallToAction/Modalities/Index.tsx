import {
  ContainerModalities,
  ContainerSwiper,
  ContentSwiper,
  Title,
  PrimmaryButton,
  ImageModalitie,
} from './style'
import { modalities } from '../../../utils/modalities'

import { register } from 'swiper/element/bundle'

import 'swiper/css'
import 'swiper/css/navigation'

register()

export function Modalities() {
  return (
    <ContainerModalities id="Modalidades">
      <Title>
        <h2>Modalidades</h2>
        <h1>Todos os estilos de dança que você procura estão aqui.</h1>
        <p>
          Descubra por que a Donz Escola de Dança é a melhor escolha em Porto
          Alegre para uma variedade excepcional de estilos de dança!
        </p>
      </Title>

      <ContainerSwiper
        pagination={{ clickable: true }}
        slidesPerView={3}
        centeredSlides
        spaceBetween={32}
        loop
        navigation
      >
        {modalities.map((modalitie) => (
          <ContentSwiper key={modalitie.id}>
            <ImageModalitie
              src={modalitie.url}
              alt={`Modalidade ${modalitie.name}`}
            />
          </ContentSwiper>
        ))}
      </ContainerSwiper>

      <PrimmaryButton href="#Contato">Quero descobrir</PrimmaryButton>
    </ContainerModalities>
  )
}
