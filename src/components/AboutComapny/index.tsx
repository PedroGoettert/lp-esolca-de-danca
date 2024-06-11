import {
  ThumbsUp,
  Clock,
  LockSimpleOpen,
  CheckCircle,
  Users,
  Medal,
  Stack,
  Star,
} from '@phosphor-icons/react'

import {
  ContainerAboutCompany,
  ContainerPaperCut,
  ContentAboutCompany,
  ContentPaperCut,
  PrimaryButton,
  Teste,
} from './style'

import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../../styles/themes/default'

export function AboutCompany() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ContainerAboutCompany>
        <ContentAboutCompany>
          <Teste>
            <ThumbsUp color={defaultTheme.white} />
            <p>+ de 15 Modalidades</p>
          </Teste>

          <Teste>
            <Clock color={defaultTheme.white} />
            <p>A maior quantidade de aulas de Porto Alegre</p>
          </Teste>

          <Teste>
            <LockSimpleOpen color={defaultTheme.white} />
            <p>Horários flexíveis</p>
          </Teste>

          <Teste>
            <CheckCircle color={defaultTheme.white} />
            <p>Modelo inovador de check-in</p>
          </Teste>

          <Teste>
            <Users color={defaultTheme.white} />
            <p>
              Equipe de <br /> <span>supervisão técnica</span>
            </p>
          </Teste>

          <Teste>
            <Medal color={defaultTheme.white} />
            <p>Professores especialistas nas suas modalidades</p>
          </Teste>

          <Teste>
            <Stack color={defaultTheme.white} />
            <p>Metodologia com divisão por níveis</p>
          </Teste>

          <Teste>
            <Star color={defaultTheme.white} />
            <p>
              Estrutura adequada <br />
              <span>às modalidades</span>
            </p>
          </Teste>
        </ContentAboutCompany>

        <ContainerPaperCut>
          <ContentPaperCut>
            <div>
              <h2>Fachada</h2>
              <p>
                Bem-vindo ao nosso lugar onde os sonhos dançam
                <br />
                e os corações se encontram. Aqui, na nossa fachada colorida e
                vibrante, a magia da dança ganha vida. Entre
                <br /> e sinta-se em casa!
              </p>
            </div>
          </ContentPaperCut>
          <ContentPaperCut>
            <div>
              <h2>Recepção</h2>
              <p>
                Nossa equipe de recepção faz questão de fazer todos se sentirem
                em casa, independentemente de serem iniciantes ou dançarinos
                experientes.
              </p>
            </div>
          </ContentPaperCut>
          <ContentPaperCut>
            <div>
              <h2>Lounge</h2>
              <p>
                Aqui, não é apenas sobre dançar, é sobre criar uma comunidade
                acolhedora onde todos se sintam valorizados e amados.
              </p>
            </div>
          </ContentPaperCut>
          <ContentPaperCut>
            <div>
              <h2>Sala 1</h2>
              <p>
                Perfeita para diversas modalidades (Free Funk, Fit Dance,
                Stiletto). Essa sala também possui extensos tecidos cor-de-rosa
                pensados especialmente para a prática do Tecido Acrobático.
              </p>
            </div>
          </ContentPaperCut>
          <ContentPaperCut>
            <div>
              <h2>Sala 2</h2>
              <p>
                O que teria mais a nossa cara do que uma sala para as
                modalidades de clássico {'(Ballet, Jazz, Contemporâneo...)'}{' '}
                trazer o conceito da
                {'"beleza da imperfeição"'}?
              </p>
            </div>
          </ContentPaperCut>
          <ContentPaperCut>
            <div>
              <h2>Sala 3</h2>
              <p style={{ padding: '0 3rem' }}>
                Uma sala com luzes neon coloridas, pensada para <br /> a prática
                de plurimodalidades {'(Ritmos, Jazz Funk, Hip Hop...)'}. Essa
                sala também é preparada para a prática do Pole Dance.
              </p>
            </div>
          </ContentPaperCut>
        </ContainerPaperCut>

        <PrimaryButton href="#Contato">Fazer parte</PrimaryButton>
      </ContainerAboutCompany>
    </ThemeProvider>
  )
}
