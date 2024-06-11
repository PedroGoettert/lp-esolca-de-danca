import { Copyright, EnvelopeSimple, InstagramLogo } from '@phosphor-icons/react'
import { FormContact } from './FormContact'
import {
  ContainerContact,
  ContainerCopyright,
  ContainerFooter,
  ContentFooter,
  SocialNetwork,
} from './style'

export function Footer() {
  return (
    <ContainerFooter>
      <FormContact />

      <ContentFooter>
        <ContainerContact>
          <strong>
            Endereço: R. di Sato, 0000 - Caldeirao, Porto Alegre {`(RS)`}
          </strong>

          <strong>
            Telefone: <span>{'(99) 99999-9999'}</span>
          </strong>
        </ContainerContact>

        <SocialNetwork>
          <a
            href="https://www.instagram.com/donz_santana"
            target="_blank"
            rel="noreferrer"
          >
            <InstagramLogo weight="bold" />
          </a>

          <a href="mailto:donzescoladedanca@gmail.com">
            <EnvelopeSimple weight="bold" />
          </a>
        </SocialNetwork>
      </ContentFooter>

      <ContainerCopyright>
        <Copyright /> <p>2024 Todos os direitos reservados.</p>
      </ContainerCopyright>
    </ContainerFooter>
  )
}
