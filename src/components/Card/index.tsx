import { ThemeProvider } from 'styled-components'
import { AboutCompany } from '../AboutComapny'
import {
  BackgroundNameDonz,
  ContainerCard,
  ContentCard,
  ContentTitle,
} from './style'
import { CaretDown } from '@phosphor-icons/react'
import { defaultTheme } from '../../styles/themes/default'
import backgroundName from '../../assets/backgrounds/nameDonz.jpg'

export function Card() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ContainerCard id="Sobre">
        <ContentCard>
          <BackgroundNameDonz src={backgroundName} alt="" />

          <a href="#Sobre">
            <CaretDown weight="bold" color={defaultTheme.pink} />
          </a>

          <ContentTitle>
            <p>Nossa Escola</p>
            <h1>O que oferecemos a você</h1>

            <p>
              Sabemos que a escolha de uma escola de dança é uma decisão
              importante e queremos mostrar para você que essa escolha será a
              melhor possível de acordo com o seu objetivo.
            </p>
          </ContentTitle>
          <AboutCompany />
        </ContentCard>
      </ContainerCard>
    </ThemeProvider>
  )
}
