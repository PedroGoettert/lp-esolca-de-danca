import { SwiperSlide, Swiper } from 'swiper/react'
import { styled } from 'styled-components'

export const ContainerModalities = styled.section`
  margin-top: 5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

  padding-bottom: 6rem;
`

export const Title = styled.div`
  width: 55%;

  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;

  gap: 0.5rem;

  h2 {
    font-family: Inter;
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.875rem;
  }

  h1 {
    color: ${(props) => props.theme.pink};
    line-height: 3.75rem;
  }

  p {
    width: 65%;
    color: #9e9e9e;
    font-size: 0.875rem;
    line-height: 1.5rem; /* 171.429% */
  }
`

// Carousel

export const ContainerSwiper = styled(Swiper)`
  width: 100%;
  max-width: 1400px;

  padding: 0 10rem;
`

export const ContentSwiper = styled(SwiperSlide)`
  width: 21.0625rem;
  height: 21rem;
`

export const ImageModalitie = styled.img`
  width: 100%;
  height: 100%;

  border-radius: 1rem;
`

// Button

export const PrimmaryButton = styled.a`
  width: 15rem;
  padding: 0.625rem;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${(props) => props.theme.white};
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.625rem;

  border-radius: 0.25rem;
  background: ${(props) => props.theme.pink};
`
