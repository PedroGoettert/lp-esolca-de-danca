import styled from 'styled-components'

export const ContainerHome = styled.div`
  font-family: 'Leelawadee UI', sans-serif;
`

export const BackgroundImage = styled.img`
  width: 100%;
  margin-left: -1px;
  height: 100%;

  position: absolute;

  left: 50%;
  transform: translateX(-50%);
  z-index: -1;
`

export const ContainerContent = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  height: 85vh;

  padding-right: 4rem;

  display: flex;
  justify-content: flex-end;
  position: relative;
`

export const WhatsappButton = styled.a`
  align-self: flex-end;

  position: fixed;
  z-index: 5;

  margin-right: -3.25rem;
  margin-bottom: 1rem;
`

export const Content = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  gap: 1.5rem;

  color: ${(props) => props.theme.white};
  text-align: right;
`

export const PrimaryButton = styled.a`
  width: 15rem;
  padding: 0.625rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.black};
  color: ${(props) => props.theme.white};
  font-weight: 700;

  border-radius: 0.25rem;
`

export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;

  margin-top: -3rem;

  gap: 0.5rem;

  p:first-child {
    font-weight: 700;
  }

  p:last-child {
    font-size: 0.875rem;
  }
`
