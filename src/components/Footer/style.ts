import styled from 'styled-components'

export const ContainerFooter = styled.footer`
  width: 100%;
  max-width: 1400px;

  margin: 0 auto;

  padding-bottom: 5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;

  color: ${(props) => props.theme.white};
`

export const ContentFooter = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  gap: 2.5rem;
`

export const ContainerContact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;

  font-family: 'Inter', sans-serif;

  span {
    color: ${(props) => props.theme.black};
  }
`

export const SocialNetwork = styled.div`
  display: flex;
  gap: 1.5rem;

  a {
    width: 4.875rem;
    height: 4.875rem;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${(props) => props.theme.white};
    border-radius: 999px;

    svg {
      width: 2.3125rem;
      height: 2.3125rem;

      color: ${(props) => props.theme.pink};
    }
  }
`

export const ContainerCopyright = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;

  font-size: 0.875rem;
  line-height: 1.5rem;
`
