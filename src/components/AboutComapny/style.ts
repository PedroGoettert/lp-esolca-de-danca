import styled from 'styled-components'

export const ContainerAboutCompany = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-bottom: 15rem;
`

export const ContentAboutCompany = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  justify-items: center;

  margin-bottom: 5rem;
`

export const Teste = styled.div`
  width: 15.625rem;
  height: 16.125rem;
  flex-shrink: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-radius: 1rem;
  background: #ec174c;

  color: ${(props) => props.theme.white};

  box-shadow: -5px 5px 4px 0px rgba(0, 0, 0, 0.25) inset;

  svg {
    width: 5rem;
    height: 5rem;

    color: white;
  }

  p {
    width: 14rem;
    font-size: 1.25rem;

    font-weight: 700;
    line-height: 1.875rem;

    text-align: center;
  }
`
export const ContainerPaperCut = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: repeat(3, 1fr);
  gap: 1.5rem;

  margin-bottom: 3.35rem;
`

export const ContentPaperCut = styled.div`
  width: 35rem;
  height: 19rem;
  padding: 0 2rem;

  border-radius: 1rem;
  background: #ec174c;
  box-shadow: -5px 5px 4px 0px rgba(0, 0, 0, 0.25) inset;

  display: flex;
  justify-content: center;
  align-items: center;

  gap: 1.5rem;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;

    h2 {
      font-size: 2rem;
      font-weight: 350;
      line-height: 2.75rem;

      color: ${(props) => props.theme.white};
    }

    p {
      font-size: 0.875rem;
      line-height: 1.5rem;
      text-align: center;
      padding: 0 2.2rem;
      color: ${(props) => props.theme.white};
    }
  }
`

export const PrimaryButton = styled.a`
  display: flex;
  width: 15rem;
  padding: 0.875rem;
  justify-content: center;
  align-items: center;

  color: ${(props) => props.theme.white};
  font-weight: bold;

  background-color: ${(props) => props.theme.pink};
  border-radius: 0.25rem;
`
